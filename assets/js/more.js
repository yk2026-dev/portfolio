'use strict'; {
    $(function() {
    // =======================
    // Common
    // ======================= 
        gsap.registerPlugin(ScrollTrigger);

    // =======================
    // Header
    // ======================= 
        // ityped 
            ityped.init('#pageTtl__sub__ityped', {
                strings: ['私について、もっとくわしく自己紹介させてください。'],
                typeSpeed: 100,
                startDelay: 1000,
                loop: false,
                showCursor: true,
                cursorChar: "|",

                onStringTyped: function() {
                    const $cursor = document.querySelector('.ityped-cursor');
                    if ($cursor) {
                    $cursor.remove();
                    }
                }
            });

    // =======================
    // More menu
    // ======================= 
        // スクロールに合わせて強調
            ScrollTrigger.create({
                trigger: ".frame--favorite",
                start: "top 20%",
                end: "bottom 10%",
                toggleClass: {
                    targets: ".moreMenu__item__dot--favorite, .moreMenu__item--favorite",
                    className: "on"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--strengths",
                start: "top 20%",
                end: "bottom 10%",
                toggleClass: {
                    targets: ".moreMenu__item__dot--strengths, .moreMenu__item--strengths",
                    className: "on"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--creative",
                start: "top 20%",
                end: "bottom 10%",
                toggleClass: {
                    targets: ".moreMenu__item__dot--creative, .moreMenu__item--creative",
                    className: "on"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--programming",
                start: "top 20%",
                end: "bottom 10%",
                toggleClass: {
                    targets: ".moreMenu__item__dot--programming, .moreMenu__item--programming",
                    className: "on"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--careerPlan",
                start: "top 20%",
                end: "bottom 10%",
                toggleClass: {
                    targets: ".moreMenu__item__dot--careerPlan, .moreMenu__item--careerPlan",
                    className: "on"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--goal",
                start: "top 20%",
                end: "bottom 10%",
                toggleClass: {
                    targets: ".moreMenu__item__dot--goal, .moreMenu__item--goal",
                    className: "on"
                }
            });
        
        // スクロールアニメーション
            const scrollSpeed = 1000;
            
            $('.moreMenu__item--favorite').on('click', function(){
                const section_favorite = $('#favorite').offset().top;
                
                $('html, body').animate(
                    {scrollTop: section_favorite - 40 }, scrollSpeed
                );
            });
            
            $('.moreMenu__item--strengths').on('click', function(){
                const section_strengths = $('#strengths').offset().top;
                
                $('html, body').animate(
                    {scrollTop: section_strengths - 40 }, scrollSpeed
                );
            });

            $('.moreMenu__item--creative').on('click', function(){
                const section_creative = $('#creative').offset().top;
                
                $('html, body').animate(
                    {scrollTop: section_creative - 40 }, scrollSpeed
                );
            });

            $('.moreMenu__item--programming').on('click', function(){
                const section_programming = $('#programming').offset().top;
                
                $('html, body').animate(
                    {scrollTop: section_programming - 40 }, scrollSpeed
                );
            });

            $('.moreMenu__item--careerPlan').on('click', function(){
                const section_careerPlan = $('#careerPlan').offset().top;
                
                $('html, body').animate(
                    {scrollTop: section_careerPlan - 40 }, scrollSpeed
                );
            });

            $('.moreMenu__item--goal').on('click', function(){
                const section_goal = $('#goal').offset().top;
                
                $('html, body').animate(
                    {scrollTop: section_goal - 40 }, scrollSpeed
                );
            });

    // =======================
    // fade in animation
    // ======================= 
        gsap.to(".frame--favorite", {
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: ".frame--favorite",
                start: "top 70%",
                end: "top 20%",
                markers: true, // マーカー表示
                scrub: true,
                pin: ".frame--favorite",
                pinSpacing: true, 
            },
        });

        gsap.to(".frame--strengths", {
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: ".frame--strengths",
                start: "top 70%",
                end: "top 20%",
                markers: true, // マーカー表示
                scrub: true,
                pin: ".frame--strengths",
                pinSpacing: true, 
            },
        });

        gsap.to(".frame--creative", {
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: ".frame--creative",
                start: "top 70%",
                end: "top 20%",
                markers: true, // マーカー表示
                scrub: true,
                pin: ".frame--creative",
                pinSpacing: true, 
            },
        });

        gsap.to(".frame--programming", {
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: ".frame--programming",
                start: "top 70%",
                end: "top 20%",
                markers: true, // マーカー表示
                scrub: true,
                pin: ".frame--programming",
                pinSpacing: true, 
            },
        });

        gsap.to(".frame--careerPlan", {
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: ".frame--careerPlan",
                start: "top 70%",
                end: "top 20%",
                markers: true, // マーカー表示
                scrub: true,
                pin: ".frame--careerPlan",
                pinSpacing: true, 
            },
        });

        gsap.to(".frame--goal", {
            y: -100,
            opacity: 1,
            scrollTrigger: {
                trigger: ".frame--goal",
                start: "top 70%",
                end: "top 20%",
                markers: true, // マーカー表示
                scrub: true,
                pin: ".frame--goal",
                pinSpacing: true, 
            },
        });






    }
)};
