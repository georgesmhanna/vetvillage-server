'use strict';

/**
 * Cart.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = ***REMOVED***

  /**
   * Promise to fetch all carts.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  fetchAll: (params) => ***REMOVED***
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('cart', params);
    // Select field to populate.
    const populate = Cart.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Cart
      .find()
      .where(filters.where)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
***REMOVED***,

  /**
   * Promise to fetch a/an cart.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  fetch: (params) => ***REMOVED***
    // Select field to populate.
    const populate = Cart.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Cart
      .findOne(_.pick(params, _.keys(Cart.schema.paths)))
      .populate(populate);
***REMOVED***,

  /**
   * Promise to count carts.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  count: (params) => ***REMOVED***
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('cart', params);

    return Cart
      .count()
      .where(filters.where);
***REMOVED***,

  /**
   * Promise to add a/an cart.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  add: async (values) => ***REMOVED***
    // Extract values related to relational data.
    const relations = _.pick(values, Cart.associations.map(ast => ast.alias));
    const data = _.omit(values, Cart.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Cart.create(data);

    // Create relational data and return the entry.
    return Cart.updateRelations(***REMOVED*** _id: entry.id, values: relations ***REMOVED***);
***REMOVED***,

  /**
   * Promise to edit a/an cart.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  edit: async (params, values) => ***REMOVED***
    // Extract values related to relational data.
    const relations = _.pick(values, Cart.associations.map(a => a.alias));
    const data = _.omit(values, Cart.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Cart.update(params, data, ***REMOVED*** multi: true ***REMOVED***);

    // Update relational data and return the entry.
    return Cart.updateRelations(Object.assign(params, ***REMOVED*** values: relations ***REMOVED***));
***REMOVED***,

  /**
   * Promise to remove a/an cart.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  remove: async params => ***REMOVED***
    // Select field to populate.
    const populate = Cart.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `***REMOVED*** passRawResult: true ***REMOVED***` as second argument.
    const data = await Cart
      .findOneAndRemove(params, ***REMOVED******REMOVED***)
      .populate(populate);

    if (!data) ***REMOVED***
      return data;
***REMOVED***

    await Promise.all(
      Cart.associations.map(async association => ***REMOVED***
        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? ***REMOVED*** [association.via]: data._id ***REMOVED*** : ***REMOVED*** [association.via]: ***REMOVED*** $in: [data._id] ***REMOVED*** ***REMOVED***;
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? ***REMOVED*** [association.via]: null ***REMOVED*** : ***REMOVED*** $pull: ***REMOVED*** [association.via]: data._id ***REMOVED*** ***REMOVED***;

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, ***REMOVED*** multi: true ***REMOVED***);
***REMOVED***)
    );

    return data;
***REMOVED***,

  /**
   * Promise to search a/an cart.
   *
   * @return ***REMOVED***Promise***REMOVED***
   */

  search: async (params) => ***REMOVED***
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('cart', params);
    // Select field to populate.
    const populate = Cart.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Cart.attributes).reduce((acc, curr) => ***REMOVED***
      switch (Cart.attributes[curr].type) ***REMOVED***
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) ***REMOVED***
            return acc.concat(***REMOVED*** [curr]: params._q ***REMOVED***);
    ***REMOVED***

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat(***REMOVED*** [curr]: ***REMOVED*** $regex: params._q, $options: 'i' ***REMOVED*** ***REMOVED***);
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') ***REMOVED***
            return acc.concat(***REMOVED*** [curr]: params._q === 'true' ***REMOVED***);
    ***REMOVED***

          return acc;
        default:
          return acc;
***REMOVED***
***REMOVED***, []);

    return Cart
      .find(***REMOVED*** $or ***REMOVED***)
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
***REMOVED***
***REMOVED***;