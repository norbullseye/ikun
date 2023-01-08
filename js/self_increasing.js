function num(){//将变量转换为数字
    branch = Number(branch);
    litchi = Number(litchi);
    healthy = Number(healthy);
    onlyBecause = Number(onlyBecause);
    basketball = Number(basketball);
    explore = Number(explore); 
    musicValue = Number(musicValue); 

}
var timer1 = setInterval(function() { //每两秒执行一次
    num();
    branch = branch + basketball;//树枝每两秒自增
    if (branch > 0) {
        branch = branch - musicValue;
        litchi = litchi + musicValue * 2;//树枝转换成两倍荔枝
    } 
}, 2000);

var timer2 = setInterval(function() { //每十五秒执行一次
    num();
    var placeOnFile = branch+","+litchi+","+healthy+","+onlyBecause+","+basketball+","+place+","+explore+","+musicValue;
                    //树枝    +   荔枝   +   健康     +   只因值       +   篮球数量    +   位置   +   探索    +    music数量  
                    //变量全部拼接在一起
    setCookie("file",placeOnFile);//存档
}, 15000);