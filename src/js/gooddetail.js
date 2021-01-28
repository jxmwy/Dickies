// 放大镜
$(function () {
    
    $(".pic li").click(function () {
        // 点击那张就切换到那张
        $(".pic li").css("border", "2px solid #fff")
        $(this).css("border", "2px solid #000")
        $(".big img").attr("src", $(this).find("img")[0].src)
        $(".plus img").attr("src", $(this).find("img")[0].src)
    })
    // 划上显示
    $(".big").mouseenter(function () {
        $(".big p").show()
        $(".plus").show()
    })
    // 划出影藏
    $(".big").mouseleave(function () {
        $(".big p").hide()
        $(".plus").hide()
    })
    // 鼠标滑上
    $(".big img").mousemove(function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        console.log(x,y)
        // 判断阴影部分是否出去边界值
        if(y<=75){
            y=75
        }
        if(y>=445){
            y=445
        }
        if(x<=75){
            x=75;
        }
        if(x>=325){
            x=325
        }
        // 移动阴影位置
        
        $(".big p").css("top", y-75+ "px")
        $(".big p").css("left", x-75+ "px")

        // 移动放大图片的相应位置
        var x1 = (-x + 75) * 2 + "px";
        var y1 = (-y + 75) * 2 + "px";
        $(".plus img").css("top", y1)
        $(".plus img").css("left", x1)
    
    })
})
// 商品数量加减
$(".jia").click(function () {
    $(".number i").html(Number($(".number i").html())+1)
})
$(".jian").click(function () {
    if (Number($(".number i").html())===1) {
        return
    }
    $(".number i").html($(".number i").html()-1)
})
// 商品尺码
$(".size span").click(function () {
    $(".size span").css("border","1px solid rgb(187, 172, 172)")
    $(this).css("border","1px solid #010101")
})