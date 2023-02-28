/**
 * Asynchronously loads the components
 */

import { lazyLoad } from 'utils/loadable';

export const Home = lazyLoad(
  () => import('./Home/index'),
  module => module.Home,
);

export const GLBOptimizer = lazyLoad(
  () => import('./GLBOptimizer/index'),
  module => module.GLBOptimizer,
);
