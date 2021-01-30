
function verifyCode(n) {
    let count = n || 4;
    let arr = [
        "q",
        "a",
        "z",
        "x",
        "s",
        "w",
        "e",
        "d",
        "c",
        "v",
        "f",
        "r",
        "t",
        "g",
        "b",
        "n",
        "h",
        "y",
        "u",
        "j",
        "m",
        "k",
        "i",
        "o",
        "l",
        "p",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ];
    let result = "";
    for (let i = 0; i < count; i++) {
        var index = Math.floor(Math.random() * arr.length);
        result = result + arr[index];
    }
    return result;
}
$(".random").html(verifyCode(4));
$(".random").click(function () {
    $(".random").html(verifyCode(4));
});
$(".notsee").click(function () {
    $(".random").html(verifyCode(4));
});

$(function () {


    // 电话框
    let judge1 = false
    $(".phoneNum").blur(function () {
        let repass = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        // 如果输入框为空，则提示不能为空并return
        if (this.value == "") {
            $(this).closest("div").find("i").show();
            judge1 = false
            return
        }
        // 正则验证密码输入是否合法
        if (repass.test(this.value)) {
            // 如果匹配成功，则隐藏i标签
            $(this).closest("div").find("i").hide();
            judge1 = true
        } else {
            // 如果匹配不成功，则显示i标签
            $(this).closest("div").find("i").show();
            judge1 = false
            return;
        }
    });

    // 密码框
    let judge2 = false
    $(".password").blur(function () {
        let repass = /^(([A-z]+\d+[A-z0-9]{0,})|\d+[A-z]+[A-z0-9]{0,})|((\d+[\$\@\.]+[0-9\$\@\.]{0,})|([\$\@\.]+\d+[0-9\$\@\.]{0,}))|(([A-z]+[\$\@\.]+[A-z\$\@\.]{0,})|([\$\@\.]+[A-z]+[A-z\$\@\.]{0,}))$/;
        if (this.value.length < 6) {
            $(this).closest("div").find("i").show();
            let judge2 = false
            return;
        }
        // 正则验证密码输入是否合法
        if (repass.test(this.value)) {
            // 如果匹配成功，则隐藏i标签
            $(this).closest("div").find("i").hide();
            judge2 = true
        } else {
            // 如果匹配不成功，则显示i标签
            $(this).closest("div").find("i").show();
            judge2 = false
            return;
        }

    });
    // 确认密码框
    let judge3 = false
    $(".confirmCode").blur(function () {
        if ($(".confirmCode").val() !== $(".password").val()) {
            $(this).closest("div").find("i").show();
            judge3 = false
        } else {
            $(this).closest("div").find("i").hide();
            judge3 = true
        }
    });
    //图形验证码
    let judge4 = false
    $(".picCode").blur(function () {
        if ($(".picCode").val() === $(".random").html()) {
            $(this).closest("div").find("i").hide();
            judge4 = true
        } else {
            $(".random").html(verifyCode(4));
            $(this).closest("div").find("i").show();
            judge4 = false
        }
    });
    // 点击button提交
    $(".reg").click(function () {
        if (!$(".check").prop("checked")) {
            alert("请点击确认用户协议");
            return;
        }
        if (judge1 === true && judge2 === true && judge3 == true && judge4 == true) {
            let name = $(".phoneNum").val()
            let pass = $(".password").val()
            console.log(name, pass)
            console.log("username=" + name + "&" + "userpass= " + pass)

            $.get("./php/checkUser.php", "username=" + name, function (data) {
                // console.log(data)
                if (data === 1) {

                }
                if (data === 0) {
                    alert("该用户已存在")
                }

            })
            $.post("./php/addUser.php", "username=" + name + "&" + "userpass= " + pass, function (item) {
                console.log(item)

                if (item === "success") {
                    alert("注册成功");
                    location.href = "http://127.0.0.1/Dickies/src/login.html"
                }
                if (item === "fail") {
                    alert("该用户已存在");
                }
            })
        } else {
            alert("请完善信息")
        }

    })




});




