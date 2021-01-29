
let top1 = $(".top-1")[0]
let top2img = $(".pic ")[0]
//鼠标滑动事件
$(window).scroll(function (){
    var wintop=$(window).scrollTop(); // 已滚动卷去的高度
    // 当滚动条离顶部60像素时的条件判断和执行动作
    // console.log(wintop)
    if (wintop > 60) {
        $(".pic").css("width", "70px")
        $(".top-1").css("display", "none")
        $(".top-2").css("position","fixed")
    } else {
        $(".pic").css("width", "170px")
        $(".top-1").css("display", "block")
        $(".top-2").css("position","")
    }
})
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

