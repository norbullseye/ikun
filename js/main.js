
function tishi(str,time) { //提示文字
    $("#grey").text(str);
    $("#grey").fadeIn();
    setTimeout(() => {
        $("#grey").fadeOut(); //淡出提示
    }, time); //等待一段时间
}
function num(){//将变量转换为数字
    branch = Number(branch);
    litchi = Number(litchi);
    healthy = Number(healthy);
    onlyBecause = Number(onlyBecause);
    basketball = Number(basketball); 
}
function upset(){ //更新
    var edom = $("#lanqiu")[0];//判定有无按钮"打篮球"
    if (branch>=30 && !edom) { //追加按钮”打篮球"
        var lan="<button id='lanqiu' onclick='lanqiu()'title='花费30树枝以购买篮球,一个篮球每秒能为你提供一个树枝'>打篮球</button>";
        $("#first").after(lan);
        tishi("点击[打篮球]花费30树枝以购买篮球,一个篮球每秒能为你提供一个树枝",6000);
    }
}
function exercise() {  //练习按钮
    branch += 1;
    litchi += 1;
}
function besideVillage() { //探索村边按钮
    
}
function lanqiu() { //打篮球按钮
    if (branch>=30) {
        branch -= 30; //购买一个篮球
        basketball ++; //篮球+1
        tishi("篮球+1",2000);
    } else {
        tishi("树枝不足",2000);
    }
}

