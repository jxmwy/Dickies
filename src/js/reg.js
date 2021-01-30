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
    let judge = false;
    //jQuery表单验证
    function verify(reg, txt, _this) {
        let text = txt;
        let exp = reg;
        // 如果输入框为空，则提示不能为空并return
        if (txt == "") {
            _this.closest("div").find("i").show();
            judge = false;
            return;
        }
        // 正则验证密码输入是否合法
        if (exp.test(txt)) {
            // 如果匹配成功，则隐藏i标签
            _this.closest("div").find("i").hide();
            judge = true;
        } else {
            // 如果匹配不成功，则显示i标签
            _this.closest("div").find("i").show();
            judge = false;
            return;
        }
    }
    // 电话框
    $(".phoneNum").blur(function () {
        let repass = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        verify(repass, this.value, $(".phoneNum"));
    });

    // 密码框
    $(".password").blur(function () {
        let repass = /^(([A-z]+\d+[A-z0-9]{0,})|\d+[A-z]+[A-z0-9]{0,})|((\d+[\$\@\.]+[0-9\$\@\.]{0,})|([\$\@\.]+\d+[0-9\$\@\.]{0,}))|(([A-z]+[\$\@\.]+[A-z\$\@\.]{0,})|([\$\@\.]+[A-z]+[A-z\$\@\.]{0,}))$/;
        if (this.value.length < 6) {
            $(this).closest("div").find("i").show();
            return;
        }
        verify(repass, this.value, $(".password"));
    });
    // 确认密码框
    $(".confirmCode").blur(function () {
        if ($(".confirmCode").val() !== $(".password").val()) {
            $(this).closest("div").find("i").show();
        } else {
            $(this).closest("div").find("i").hide();
        }
    });
    //图形验证码
    $(".picCode").blur(function () {
        if ($(".picCode").val() === $(".random").html()) {
            $(this).closest("div").find("i").hide();
        } else {
            $(".random").html(verifyCode(4));
            $(this).closest("div").find("i").show();
        }
    });
    // 点击button提交
    document.querySelector(".reg").onclick = function () {
        console.log(this)
        let name = $(".phoneNum").val()
        let pass = $(".password").val()
        console.log(name, pass)
        $.post("./php/addUser.php", "username=" + name, "userpass=" + pass, function (data) {
            if (data === "success") {
                alert("注册成功");
            }
            if (data === "fail") {
                alert("注册失败");
            }
        })
    }
});




