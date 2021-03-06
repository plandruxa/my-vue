export default {
  install (Vue) {
    const myVue = window.myVue = new Vue({
      data: {
        lang: Vue.config.lang || 'en',
      },
    });

    Object.defineProperties(Vue.prototype, {
      $my: {
        get () {
          return myVue;
        },
      },
    });
  },
};