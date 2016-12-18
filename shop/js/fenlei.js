$(function () {
    var lists=$(".fl-left-list");
    lists.click(function () {
            var index=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".fl-con-list").eq(index).addClass("block").siblings().removeClass("block");

    })
})