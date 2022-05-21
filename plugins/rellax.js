import Vue from "vue";
import Rellax from 'rellax'
// NEED TO REFACTO FOR BETTER USE VUE LIFECYCLE
window.addEventListener('load',function(){
    new Rellax('[data-rellax]', {
        breakpoints: [350],
    });
})

Object.defineProperty(Vue.prototype, "Rellax", {
    value: Rellax
  });