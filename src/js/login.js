// console.log($(".user p").eq(1))
$(".user p").eq(0).click(function () {
    $("#option1").removeClass("fade")
    $("#option2").addClass("fade")
    $(this).addClass("select")
    $(".user p").eq(1).removeClass("select")
})
$(".user p").eq(1).click(function () {
    $("#option1").addClass("fade")
    $("#option2").removeClass("fade")
    $(this).addClass("select")
    $(".user p").eq(0).removeClass("select")
})
//随机验证码
function verifyCode(n) {
    let count = n || 4;
    let arr = ["q", "a", "z", "x", "s", "w", "e", "d", "c", "v", "f", "r", "t", "g", "b", "n", "h", "y", "u", "j", "m", "k", "i", "o", "l", "p", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = "";
    for (let i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * arr.length)
        result = result + arr[index];
    }
    return result;
}
$(".random").html(verifyCode(4))
$(".random").click(function () {
    $(".random").html(verifyCode(4))
})
$(".notsee").click(function () {
    $(".random").html(verifyCode(4))
})

// 登录接口

$("#option1 .login").click(function () {

    let name = $(".writeCode").val()
    let pass = $(".password").val()
    console.log(name, pass)
    $.post("./php/login.php", "username=" + name + "&" + "userpass= " + pass, function (item) {
        // console.log(item)

        if (item === "success") {
            alert("登录成功");
            sessionStorage.setItem("username", name)
            location.href = `http://127.0.0.1/Dickies/src/homepage.html`
        }
        if (item === "fail") {
            alert("该用户或密码错误");
        }
    })
})
