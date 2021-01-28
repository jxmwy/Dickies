
// 左边列表点击出现js
$(function () {
    $(".list p").click(function () {
        // console.log($(this).closest(".list").find("ul")[0])
        $(this).closest(".list").find("ul").slideToggle("fast")
    })
})
// 下拉选项
$(function () {
    $(".option").click(function () {
        $(".option ul").slideToggle()
    })
    $(".option li").click(function () {
        $(".option p").html($(this).html())
    })
})
// 商品划上
$(function () {
    $(".content").mouseenter(function () {
        $(this).find(".smallPic").show()
        $(this).find(".bigPic").find("span").show()
    })
    $(".content").mouseleave(function () {
        $(this).find(".smallPic").hide()
        $(this).find(".bigPic").find("span").hide()
        $(this).find(".bigPic").find("img").attr("src",this.src) 
    })
    $(".smallPic li img").mouseenter(function () {
        // console.log($(this).closest(".content").find(".bigPic").find("img")[0])
        $(this).closest(".content").find(".bigPic").find("img").attr("src",this.src) 
    })
})