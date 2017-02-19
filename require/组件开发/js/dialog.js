/**
 * Created by 13675 on 2017/2/19.
 */
define(['jquery'], function ($) {
    return {
        open: function () {
            var that = this;
            this.$container = $('<div class="demo-container">');
            var $mask = $('<div class="demo-mask"></div>').on('click', function () {
                that.close();
            });
            var $content = $('<div class="demo-content">');
            var $demoTitle = $('<div class="demo-title">');
            var $title = $('<span class="title">这是标题</span>');
            var $close = $('<span class="close">[X]</span>').on('click',function () {
                that.close();
            });
            var $main = $('<div class="demo-main"></div>');
            $demoTitle.append($title).append($close);
            $content.append($demoTitle).append($main);
            this.$container.append($mask).append($content);
            $(document.body).append(this.$container);
        },

        close: function () {
            this.$container.remove();
        }
    }


});