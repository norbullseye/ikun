var timer1 = setInterval(function() { //每两秒执行一次
    num();
    branch = branch + basketball;//树枝每两秒自增
}, 2000);

var timer2 = setInterval(function() { //每十五秒执行一次
    num();
    var placeOnFile = branch+","+litchi+","+healthy+","+onlyBecause+","+basketball+","+place+","+explore;
    //变量全部拼接在一起
    setCookie("file",placeOnFile);//存档
}, 15000);