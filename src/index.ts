// This file is auto generated by build/build-entry.js
import { VueConstructor } from 'vue/types';
import Components from './components';
import Locale from './locale';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const version = '1.0.0';
const components = [
  Components
];

const install = (Vue: VueConstructor) => {
  components.forEach(Component => {
    // Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Components,
  Locale
};

export default {
  install,
  version
};
