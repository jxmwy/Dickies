// 轮播图
let n=0;
let li=$(".imgWrap li")
let ul=$(".imgWrap")
function changImg(){
    ul.animate({
        marginLeft:-(n*1355)
    })
}
$("#right").click(function(){
    if(n<li.length-1){
        n++
    }else{
        n=0
    }
    changImg()
})
$("#left").click(function(){
    if(n===0){
        n=li.length-1
    }else{
        n--
    }
    changImg()
})
// 小轮播图
function change1() {
    let i = 0;
    let liList=$("#option1 li")
    let ullist=$("#option1")
    $("#cloth-right").click(function(){
        if(n<liList.length-4){
            n++
            ullist.animate({
                marginLeft:-(n*270)
            })
        }else{
            return
        }  
    })
    $("#cloth-left").click(function(){
        if(n===0){
            return
        }else{
            n--
            ullist.animate({
                marginLeft:-(n*270)
            })
        }
        
    })
}
change1()




$("#manCloth").click(function () {
    $("#womanCloth").removeClass("border")
    $(this).addClass("border")
    $("#option1").removeClass("fade")
    $("#option2").addClass("fade")
})
$("#womanCloth").click(function () {
    $("#manCloth").removeClass("border")
    $(this).addClass("border")
    $("#option2").removeClass("fade")
    $("#option1").addClass("fade")
})

