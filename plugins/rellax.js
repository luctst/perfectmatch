import Vue from "vue";
import Rellax from 'rellax'
// NEED TO REFACTO FOR BETTER USE VUE LIFECYCLE
window.addEventListener('load',function(){
    var rellax = new Rellax('[data-rellax]');
})

Object.defineProperty(Vue.prototype, "Rellax", {
    value: Rellax
  });