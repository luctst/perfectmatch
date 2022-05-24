

export default {
    data() {
        return {
         parallaxUp:null
        };
      },
      watch: {
         $route() {
            setTimeout(()=>{
                this.findAllElement()
                this.initInstanceParallax()
                console.log('CHANGE')
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
      },
      initInstanceParallax(){
        this.parallaxUp = new this.simpleParallax(this.elsUp,{
            overflow:true,
        })
        this.parallaxDown = new this.simpleParallax(this.elsDown,{
            overflow:true,
            orientation: 'down',
        })
      }
    },
  }