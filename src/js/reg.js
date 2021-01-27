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



        //jQuery表单验证
        var password = $(".password")
    
        // 1.如果密码框失去焦点，则进行检查判断密码是否合法
        password.blur(function () {
            // 获取密码框输入的数据
            var vals = password.val()
            // 密码正则匹配表达式
            var rePass = /^[\w!-@#$%^&*]{6,20}$/
            // 如果输入框为空，则提示不能为空并return
            if (vals == '') {
                password.closest("div").find("i").show()
                return
            }
            // 正则验证密码输入是否合法
            if (rePass.test(vals)) {
                // 如果匹配成功，则隐藏i标签
                password.closest("div").find("i").hide()
            }
            else {
                // 如果匹配成功，则隐藏i标签
                password.closest("div").find("i").show()
                return 
            }
        })
