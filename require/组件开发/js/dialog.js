/**
 * Created by 13675 on 2017/2/19.
 */
define(['jquery'], function ($) {
    // 用类的方法编写规避重复点击出现只能关一个窗口
    function Dialog() {

    }
    Dialog.prototype.open = function (options) {
                var sitting = {
                    width: 500,
                    height: 400,
                    title: "这是标题"
                };
                $.extend(sitting, options);
                var that = this;
                this.$container = $('<div class="demo-container">');
                var $mask = $('<div class="demo-mask"></div>').on('click', function () {
                    that.close();
                });
                var $content = $('<div class="demo-content">').css({
                    width: sitting.width,
                    height: sitting.height
                });
                var $demoTitle = $('<div class="demo-title">');
                var $title = $('<span class="title">' + sitting.title + '</span>');
                var $close = $('<span class="close">[X]</span>').on('click', function () {
                    that.close();
                });
                var $main = $('<div class="demo-main"></div>').load(sitting.url);
                $demoTitle.append($title).append($close);
                $content.append($demoTitle).append($main);
                this.$container.append($mask).append($content);
                $(document.body).append(this.$container);
            }

    Dialog.prototype.close =function () {
        this.$container.remove();
    };
    return Dialog;
    // return {
    //     // this就是retrun的对象
    //     open: function (options) {
    //         var sitting = {
    //             width: 500,
    //             height: 400,
    //             title: "这是标题"
    //         };
    //         $.extend(sitting, options);
    //         var that = this;
    //         this.$container = $('<div class="demo-container">');
    //         var $mask = $('<div class="demo-mask"></div>').on('click', function () {
    //             that.close();
    //         });
    //         var $content = $('<div class="demo-content">').css({
    //             width: sitting.width,
    //             height: sitting.height
    //         });
    //         var $demoTitle = $('<div class="demo-title">');
    //         var $title = $('<span class="title">' + sitting.title + '</span>');
    //         var $close = $('<span class="close">[X]</span>').on('click', function () {
    //             that.close();
    //         });
    //         var $main = $('<div class="demo-main"></div>').load(sitting.url);
    //         $demoTitle.append($title).append($close);
    //         $content.append($demoTitle).append($main);
    //         this.$container.append($mask).append($content);
    //         $(document.body).append(this.$container);
    //     },
    //
    //     close: function () {
    //         this.$container.remove();
    //     }
    // }


});