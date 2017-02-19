/**
 * Created by 13675 on 2017/2/19.
 */
require(['jquery','dialog'],function ($,Dialog) {
    $('#btn1').on('click',function () {
        Dialog.open();
    });
    $('#btn2').on('click',function () {
        Dialog.close();
    })
});