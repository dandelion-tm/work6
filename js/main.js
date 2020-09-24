'use strict';

$(function() {
    // ハンバーガー
    $('.header__toggle').on('click', function() {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('open');
    });
    // スライダー
    $('.fv').bgSwitcher( {
        images:['img/fv-bgi_01@2x.jpg','img/fv-bgi_02@2x.jpg','img/fv-bgi_03@2x.jpg'],
        inerval: 3000,
        loop: true,
    });
    // fv過ぎたらヘッダー背景色変更
    $(function() {
        let fvh = $('.fv').height();
    
        $(window).scroll(function() {
            let top = $(window).scrollTop();
            if (fvh < top) {
                $('.header__nav').css('background-color', '#282f35');
            } else {
                $('.header__nav').css('background-color', 'inherit');
            }
        });
    });

});

