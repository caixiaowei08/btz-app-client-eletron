/**
 * Created by User on 2017/5/24.
 */
function login() {
    setCookie();
    var accountId = $("#accountId").val();
    var accountPwd = $("#accountPwd").val();
    if (accountId === null || accountId === undefined || accountId === '') {
        toastr.error("请输入账号！");
        return;
    }
    if (accountPwd === null || accountPwd === undefined || accountPwd === '') {
        toastr.error("请输入密码！");
        return;
    }
    $.ajax({
        type: "post",
        url: GLOBAL_CONSTANT_URL + "admin/adminController.do?doLogin",
        type: 'POST',
        data: {accountId: accountId, accountPwd: accountPwd},
        success: function (res) {
            if (res.success === "success") {
                window.location.href = '../main/ace_main.html';
            } else if (res.success === "fail") {
                toastr.error(res.msg);
            }
        },
        error: function () {
            toastr.warning("系统异常，请联系运维!");
        },
        complete: function (XMLHttpRequest, textStatus) {
            if (status === 'timeout') {//超时,status还有success,error等值的情况
                toastr.warning("登录超时！");
            }
        }
    }, 'json');
}

//设置cookie
function setCookie() {
    if ($('#on_off')[0].checked) {
        localStorage.setItem("COOKIE_NAME", $("#accountId").val());
        localStorage.setItem("COOKIE_ON_OFF", $("#on_off")[0].checked);
    } else {
        localStorage.setItem("COOKIE_NAME", "");
        localStorage.setItem("COOKIE_ON_OFF", $("#on_off")[0].checked);
    }
}

function getCookie() {
    $("#accountId").val(localStorage.getItem("COOKIE_NAME"));
    $("#on_off").attr("checked", (localStorage.getItem("COOKIE_ON_OFF")));
    if (localStorage.getItem("COOKIE_ON_OFF") === "true") {
        $("#on_off").prop("checked", true);
    } else {
        $("#on_off").prop("checked", false);
    }
}

$(function () {
    getCookie();
})

