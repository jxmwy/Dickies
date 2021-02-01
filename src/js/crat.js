let username = sessionStorage.getItem("username")
console.log(username)
$.get("./php/getShoppingCart.php", "vipName=" + username, function (data) {
    console.log(data)
})

// 计算总金额函数
function totalPrice() {
    let checklist = $(".one .check")
    let onelist = $(".one")
    let count = 0;
    let totalprice = 0;
    for (let i = 0; i < checklist.length; i++) {
        // console.log($(".one .check").eq(i).prop("checked"))
        if (checklist.eq(i).prop("checked")) {
            count += parseFloat(onelist.eq(i).find("div").find("input").val())
            totalprice += parseFloat(onelist.eq(i).find(".subprice").html())
        }
    }
    console.log(count)
    $(".main .count").html(count)
    $(".main .totalprice").html(totalprice)
}

// 加号事件
$(".brig").click(function () {
    let _this = $(this).closest(".one").find("div").find("input")
    let price = parseFloat($(this).closest(".one").find(".price").html())
    // console.log(price)
    _this.val(parseFloat(_this.val()) + 1)
    $(this).closest(".one").find(".subprice").html(parseFloat(_this.val()) * price)
    totalPrice()
})
// 减号事件
$(".blef").click(function () {
    let _this = $(this).closest(".one").find("div").find("input")
    let price = parseFloat($(this).closest(".one").find(".price").html())
    if (parseFloat(_this.val()) === 1) {
        return
    }
    _this.val(parseFloat(_this.val()) - 1)
    $(this).closest(".one").find(".subprice").html(parseFloat(_this.val()) * price)
    console.log($(this).closest(".one").find(".subprice")[0])
    totalPrice()
})
// 复选框
$(".one .check").click(function () {
    totalPrice()
})
// 全选
$(".checkAll").click(function () {
    let check = $(".one .check")
    for (let i = 0; i < check.length; i++) {
        check.eq(i).prop("checked", "true")
    }
    totalPrice()
})
