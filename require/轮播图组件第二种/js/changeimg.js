/**
 * Created by 13675 on 2017/2/20.
 */
require(['jquery', 'add'], function ($, Add) {
    var imgDate = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg'];
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
