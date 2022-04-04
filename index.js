/* global Vue, axios, moment */

var moment = require("moment");

console.log(moment().format("MMM Do YY"));

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
    };
  },
};

Vue.createApp(App).mount("#app");
