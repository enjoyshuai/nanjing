/**
 * Created by Administrator on 2017/5/31.
 */
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
    var items = $(".carousel-inner .item")
    $(window).on("resize", function () {
        var width = $(window).width();
        if (width >= 768) {
            items.each(function () {
                var item = $(this);
                var imgSrc = item.data("largeImage")
                item.html('<a href="javascript:;" class="pcImg" style="background-image: url(' + imgSrc + ')"></a>')
            })
        } else {
            items.each(function () {
                var item = $(this);
                var imgSrc = item.data("smallImage")
                item.html('<a href="javascript:;" class="mobileImg"> <img src="' + imgSrc + '" alt=""/> </a>')
            })
        }
    }).trigger("resize")
//实现移动端手指触摸滑动
    var startX, endX
    var wjs_banner = $(".wjs_banner")[0];
    wjs_banner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;
        console.log(startX);
    })
    wjs_banner.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            $(".carousel").carousel('prev');
        }
        else if (endX - startX < 0) {
            $(".carousel").carousel('next');
        }
    });


    var ul = $(".wjs_product .nav-tabs");
    var lis = ul.find("li");
    console.log(lis)
    var totalWidth = 0;
    lis.each(function(index,value){
        totalWidth=totalWidth+$(value).innerWidth();
    })
    ul.width(totalWidth);
    var myScroll = new IScroll('.tab_parent',{
        scrollX:true,scrollY:false
    })
})


