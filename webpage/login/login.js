/**
 * Created by User on 2017/5/24.
 */
function login(){
    setCookie();
    window.location.href='../main/ace_main.html';
}

//设置cookie
function setCookie()
{
    if ($('#on_off')[0].checked) {
        localStorage.setItem("COOKIE_NAME", $("#accountId").val());
        localStorage.setItem("COOKIE_ON_OFF", $("#on_off")[0].checked);
    }else{
        localStorage.setItem("COOKIE_NAME", "");
        localStorage.setItem("COOKIE_ON_OFF", $("#on_off")[0].checked);
    }
}

function getCookie()
{
        $("#accountId").val(localStorage.getItem("COOKIE_NAME"));
        $("#on_off").attr("checked",(localStorage.getItem("COOKIE_ON_OFF"))) ;
        if(localStorage.getItem("COOKIE_ON_OFF") === "true"){
            $("#on_off").prop("checked", true);
        }else{
            $("#on_off").prop("checked", false);
        }
}

$(function () {
    getCookie();
    toastr.options ={
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
})

