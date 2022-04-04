/* global Vue, axios, moment */

var moment = require("moment");
var Chance = require("chance");

console.log(moment().format("MMM Do YY"));

var chance = new Chance();
var my_random_string = chance.string();
console.log(my_random_string);

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
    };
  },
};

Vue.createApp(App).mount("#app");
