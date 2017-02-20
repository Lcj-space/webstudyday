/**
 * Created by 13675 on 2017/2/20.
 */
define(['jquery'],function ($) {
    function Add() {
    }
    Add.prototype.add = function (options) {
        var siting ={};
        $.extend(siting,options);
        // $('body').append(options.url);
        $('body').load(options.url);
        // $('.container').css('top',siting.containerTop);
    };
    return Add;
});