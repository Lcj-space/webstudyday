/**
 * Created by 13675 on 2017/2/12.
 */
$(function () {
    $('.skin li').on('click', function () {
        $('.containerLeft>h2').removeClass().addClass($(this).attr('class'));
        $('.nav').attr('class', 'nav').addClass($(this).attr('class'));
        $(this).addClass('selected').siblings('li').removeClass('selected');
    });
    var index = 0;
    $('.tab li').hover(function () {
        $(this).addClass('selectedLi').siblings('li').removeClass('selectedLi');
        var index = $(this).index();
//            $('.imgContent img').stop().eq(index).fadeIn(600).show().siblings('img').fadeOut(600).hide();
//            $('.imgContent img').hide().stop().eq(index).fadeIn(600);
        $('.imgContent img').hide().stop().eq(index).fadeIn(600);
    }, function () {
        $(this).removeClass('selectedLi');
        $('.tab li:first-child').addClass('selectedLi');
//            $('.imgContent img').stop().eq(index).siblings('img').fadeOut(600).hide();
        $('.imgContent img').stop().eq(index).show().siblings('img').fadeOut();
    });

    var iNow=0;
    $('.brandListTab li').mouseover(function () {
        $(this).addClass('brandSelected').siblings('li').removeClass('brandSelected');
        var iNow = $(this).index();
        // iNow++;
            $('.brandImg').stop().animate({
                left: -810*iNow
            }, 400);
    });


});