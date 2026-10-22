'use strict'; {
    $(function() {
    // =======================
    // Common
    // ======================= 
        gsap.registerPlugin(ScrollTrigger);

    // =======================
    // MENU
    // ======================= 
        // open & close
            const time_openAndClose = 300;
        
            // top page
                $('.menu__btn--other').on('click', function(){
                    $('.menuPalette, .menu__btn--other, .menuPalette__top__frame, .menuPalette__menuList').removeClass('menuOff');
                    $('.menuPalette__top__frame, .menuPalette__menuList').removeClass('fadeIn');
                    
                    $('.menuPalette, .menu__btn--other, .menu__btn__bar').addClass('menuOn');

                    setTimeout(function(){
                        $('.menuPalette__top__frame, .menuPalette__menuList,  .menuPalette__top__frame, .menuPalette__menuList').addClass('menuOn');
                    },time_openAndClose);
                    
                });
                
                $('.menu__btn--close, .menuPalette__item__btn').on('click', function(){
                    $('.menuPalette__top__frame, .menuPalette__menuList').removeClass('menuOn');
                    
                    $('.menuPalette__top__frame, .menuPalette__menuList').addClass('menuOff');

                    setTimeout(function(){
                        $('.menuPalette').removeClass('menuOn');
                    },time_openAndClose + 300);

                    setTimeout(function(){
                        $('.menu__btn--other').removeClass('menuOn');
                    },time_openAndClose);
                    
                    setTimeout(function(){
                        $('.menu__btn--other').addClass('menuOff');
                    },time_openAndClose);
                    
                    setTimeout(function(){
                        $('.menu__btn__bar').removeClass('menuOn');
                    },time_openAndClose + 500);
                });

    });
};
