import Vue from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';

declare module 'vue' {
  interface VueConstructor {
    util: {
      defineReactive(obj: object, key: string, value: any): void;
    };
  }
}

const proto = Vue.prototype;
const { defineReactive } = Vue.util;

defineReactive(proto, '$buriLang', 'zh-CN');
defineReactive(proto, '$buriMessages', {
  'zh-CN': defaultMessages
});

export default {
  messages() {
    return proto.$buriMessages[proto.$buriLang];
  },

  use(lang: string, messages?: object) {
    proto.$buriLang = lang;
    this.add({ [lang]: messages });
  },

  add(messages = {}) {
    deepAssign(proto.$buriMessages, messages);
  }
};
