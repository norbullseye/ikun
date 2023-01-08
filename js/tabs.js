$('li').click(function() { //选项卡
    $(this).addClass('on').siblings().removeClass();
 })
function exerciseTab() { //练习选项卡
    $("#tabbox1").show();
    $("#tabbox2").hide();
    $("#tabbox3").hide();
    $("#tabbox4").hide();
    upset();
}
function hikeTab() { //远足选项卡
    $("#tabbox2").show();
    $("#tabbox1").hide();
    $("#tabbox3").hide();
    $("#tabbox4").hide();
    upset();

}
function valueTab() {//属性选项卡
    $("#tabbox3").html("<p class='value1'>位置:" + place + "</p></br><p class='value1'>树枝:" + branch + "</p></br><p class='value1'>荔枝:" + litchi + "</p></br><p class='value1'>健康:" + healthy + "</p></br><p class='value1'>只因值:" + onlyBecause + "</p></br><p class='value1'>篮球:" + basketball + "</p></br>");
    $("#tabbox3").show();
    $("#tabbox1").hide();
    $("#tabbox2").hide();
    $("#tabbox4").hide();
    upset();

}
function bagTab() { //背包选项卡
    $("#tabbox4").show();
    $("#tabbox1").hide();
    $("#tabbox2").hide();
    $("#tabbox3").hide();
    upset();

}