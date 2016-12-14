$(function(){
    function resize(originSize,type){
        var type=type|| "x";
        if(type=="x"){
            var clientw=document.documentElement.clientWidth;
            var scale=clientw/originSize*100;
        }else if(type=="y"){
            var clienth=document.documentElement.clientHeight;
            var scale=clienth/originSize*100;
        }
        var html=document.getElementsByTagName("html")[0];
        html.style.fontSize=scale+"px";
    }
    resize(750);
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
})