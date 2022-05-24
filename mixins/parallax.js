
export default {
    data() {
        return {
         parallaxUp:null,
         parallaxDown,
         parallaxUpMobile,
         parallaxDownMobile,
         elsUp : null,
         elsDown : null ,
         elsUpMobile : null,
         elsDownMobile : null
        };
      },
      watch: {
         $route() {
            setTimeout(()=>{
                this.findAllElement()
                this.initInstanceParallax()
            },500)
        },
      },
    props: {
      
    },
    mounted(){
        console.log('MOUNTED')
        this.findAllElement()
        this.initInstanceParallax()
    },
    destroyed() { 
        console.log("destroy");
    },
    methods: {
      findAllElement(){
          this.elsUp = document.querySelectorAll('[data-parallaxUp]')
          this.elsDown = document.querySelectorAll('[data-parallaxDown]')
          this.elsUpMobile = document.querySelectorAll('[data-parallaxUpMobile]')
          this.elsDownMobile = document.querySelectorAll('[data-parallaxDownMobile]')
      },
      initInstanceParallax(){
          if(window.innerWidth >= 1024){
            this.parallaxUp = new this.simpleParallax(this.elsUp,{
                overflow:true,
            })
            this.parallaxDown = new this.simpleParallax(this.elsDown,{
                overflow:true,
                orientation: 'down',
            })
          }else{
            this.parallaxUpMobile = new this.simpleParallax(this.elsUp,{
                overflow:true,
                maxTransition: 50
            })
            this.parallaxDownMobile = new this.simpleParallax(this.elsDown,{
                overflow:true,
                orientation: 'down',
                maxTransition: 50

            })
          }
       
      }
    },
  }