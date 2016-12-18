$(function(){
    var mySwiper=new Swiper(".swiper-container",{
        pagination:".swiper-pagination",
        onInit: function(swiper){
            // swiperAnimateCache(swiper);
            // swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper){
            // swiperAnimate(swiper);
        }
    })
    var myscroll;
    function loaded() {
       myscroll=new IScroll("#wrapper",{
           mousewheel:true,
           bounce:true,
           click:true
       })
    }

})