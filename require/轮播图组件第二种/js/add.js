/**
 * Created by 13675 on 2017/2/20.
 */
define(['jquery'], function ($) {
    function Add(options) {
        // alert(options);
        var siting = {
            btnLike: 'square',
            tabLocation:'bottom'
        };
        $.extend(siting, options);
         var $container = $('<div class="container"></div>').hover(function(){stop();},function () {
             run();
         });
        var $content = $('<div class="content"></div>');
        var $tab = $('<div class="tab"></div>');
        var $ul = $('<ul></ul>');
        var $row = $('<div class="row"></div>');
        var $left = $('<span class="left">&lt;</span>').on('click', function () {
            if (iNow) {
                iNow--;
            } else {
                iNow = siting.imgDate.length - 1;
            }
            changeImg(iNow);
        });
        var $right = $('<span class="right">&gt;</span>').on('click', function () {
            iNow++;
            if (iNow == siting.imgDate.length) {
                iNow = 0;
            }
            changeImg(iNow);
        });
        var iNow = 0;
        // alert(options.imgDate.length);
        for (var i = 0; i < siting.imgDate.length; i++) {
            $ul.append('<li>' + (i + 1) + '</li>');
            $content.append('<imgs src="' + siting.imgDate[i] + '">');
        }
        // alert( $('.content>imgs').eq(0));
        // $('.content imgs').eq(0).addClass('imgSelected');
        $('imgs', $content).eq(0).addClass('imgSelected');
        $('li', $ul).eq(0).addClass('liSelected');
        if(siting.btnLike=='circle'){
            $('li', $ul).addClass(siting.btnLike);
        }
        if(siting.tabLocation=='center'){
            $row.addClass(siting.tabLocation);
        }
        $row.append($left).append($right);
        $tab.append($ul);
        $container.append($content).append($row).append($tab);
        siting.aim.append($container);
        $('li', $ul).on('mouseover', function () {
            var index = $(this).index();
            iNow = index;
            changeImg(index);
        });

        function changeImg(idx) {
            $('imgs', $content).eq(idx).addClass('imgSelected').siblings().removeClass('imgSelected');
            $('li', $ul).eq(idx).addClass('liSelected').siblings().removeClass('liSelected');
        }
        run();
        var timer;
        function run() {
            timer = setInterval(function () {
                $right.trigger('click');
            }, 1000)
        }

        function stop() {
            clearInterval(timer);
        }
    }

    return Add;
});