/**
 * Created by 13675 on 2017/2/20.
 */
require(['jquery', 'add'], function ($, Add) {
    var imgDate = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
    // var add = new Add;
    new Add({
        imgDate: imgDate,
        aim: $('#div1'),
        btnLike: 'circle',
        tabLocation: 'center'
    });

    new Add({
        imgDate: imgDate,
        aim: $('#div2')
    });

    // add({
    //     imgDate:imgDate,
    //     aim:$('#div1')
    // });
});
