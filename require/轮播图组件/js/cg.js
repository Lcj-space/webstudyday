/**
 * Created by 13675 on 2017/2/20.
 */
var oLi = $('li');
var oContainer = $('.container');
var oLeft = $('.left');
var oRight = $('.right');
var idx = 0;
oLi.mouseover(function () {
    $(this).addClass('liSelected').siblings('li').removeClass('liSelected');
    var idx = $(this).index();
    $('.content img').eq(idx).addClass('imgSelected').siblings('img').removeClass('imgSelected');
});
function changeImg() {
    idx++;
    if (idx == oLi.size()) {
        idx = 0;
    }
    $('li:eq(' + idx + ')').addClass('liSelected').siblings().removeClass('liSelected');
    $('.content img:eq(' + idx + ')').addClass('imgSelected').siblings().removeClass('imgSelected');
}
function run() {
    timer = setInterval(changeImg, 1000);
}
run();
oLeft.on('click',function () {
//        console.log(idx);
    if(idx){
        idx--;
    }else {
        idx = oLi.size() -1;
    }
    oLi.eq(idx).addClass('liSelected').siblings('li').removeClass('liSelected');
    $('.content img').eq(idx).addClass('imgSelected').siblings('img').removeClass('imgSelected');
});

oRight.on('click',changeImg);

oContainer.hover(function () {
    clearInterval(timer);
}, function () {
    run();
});
