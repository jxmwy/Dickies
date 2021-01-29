
let reg = location.href;
let id=reg.split("=")[1]
// console.log(id)
//后端接口
$.get("./php/getGoodsInfo.php","goodsId="+id ,function (data) {

let arr = JSON.parse(data);
    console.log(arr) 
    let content = $(
        `
        <div class="big">
            <img src="${arr.goodsImg}" alt="">
            <p></p>
        </div>
        <div class="plus">
            <img src="${arr.goodsImg}" alt="">
        </div>
        <ul class="picture">
            <li><img src="${arr.goodsImg}" alt=""></li>
            <li><img src="${arr.beiyong1}" alt=""></li>
            <li><img src="${arr.beiyong2}" alt=""></li>
            <li><img src="${arr.beiyong3}" alt=""></li>
        </ul>
        `
    )
    content.appendTo($(".left"))
 
    let style = $(
        `
        <img src="${arr.goodsImg}" alt="">
        <img src="${arr.beiyong1}" alt="">
        <img src="${arr.beiyong2}" alt="">
        <img src="${arr.beiyong3}" alt="">
        `
    )
    style.appendTo($(".style"))
    let rul = $(
        `
        <li class="name">${arr.goodsName}</li>
        <li class="goodid">${arr.goodsId}</li>
        <li class="price">￥<span>${arr.goodsPrice}</span>.00</li>
        <li class="day7"><img src="img/7day.gif" alt=""></li>
        `
    )
    rul.appendTo($(".right ul"))

    // 让src找不到的图片影藏
    let imgList = $(".main img")   
    for (let i = 0; i < imgList.length; i++){
        // console.log(imgList[i].getAttribute("src")==="")
        if (imgList[i].getAttribute("src")==="") {
            imgList[i].id="fade"
        }
    }


    // 放大镜
    $(".picture li").click(function () {
        // 点击那张就切换到那张
        $(".picture li").css("border", "2px solid #fff")
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
        // console.log(x,y)
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



});
    







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
// 立即购买
$(".buy").click(function () {
    location.href = "http://127.0.0.1/Dickies/src/checkout.html"
})
