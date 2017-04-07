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
//            $('.imgContent imgs').stop().eq(index).fadeIn(600).show().siblings('imgs').fadeOut(600).hide();
//            $('.imgContent imgs').hide().stop().eq(index).fadeIn(600);
        $('.imgContent imgs').hide().stop().eq(index).fadeIn(600);
    }, function () {
        $(this).removeClass('selectedLi');
        $('.tab li:first-child').addClass('selectedLi');
//            $('.imgContent imgs').stop().eq(index).siblings('imgs').fadeOut(600).hide();
        $('.imgContent imgs').stop().eq(index).show().siblings('imgs').fadeOut();
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