webpackJsonp([3],***REMOVED***"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/admin/src/containers/PluginPage/index.js":function(e,o,n)***REMOVED***"use strict";function r(e)***REMOVED***return e&&e.__esModule?e:***REMOVED***default:e***REMOVED******REMOVED***function t(e,o)***REMOVED***if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")***REMOVED***function i(e,o)***REMOVED***if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o***REMOVED***function s(e,o)***REMOVED***if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,***REMOVED***constructor:***REMOVED***value:e,enumerable:!1,writable:!0,configurable:!0***REMOVED******REMOVED***),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)***REMOVED***function p(e)***REMOVED***return***REMOVED***dispatch:e***REMOVED******REMOVED***Object.defineProperty(o,"__esModule",***REMOVED***value:!0***REMOVED***),o.PluginPage=void 0;var l=Object.assign||function(e)***REMOVED***for(var o=1;o<arguments.length;o++)***REMOVED***var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])***REMOVED***return e***REMOVED***,a=function()***REMOVED***var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t)***REMOVED***var i=o&&o.defaultProps,s=arguments.length-3;if(n||0===s||(n=***REMOVED******REMOVED***),n&&i)for(var p in i)void 0===n[p]&&(n[p]=i[p]);else n||(n=i||***REMOVED******REMOVED***);if(1===s)n.children=t;else if(s>1)***REMOVED***for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];n.children=l***REMOVED***return***REMOVED***$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null***REMOVED******REMOVED******REMOVED***(),c=function()***REMOVED***function e(e,o)***REMOVED***for(var n=0;n<o.length;n++)***REMOVED***var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)***REMOVED******REMOVED***return function(o,n,r)***REMOVED***return n&&e(o.prototype,n),r&&e(o,r),o***REMOVED******REMOVED***(),d=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react/index.js"),u=r(d),_=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),m=(r(_),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-redux/lib/index.js")),f=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-helmet/lib/Helmet.js"),h=r(f),b=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/reselect/es/index.js"),y=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/index.js"),g=r(y),C=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/ErrorBoundary/index.js"),j=r(C),v=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/admin/src/containers/App/selectors.js"),O=o.PluginPage=function(e)***REMOVED***function o()***REMOVED***return t(this,o),i(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))***REMOVED***return s(o,e),c(o,[***REMOVED***key:"render",value:function()***REMOVED***var e=this,o=void 0,n=this.props.match.params.pluginId,r=this.props.plugins.toJS(),t=Object.keys(r).map(function(t)***REMOVED***var i=r[t];if(i.id===n)***REMOVED***o=i.name;var s=i.preventComponentRendering?i.blockerComponentProps:***REMOVED******REMOVED***,p=i.preventComponentRendering?g.default:i.mainComponent;return i.preventComponentRendering&&i.blockerComponent&&(p=i.blockerComponent),a(j.default,***REMOVED******REMOVED***,i.id,u.default.createElement(p,l(***REMOVED******REMOVED***,e.props,s)))***REMOVED******REMOVED***);return a("div",***REMOVED******REMOVED***,void 0,a(h.default,***REMOVED***title:"Strapi - "+o***REMOVED***),t)***REMOVED******REMOVED***]),o***REMOVED***(u.default.Component),P=(0,b.createSelector)((0,v.selectPlugins)(),function(e)***REMOVED***return***REMOVED***plugins:e***REMOVED******REMOVED***);o.default=(0,m.connect)(P,p)(O)***REMOVED***,"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/index.js":function(e,o,n)***REMOVED***"use strict";function r(e)***REMOVED***return e&&e.__esModule?e:***REMOVED***default:e***REMOVED******REMOVED***function t(e)***REMOVED***var o=e.blockerComponentTitle,n=e.blockerComponentDescription,r=e.blockerComponentIcon,t=e.blockerComponentContent,s=void 0===t?"":t,l=void 0;switch(s)***REMOVED***case"renderIde":l=P();break;case"renderButton":l=S();break;default:l=""***REMOVED***return i("div",***REMOVED***className:u.default.blockerComponent***REMOVED***,void 0,i("div",***REMOVED***className:u.default.header***REMOVED***,void 0,i("div",***REMOVED***className:u.default.icoContainer***REMOVED***,void 0,i("i",***REMOVED***className:(0,a.default)("fa",r)***REMOVED***)),i("div",***REMOVED******REMOVED***,void 0,i("h4",***REMOVED******REMOVED***,void 0,i(p.FormattedMessage,***REMOVED***id:o***REMOVED***)),i("p",***REMOVED******REMOVED***,void 0,i(p.FormattedMessage,***REMOVED***id:n***REMOVED***)),l)))***REMOVED***Object.defineProperty(o,"__esModule",***REMOVED***value:!0***REMOVED***);var i=function()***REMOVED***var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t)***REMOVED***var i=o&&o.defaultProps,s=arguments.length-3;if(n||0===s||(n=***REMOVED******REMOVED***),n&&i)for(var p in i)void 0===n[p]&&(n[p]=i[p]);else n||(n=i||***REMOVED******REMOVED***);if(1===s)n.children=t;else if(s>1)***REMOVED***for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];n.children=l***REMOVED***return***REMOVED***$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null***REMOVED******REMOVED******REMOVED***(),s=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react/index.js"),p=(r(s),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js")),l=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/classnames/index.js"),a=r(l),c=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),d=(r(c),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss")),u=r(d),_=i("p",***REMOVED******REMOVED***,void 0,"./config/environments/development/server.json"),m=i("br",***REMOVED******REMOVED***),f=i("br",***REMOVED******REMOVED***),h=i("br",***REMOVED******REMOVED***),b=i("br",***REMOVED******REMOVED***),y=i("br",***REMOVED******REMOVED***),g=i("br",***REMOVED******REMOVED***),C=i("br",***REMOVED******REMOVED***),j=i("br",***REMOVED******REMOVED***),v=i("br",***REMOVED******REMOVED***),O=i("br",***REMOVED******REMOVED***),P=function()***REMOVED***return i("div",***REMOVED***className:u.default.ide***REMOVED***,void 0,_,i("div",***REMOVED******REMOVED***,void 0,i("pre",***REMOVED***style:***REMOVED***whiteSpace:"pre-wrap"***REMOVED******REMOVED***,void 0,i("code",***REMOVED******REMOVED***,void 0,"***REMOVED***",m,' "host": "localhost",',f,' "port": 1337,',h,i("span",***REMOVED***style:***REMOVED***color:"#006EE7"***REMOVED******REMOVED***,void 0,' "autoReload": true,'),b,' "proxi": ***REMOVED***',y,'  "enabled": true',g," ***REMOVED***,",C,' "cron": ***REMOVED***',j,'  "enabled": false',v," ***REMOVED***",O,"***REMOVED***"))))***REMOVED***,S=function()***REMOVED***return i("div",***REMOVED***className:u.default.buttonContainer***REMOVED***,void 0,i("a",***REMOVED***className:(0,a.default)(u.default.primary,"btn"),href:"http://strapi.io",target:"_blank"***REMOVED***,void 0,"Read the documentation"))***REMOVED***;o.default=t***REMOVED***,"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss":function(e,o,n)***REMOVED***var r=n("../strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var t=***REMOVED******REMOVED***;t.transform=void 0,n("../strapi-helper-plugin/node_modules/style-loader/lib/addStyles.js")(r,t),r.locals&&(e.exports=r.locals)***REMOVED***,"../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/ErrorBoundary/index.js":function(e,o,n)***REMOVED***"use strict";function r(e)***REMOVED***return e&&e.__esModule?e:***REMOVED***default:e***REMOVED******REMOVED***function t(e,o)***REMOVED***if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")***REMOVED***function i(e,o)***REMOVED***if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o***REMOVED***function s(e,o)***REMOVED***if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,***REMOVED***constructor:***REMOVED***value:e,enumerable:!1,writable:!0,configurable:!0***REMOVED******REMOVED***),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)***REMOVED***Object.defineProperty(o,"__esModule",***REMOVED***value:!0***REMOVED***);var p=function()***REMOVED***var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,r,t)***REMOVED***var i=o&&o.defaultProps,s=arguments.length-3;if(n||0===s||(n=***REMOVED******REMOVED***),n&&i)for(var p in i)void 0===n[p]&&(n[p]=i[p]);else n||(n=i||***REMOVED******REMOVED***);if(1===s)n.children=t;else if(s>1)***REMOVED***for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+3];n.children=l***REMOVED***return***REMOVED***$$typeof:e,type:o,key:void 0===r?null:""+r,ref:null,props:n,_owner:null***REMOVED******REMOVED******REMOVED***(),l=function()***REMOVED***function e(e,o)***REMOVED***for(var n=0;n<o.length;n++)***REMOVED***var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)***REMOVED******REMOVED***return function(o,n,r)***REMOVED***return n&&e(o.prototype,n),r&&e(o,r),o***REMOVED******REMOVED***(),a=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react/index.js"),c=r(a),d=n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/prop-types/index.js"),u=(r(d),n("../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/node_modules/react-intl/lib/index.es.js")),_=p("h2",***REMOVED******REMOVED***,void 0,p(u.FormattedMessage,***REMOVED***id:"components.ErrorBoundary.title"***REMOVED***)),m=p("br",***REMOVED******REMOVED***),f=function(e)***REMOVED***function o(e)***REMOVED***t(this,o);var n=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return n.state=***REMOVED***error:null,errorInfo:null***REMOVED***,n***REMOVED***return s(o,e),l(o,[***REMOVED***key:"render",value:function()***REMOVED***return this.state.errorInfo?p("div",***REMOVED******REMOVED***,void 0,_,p("details",***REMOVED***style:***REMOVED***whiteSpace:"pre-wrap"***REMOVED******REMOVED***,void 0,this.state.error&&this.state.error.toString(),m,this.state.errorInfo.componentStack)):this.props.children***REMOVED******REMOVED***]),o***REMOVED***(c.default.Component);o.default=f***REMOVED***,"../strapi-helper-plugin/node_modules/css-loader/index.js??ref--0-oneOf-2-2!../strapi-helper-plugin/node_modules/postcss-loader/lib/index.js??ref--0-oneOf-2-3!../strapi-helper-plugin/node_modules/sass-loader/lib/loader.js!../../../../../../../../WORKSPACE/strapi/projects/coucou/admin/node_modules/strapi-helper-plugin/lib/src/components/BlockerComponent/styles.scss":function(e,o,n)***REMOVED***o=e.exports=n("../strapi-helper-plugin/node_modules/css-loader/lib/css-base.js")(!1),o.push([e.i,'.adminblockerComponent___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2UWnt***REMOVED***padding-top:5.5rem***REMOVED***.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt***REMOVED***display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;font-family:Lato***REMOVED***.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt>div***REMOVED***padding-top:2.5rem***REMOVED***.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt>div>h4***REMOVED***font-size:24px;font-weight:700;line-height:24px;margin-bottom:0***REMOVED***.adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt>div>p***REMOVED***margin-top:-1px;font-size:14px;color:#919bae***REMOVED***.adminicoContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__1Jhvp***REMOVED***padding-top:0!important;font-size:4.2rem;color:#323740;margin-right:20px;line-height:9.3rem***REMOVED***.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7***REMOVED***padding-top:2.3rem***REMOVED***.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>p***REMOVED***color:#006ee7;font-size:14px***REMOVED***.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>div***REMOVED***width:455px;background:#fff;color:#787e8f;font-size:12px***REMOVED***.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>div>ul***REMOVED***padding-left:20px;list-style:none***REMOVED***.adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7>div>ul>li***REMOVED***list-style:none***REMOVED***.adminbuttonContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2Het-***REMOVED***padding-top:2rem***REMOVED***.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf***REMOVED***border-radius:.3rem;border:none;font-weight:500;min-width:15rem;background:linear-gradient(315deg,#0097f6,#005eea);color:#fff;padding-top:4px;padding-left:1.6rem;padding-right:1.6rem;cursor:pointer;font-family:Lato;-webkit-font-smoothing:antialiased***REMOVED***.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:active***REMOVED***box-shadow:inset 1px 1px 3px rgba(0,0,0,.15)***REMOVED***.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:before***REMOVED***content:"\\F02D";font-family:FontAwesome;font-weight:600;font-size:1.3rem;margin-right:13px***REMOVED***.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:focus***REMOVED***outline:0***REMOVED***.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf>i***REMOVED***margin-right:1.3rem;font-weight:600;padding-top:1px***REMOVED***.adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf:hover***REMOVED***color:#fff***REMOVED***',""]),o.locals=***REMOVED***blockerComponent:"adminblockerComponent___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2UWnt",header:"adminheader___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__30KGt",icoContainer:"adminicoContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__1Jhvp",ide:"adminide___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__eGYU7",buttonContainer:"adminbuttonContainer___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2Het-",primary:"adminprimary___-_-_-_-_-_-_-_-WORKSPACE-strapi-projects-coucou-admin-node_modules-strapi-helper-plugin-lib-src-components-BlockerComponent-styles__2N4Xf"***REMOVED******REMOVED******REMOVED***);
//# sourceMappingURL=3.88d1fab6b3652f85668d.chunk.js.map