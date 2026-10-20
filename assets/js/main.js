'use strict'; {
    $(function() {
    // =======================
    // Common
    // ======================= 
        gsap.registerPlugin(ScrollTrigger);

    // =======================
    // MENU
    // ======================= 
        // fade in
            const $menuBtn = $('.menu__btn');
            const $sectionProfile_top = $('.section--profile').offset().top;

            let lastScrollPos = 0;

            function checkScroll() {
                const $scrollPos = $(window).scrollTop();

                if ($scrollPos > lastScrollPos) {
                    if ($scrollPos > $sectionProfile_top - 350) {
                        $menuBtn.addClass('fadeIn');
                        if (
                            $('.menuPalette').hasClass('menuOn') 
                            && $('.menuPalette__top__frame').hasClass('fadeOut') 
                            && $('.menuPalette__menuList').hasClass('fadeOut') 
                        ) {
                            $('.menuPalette__top__frame, .menuPalette__menuList')
                                .removeClass('fadeOut')
                                .addClass('fadeIn menuOn');
                        }
                    }
                }
                else 
                if ($scrollPos < lastScrollPos) {
                    if ($menuBtn.hasClass('fadeIn')){

                        if ($scrollPos < $sectionProfile_top + 400) {
                            $menuBtn.removeClass('fadeIn');
                        
                            if ($('.menuPalette').hasClass('menuOn') ) {
                                $('.menuPalette__top__frame, .menuPalette__menuList')
                                    .removeClass('menuOn fadeIn')
                                    .addClass('fadeOut');
                            }
                        } 
                    }
                }

                lastScrollPos = $scrollPos;
            }

            $(window).on('scroll', checkScroll);
            checkScroll();

        // open & close
            const time_openAndClose = 300;
        
            $('.menu__btn').on('click', function(){
                
                $('.menuPalette, .menu__btn, .menuPalette__top__frame, .menuPalette__menuList').removeClass('menuOff');
                $('.menuPalette__top__frame, .menuPalette__menuList').removeClass('fadeIn');
                
                $('.menuPalette, .menu__btn, .menu__btn__bar').addClass('menuOn');

                setTimeout(function(){
                    $('.menuPalette__top__frame, .menuPalette__menuList').addClass('menuOn');
                },time_openAndClose);
                
            });
            
            $('.menu__btn--close').on('click', function(){
                $('.menuPalette__top__frame, .menuPalette__menuList').removeClass('menuOn');
                
                $('.menuPalette__top__frame, .menuPalette__menuList').addClass('menuOff');

                setTimeout(function(){
                    $('.menuPalette').removeClass('menuOn');
                },time_openAndClose + 300);

                setTimeout(function(){
                    $('.menu__btn').removeClass('menuOn');
                },time_openAndClose);
                
                setTimeout(function(){
                    $('.menu__btn').addClass('menuOff');
                },time_openAndClose);
                
                setTimeout(function(){
                    $('.menu__btn__bar').removeClass('menuOn');
                },time_openAndClose + 500);
            });

    // =======================
    // First View
    // =======================
        // slider
            $(document).ready(function () {
                $('.firstView__slider').slick({
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 3200,
                    cssEase: "linear",
                    arrows: false,
                    dots: false,
                    pauseOnFocus: false,
                    pauseOnHover: false,
                    pauseOnDotsHover: false,
                    waitForAnimate: false,
                    swipe: false,
                    draggable: false,
                    variableWidth: true,
                    // responsive: [
                    //     {
                    //         breakpoint: 767,
                    //         settings: {
                    //         speed: 8000,
                    //         }
                    //     }
                    // ]
                });
            });

    // =======================
    // Profile
    // =======================
        // arrow
            $(window).on('scroll fontchange', function () {
            const arrowFrame = $('.profile__arrow__frame');
            const arrow = $('.profile__arrow');

            if (!arrowFrame.length) return;
            
            const arrowFrame_top = arrowFrame.offset().top;
            const arrowFrame_height = arrowFrame.outerHeight();
            
            // 画面のスクロール位置とウィンドウの高さを取得
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();

            // アニメーションを開始するタイミング（要素のトップが画面の下端に入ったとき）
            const startPoint = arrowFrame_top - windowHeight;
            // アニメーションが終了するタイミング（要素のボトムが画面の上端から消えたとき）
            const endPoint = arrowFrame_top + arrowFrame_height - 150;

            // 現在のスクロール位置が進捗のどの位置にあるかを計算 (0 〜 1)
            let progress = (scrollTop - startPoint) / (endPoint - startPoint);

            // 0未満は0、1以上は1に固定（範囲外のバグを防ぐ）
            progress = Math.max(0, Math.min(1, progress));

            // CSSのscaleYに代入して長方形を伸ばす
            arrow.css('transform', `scaleY(${progress})`);
            });

    // =======================
    // crane animation
    // =======================
        // profile__arrowのleftを取得
            $(function() {
                // 1. 位置を取得したい要素を選択
                const $profileArrow = $('.profile__arrow');

                if ($profileArrow.length) {
                    
                    // leftの位置を測定してCSS変数を更新する独自の関数
                    function updateLeftPosition() {
                        const leftPos = $profileArrow.offset().left;
                        $('html').css('--profileArrow_left', leftPos + 'px');
                    }

                    // ブラウザのサイズが変更されたら関数を実行
                    $(window).on('resize', updateLeftPosition);

                    // ページ読み込み時（初回）にも実行
                    updateLeftPosition();
                }
            });

        // crane animation
            // 1. 画像の画面追従（固定）と停止の制御
                ScrollTrigger.create({
                    // toggleActions: "play none none reverse",
                    trigger: ".area--craneAnimation",
                    start: "top 20%",
                    end: "bottom bottom",
                    pin: ".craneAnimation__img", // 画像を画面に固定して一緒に移動しているように見せる
                    pinSpacing: false,    // 固定解除後、そのままスムーズに画面外へ流れるように隙間を作らない
                    scrub: true,
                    markers: true,        // 位置調整が終わったら削除してください
                });

            // 2. 指定位置（下から30%）を通過した時の背景画像差し替え制御
                ScrollTrigger.create({
                    trigger: ".area--craneAnimation",
                    start: "bottom 30%",  // areaの下から30%が、画面の上（または基準位置）を通過するとき
                    scrub: true,
                    markers: true,        // 位置調整が終わったら削除してください
       
                    onEnter: function() {
                        $('.your-element').css('background-image', "url('../images/crane_short_close.svg')");
                    },
                    onLeaveBack: function() {
                        $('.your-element').css('background-image', "url('../images/crane_short_open.svg')");
                    }
                });


    // =======================
    // Why
    // =======================
        // slider
            $(document).ready(function () {
                    $('.why__slider').slick({
                        draggable: false,
                        infinite: false,
                        speed: 800,
                        slidesToShow: 1,
                        autoplay: false,
                        cssEase: 'ease-in-out',
                        dots: false,

                        arrows: true,
                        prevArrow: $('.why__reason__arrow--02'),
                        nextArrow: $('.why__reason__arrow--01')
                    });
                });

    // =======================
    // Skills
    // =======================
        // fade in
            $(window).on('load scroll', function(){
                const $skillsItem__01 = $('.skills__item--01');
                const $skillsItem__02 = $('.skills__item--02');

                const sectionSkillsTop = $('.section--skills').offset().top;
                const scrollPos = $(window).scrollTop();
        
                if (scrollPos > sectionSkillsTop - 300 ) {
                    $($skillsItem__01).addClass('fadeIn');
                    $($skillsItem__02).addClass('fadeIn');
                } 
            });

        // tab
            // ボタン(.skills__item__tab)の番号とウインドウ(.skills__item)の番号が入れ替わっているため注意
                $('.skills__item__tab--01').on('click', function(){
                    $('.skills__item--01').removeClass('on');
                    $('.skills__item--02').addClass('on');
                });
            
                $('.skills__item__tab--02').on('click', function(){
                    $('.skills__item--02').removeClass('on');
                    $('.skills__item--01').addClass('on');
                });

        // arrow btn
            // 01
            $('.skills__item__arrow--01').on('click', function(){
                $('.skills__item__detail__frame--01').removeClass('off');
                $('.skills__item__detail__frame--01').addClass('on');
            });
            
            $('.skills__item__detail__btn--01').on('click', function(){
                $('.skills__item__detail__frame--01').removeClass('on');
                $('.skills__item__detail__frame--01').addClass('off');
            });
            
            // 02
            $('.skills__item__arrow--02').on('click', function(){
                $('.skills__item__detail__frame--02').removeClass('off');
                $('.skills__item__detail__frame--02').addClass('on');
            });
            
            $('.skills__item__detail__btn--02').on('click', function(){
                $('.skills__item__detail__frame--02').removeClass('on');
                $('.skills__item__detail__frame--02').addClass('off');
            });
    

    // =======================
    // Works
    // =======================
        // slider
            if ($('.works__slider').length) {
                    $('.works__slider').slick({
                        pauseOnFocus: false,
                        pauseOnHover: false,
                        pauseOnDotsHover: false,
                        waitForAnimate: false,
                        draggable: false,
                        
                        asNavFor: '.works__buttons__more__slider',

                        infinite: true,
                        speed: 1000,
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        cssEase: 'ease-in-out',

                        dots: true,
                        dotsClass: 'works__slider__dots__custom', // dotsのクラス名をデフォルトから任意のクラス名に変更
                        appendDots: $('.works__slider__dots__frame'), // dotsを任意のhtml要素に格納

                        arrows: true,
                        appendArrows: $('.works__buttons__arrow__frame'),
                        prevArrow: '<div class="works__buttons__arrow--prev"></div>',
                        nextArrow: '<div class="works__buttons__arrow--next"></div>',
                    });
                };
            
            if ($('.works__buttons__more__slider').length) {
                    $('.works__buttons__more__slider').slick({
                        pauseOnFocus: false,
                        pauseOnHover: false,
                        pauseOnDotsHover: false,
                        waitForAnimate: false,
                        draggable: false,

                        asNavFor: '.works__slider',

                        infinite: true,
                        speed: 1000,
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        cssEase: 'ease-in-out',

                        arrows: false,
                    });
                };

    // =======================
    // Footer
    // ======================= 
        // present
            $(window).on('load scroll', function(){
                const present = $('.footer__present');

                present.each(function() {
                    const scrollPos = $(window).scrollTop();
                    const wh = $(window).height();
                    // const docHeight = $(document).height(); 
                    
                    const footer = $(this).closest('.footer');
                    const footerTop = footer.offset().top;

                    const THIS = $(this);

                    // 表示
                    if (scrollPos + wh >= footerTop + 50) {
                        if (!THIS.hasClass('on') && !THIS.hasClass('stay')) {
                            THIS.addClass('on');
                            setTimeout(function(){
                                THIS.addClass('stay');
                            },4000);
                        }
                    }
                    // 非表示
                    if (scrollPos + wh < footerTop - 50) {
                        THIS.removeClass('on stay');
                    }
                    
                });
            });

           



            // const size = document.querySelector('.menuPalette');

            // // 要素のサイズと位置を取得
            // const rect1 = size.getBoundingClientRect();

            // console.log(`幅 (width): ${rect1.width}px`);
            // console.log(`高さ (height): ${rect1.height}px`);



            // const element = document.querySelector('.menu__btn__bar'); // 対象の要素

            // // 1. 要素のドキュメント（ページ全体）の左上からの絶対座標を計算
            // const rect2 = element.getBoundingClientRect();
            // const elemLeftFromPage = rect2.left + window.pageXOffset;
            // const elemTopFromPage = rect2.top + window.pageYOffset;

            // // 2. ページ全体の総横幅を取得
            // const pageWidth = document.documentElement.scrollWidth;

            // // 3. 「ページ右上」からの距離を算出
            // const distanceFromTop = elemTopFromPage; // ページ上端からの距離（Y座標）
            // const distanceFromRight = pageWidth - (elemLeftFromPage + rect2.width); // ページ右端からの距離（X座標）

            // console.log(`ページ上端から: ${distanceFromTop}px`);
            // console.log(`ページ右端から: ${distanceFromRight}px`);



            // const child = document.querySelector('.menu__btn__bar'); // 対象の子要素
            // const parent = child.offsetParent; // 基準となっている親要素

            // if (parent) {
            // // 1. 親の上端から、子の上端までの距離（Y座標）
            // const distanceFromTop = child.offsetTop;

            // // 2. 親の右端から、子の右端までの距離（X座標）
            // const parentWidth = parent.offsetWidth;
            // const childWidth = child.offsetWidth;
            // const distanceFromRight = parentWidth - (child.offsetLeft + childWidth);

            // console.log(`親要素の上端から: ${distanceFromTop}px`);
            // console.log(`親要素の右端から: ${distanceFromRight}px`);
            // }


            const menu = document.querySelector('.menuPalette');

if (menu) {
  const rect = menu.getBoundingClientRect();
  const width = rect.width;   // 横幅（小数点を含むpx）
  const height = rect.height; // 高さ（小数点を含むpx）

  console.log(`精密な横幅: ${width}px, 精密な高さ: ${height}px`);
}


const element = document.querySelector('.menuPalette__header'); // 対象の要素

if (element) {
  const width = element.offsetWidth;   // 横幅（px）
  const height = element.offsetHeight; // 縦幅（px）

  console.log(`横幅: ${width}px, 縦幅: ${height}px`);
}






    });
};