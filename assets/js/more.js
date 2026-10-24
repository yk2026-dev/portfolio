'use strict'; {
    $(function() {
    // =======================
    // Common
    // ======================= 
        gsap.registerPlugin(ScrollTrigger);

    // =======================
    // more menu
    // ======================= 
        // スクロールに合わせて強調
            ScrollTrigger.create({
                trigger: ".frame--favorite",
                start: "top 20%",
                end: "bottom 10%",
                markers: true,
                toggleClass: {
                    targets: ".moreMenu__item__dot--favorite, .moreMenu__item--favorite",
                    className: "active"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--strengths",
                start: "top 20%",
                end: "bottom 10%",
                markers: true,
                toggleClass: {
                    targets: ".moreMenu__item__dot--strengths, .moreMenu__item--strengths",
                    className: "active"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--creative",
                start: "top 20%",
                end: "bottom 10%",
                markers: true,
                toggleClass: {
                    targets: ".moreMenu__item__dot--creative, .moreMenu__item--creative",
                    className: "active"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--programming",
                start: "top 20%",
                end: "bottom 10%",
                markers: true,
                toggleClass: {
                    targets: ".moreMenu__item__dot--programming, .moreMenu__item--programming",
                    className: "active"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--careerPlan",
                start: "top 20%",
                end: "bottom 10%",
                markers: true,
                toggleClass: {
                    targets: ".moreMenu__item__dot--careerPlan, .moreMenu__item--careerPlan",
                    className: "active"
                }
            });

            ScrollTrigger.create({
                trigger: ".frame--goal",
                start: "top 20%",
                end: "bottom 10%",
                markers: true,
                toggleClass: {
                    targets: ".moreMenu__item__dot--goal, .moreMenu__item--goal",
                    className: "active"
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








    }
)};
