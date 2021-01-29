
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

// 连接后端
 $(function () {
    $.get("./php/getGoodsList.php", function (data) {
        // console.log(data) 
        let arr = JSON.parse(data);
       
        arr.forEach(item => {
            // console.log(item)
            let content = $(
            `
            
            <div class="content">
                <div class="bigPic">
                    <img src="${item.goodsImg}" alt="">
                    <span>快速浏览</span>
                </div>
                <h3>${item.goodsName}</h3>
                <p>
                    <i>${item.goodsId}</i>
                <div class="price">
                    ￥<span>${item.goodsPrice}</span>.00
                </div>
                </p>
                <ul class="smallPic">
                    <li><img src="${item.goodsImg}" alt=""></li>
                    <li><img src="${item.beiyong1}" alt=""></li>
                    <li><img src="${item.beiyong2}" alt=""></li>
                    <li><img src="${item.beiyong3}" alt=""></li>
                </ul>
            </div>
        
             `
            );
            content.appendTo($(".right"))
            // 页面跳转
            $(".content").click(function () {
                location.href = `http://127.0.0.1/Dickies/src/gooddetail.html?id=${item.goodsId}`
            })
        
        });
         // 商品划上
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
        let imgList = $(".smallPic li img")
        
        for (let i = 0; i < imgList.length; i++){
            if (imgList[i].getAttribute("src")==="") {
                imgList[i].id="fade"
            }
        }
    });
   
 });
