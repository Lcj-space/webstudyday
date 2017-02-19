/**
 * Created by 13675 on 2017/2/19.
 */
require(['jquery', 'dialog'], function ($, Dialog) {
    $('#btn1').on('click', function () {
        Dialog.open({
            width: 400,
            height: 500,
            title:"登录",
            url:('./form.html')
        });
    });
    $('#btn2').on('click', function () {
        Dialog.close();
    })
});