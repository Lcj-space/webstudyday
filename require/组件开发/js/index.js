/**
 * Created by 13675 on 2017/2/19.
 */
require(['jquery', 'dialog'], function ($, Dialog) {
    var arr=[];
    $('#btn1').on('click', function () {
        var dialog = new Dialog();
        // $.prototype.aa = dialog;
        arr.push(dialog);
        dialog.open({
            width: 400,
            height: 500,
            title: "登录",
            url: ('./form.html'),
            flag:1
        });
        // return dialog;
    });
    $('#btn2').on('click', function () {

        if (arr.length>0){
            arr.pop().close();
        }
    });

    // $('#btn1').on('click', function () {
    //     Dialog.open({
    //         width: 400,
    //         height: 500,
    //         title: "登录",
    //         url: ('./form.html'),
    //         flag:1
    //     });
    // });
    // $('#btn2').on('click', function () {
    //     Dialog.close();
    // })
});