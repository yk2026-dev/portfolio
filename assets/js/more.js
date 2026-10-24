'use strict'; {
    $(function() {
    // =======================
    // Common
    // ======================= 
        gsap.registerPlugin(ScrollTrigger);

    // =======================
    // more menu
    // ======================= 
        gsap.to(".moreMenu__item__dot", {
            backgroundColor: "black",
            scrollTrigger: {
                trigger: ".box", // アニメーションが始まるトリガーとなる要素
                start: "top 60%", // アニメーションが始まる位置
                end: "bottom 30%", // アニメーションが始まる位置
                markers: true, // マーカー表示
                scrub: true, // スクロール量に合わせてアニメーション
            },
        });
    }
)};
