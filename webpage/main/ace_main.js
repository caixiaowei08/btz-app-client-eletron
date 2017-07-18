$(function () {
    var appViewModel = {
        accountId: ko.observable(),
        role: ko.observable()
    }
    ko.applyBindings(appViewModel);

    $.ajax({
        type: "post",
        url: GLOBAL_CONSTANT_URL + "adminController.do?getAdminEntityFromSession",
        success: function (res) {
            if (res.success === "success") {
                appViewModel.accountId(res.content.accountId);
                if (res.content.type === 1) {
                    appViewModel.role("管理员");
                } else if (res.content.type === 2) {
                    appViewModel.role("录入员");
                }
            } else {
                window.location.href = '../login/login.html';
            }
        },
        error: function () {
            toastr.error("服务器异常，请联系维护人员！");
            window.location.href = '../login/login.html';
        },
        complete: function (XMLHttpRequest, textStatus) {
            if (status === 'timeout') {//超时,status还有success,error等值的情况
                win.toastr.error("获取课程信息超时,请检查网络问题！");
            }
        }
    }, 'json');
});

function loginOff() {
    $.ajax({
        type: "post",
        url: GLOBAL_CONSTANT_URL + "adminController.do?loginOff",
        success: function (res) {
            window.location.href = '../login/login.html';
        },
        error: function () {
            toastr.error("服务器异常，请联系维护人员！");
        }
    }, 'json');
}
