import Loadable from 'react-loadable';
import Loader from './Loader';

export default Loadable(***REMOVED***
  loader: () => import('./index'),
  loading: Loader,
***REMOVED***);