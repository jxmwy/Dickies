
let top1 = $(".top-1")[0]
let top2img = $(".pic ")[0]
//鼠标滑动事件
$(document).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e) {
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel));
    if (delta < 0) {//向下滚动
        // console.log(delta)
        top2img.style.width = "70px"
        top1.id = "fade"
    } else {//向上滚动
        // console.log(delta)
        top1.id = ""
        top2img.style.width = "170px"
    }
}
// 二级菜单
$(".manli").mouseenter(function () {
    $(".man").slideDown()
    $(".manli").css("background-color", "#e5e5e5")
})
$(".man").mousemove(function () {
    $(".man").show()
    $(".manli").css("background-color", "#e5e5e5")
})
$(".manli").mouseleave(function () {
    $(".man").hide()
    $(".manli").css("background-color", "#fff")
})
$(".man").mouseleave(function () {
    $(".man").hide()
    $(".manli").css("background-color", "#fff")
})

$(".womanli").mouseenter(function () {
    $(".woman").slideDown()
    $(".womanli").css("background-color", "#e5e5e5")
})
$(".woman").mousemove(function () {
    $(".woman").show()
    $(".womanli").css("background-color", "#e5e5e5")
})
$(".womanli").mouseleave(function () {
    $(".woman").hide()
    $(".womanli").css("background-color", "#fff")
})
$(".woman").mouseleave(function () {
    $(".woman").hide()
    $(".womanli").css("background-color", "#fff")
})

//购物车
$(".shopCar").mouseenter(function () {
    $(".noShop").slideDown()
})
$(".noShop").mousemove(function () {
    $(".noShop").show()
})
$(".shopCar").mouseleave(function () {
    $(".noShop").slideUp()
})
$(".noShop").mouseleave(function () {
    $(".noShop").slideUp()
})

