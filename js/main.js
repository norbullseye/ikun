
function tishi(str,time) { //提示文字
    $("#grey").text(str);
    $("#grey").fadeIn();
    setTimeout(() => {
        $("#grey").fadeOut(); //淡出提示
    }, time); //等待一段时间
}
function addendum(lan,tishiv) {//按钮内容，提示内容
    $("#tabbox1").append(lan);
    tishi(tishiv,6000);//提示
}
function upset() { //更新
    var edom = $("#lanqiu")[0];//判定有无按钮"打篮球"
    if (branch>=30 && !edom) {
        addendum("<button id='lanqiu' onclick='lanqiu()'title='花费30树枝以购买篮球,一个篮球每秒两能为你提供一个树枝'>打篮球 30树枝</button>","点击[打篮球]花费30树枝以购买篮球,一个篮球每两秒能为你提供一个树枝");
    }
    
    var edom1 = $("#music")[0];//判定有无按钮"music"
    if (branch>=150 && !edom1) { //追加按钮"music"
        addendum("<button id='music' onclick='music()'title='点击[music]花费150树枝以购买music,一个music每两秒能将一个树枝转换为两个荔枝'>music 150树枝</button>","点击[music]花费150树枝以购买music,一个music每两秒能将一个树枝转换为两个荔枝");
    }
}

function exercise() {  //练习按钮
    branch += 1;
    litchi += 1;
}
function besideVillage() { //探索村边按钮
    var num = Math.floor(Math.random()*100+1)
    if (num <= 20) { //20%的概率
        explore += 2;//+2
    } else {
        explore += 1;//否则+1
    }
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
function music() { //music按钮
    if (branch>=150) {
        branch -= 150; //购买一个music
        musicValue ++; //music+1
        tishi("music+1",2000);
    } else {
        tishi("树枝不足",2000);
    }
}

