
export default {
    data() {
        return {
         parallaxUp:null,
         parallaxDown:null,
         parallaxUpMobile:null,
         parallaxDownMobile:null,
         parallaxDownMobileAbout:null,
         elsUp : null,
         elsDown : null ,
         elsUpMobile : null,
         elsDownMobile : null,
         elsDownMobileAbout:null,

        };
      },
      watch: {
         $route() {
            setTimeout(()=>{
                this.findAllElement()
                this.initInstanceParallax()
                console.log('CHANGE')
            },1000)
        },
      },
    props: {
      
    },
    mounted(){
        this.findAllElement()
        this.initInstanceParallax()
    },
    methods: {
      findAllElement(){
          this.elsUp = document.querySelectorAll('[data-parallaxUp]')
          this.elsDown = document.querySelectorAll('[data-parallaxDown]')
          this.elsUpMobile = document.querySelectorAll('[data-parallaxUpMobile]')
          this.elsDownMobile = document.querySelectorAll('[data-parallaxDownMobile]')
          this.elsDownMobileAbout = document.querySelectorAll('[data-parallaxDownMobileAbout]')

      },
      initInstanceParallax(){
          if(window.innerWidth >= 1024){
            this.parallaxUp = new this.SimpleParallax(this.elsUp,{
                overflow:true,

            })
            this.parallaxDown = new this.SimpleParallax(this.elsDown,{
                overflow:true,
                orientation: 'down',
            })
          }else{
            this.parallaxUpMobile = new this.SimpleParallax(this.elsUpMobile,{
                overflow:true,
                maxTransition: 50
            })
            this.parallaxDownMobile = new this.SimpleParallax(this.elsDownMobile,{
                overflow:true,
                orientation: 'down',
                maxTransition: 50

            })
            this.parallaxDownMobileAbout = new this.SimpleParallax(this.elsDownMobileAbout,{
              overflow:true,
              orientation: 'down',
              maxTransition: 99

          })
          }
       
      }
    },
  }