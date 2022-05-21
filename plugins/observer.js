import Vue from "vue";

// NEED TO REFACTO FOR BETTER USE VUE
  

function observeTitle(els){
  reset(els) 
  this.observer = new IntersectionObserver((entries,observe) => {
    entries.forEach((entry,) => {
      if (entry.isIntersecting) {
        const el = [...entry.target.querySelectorAll('.t-line .t-line')]
        el.forEach((line, lineIndex) => {
          let time = lineIndex * 0.3;
          time = Math.round(time * 100) / 100;
          line.style.transform = "translateY(0)";
          line.style.transitionDuration = '1s'
          line.style["-webkit-transition-delay"]= `${time}s`;
          observe.unobserve(entry.target)
        })
      }
    });
  });
  els.forEach(el => {
    this.observer.observe(el);

  });
}

const reset =(els)=>{
  els.forEach(title=>{
    const line =  [...title.querySelectorAll('.t-line .t-line')]
    line.forEach((el)=>{
      el.style.transform = "translateY(100%)";
      el.style.transitionDuration = '0s'
      el.style["-webkit-transition-delay"]= `0s`;
    })

  })
}


Object.defineProperty(Vue.prototype, "observeTitle", {
    value: observeTitle
  });