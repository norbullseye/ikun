function setCookie(name, value) {  //保存cookie
    var exp = new Date();  
    exp.setTime(exp.getTime() + 60 * 365 * 24 * 60 * 60 * 1000);  
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";  
}
 function getCookie(name) {  //读取cookie
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");  
    if (arr = document.cookie.match(reg))  
        return unescape(arr[2]);  
    else  
        return null;  
}