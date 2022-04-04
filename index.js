/* global Vue, axios, moment */

// momentjs
var moment = require("moment");

console.log(moment().format("MMM Do YY"));

// chance
var Chance = require("chance");

var chance = new Chance();
var my_random_string = chance.string();
console.log(my_random_string);

// mathjs
import { atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from "mathjs";

console.log(derivative("x^2 + x", "x"));

// testing babel
var name = "Bob",
  time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// vue
var App = {
  data: function () {
    return {
      message: "Hello Vue!",
    };
  },
};

Vue.createApp(App).mount("#app");
