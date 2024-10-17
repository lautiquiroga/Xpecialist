/* Sin locomotive: */

// document.addEventListener('DOMContentLoaded', function () {


//     ///// Gsap //////

//     gsap.registerPlugin(ScrollTrigger);

//     const h1 = document.querySelector("h1");
//     const ind = document.querySelector(".ind");
//     const by = document.querySelector(".by");
//     const col1 = document.querySelector(".section-3 .col-1");
//     const col2 = document.querySelector(".section-3 .col-2");
//     const col3 = document.querySelector(".section-3 .col-3");
//     const col1h5 = document.querySelector(".section-3 .col-1 h5");
//     const col2h5 = document.querySelector(".section-3 .col-2 h5");
//     const col3h5 = document.querySelector(".section-3 .col-3 h5");
//     const col1h6 = document.querySelector(".section-3 .col-1 h6");
//     const col2h6 = document.querySelector(".section-3 .col-2 h6");
//     const col3h6 = document.querySelector(".section-3 .col-3 h6");
//     const col1p = document.querySelector(".section-3 .col-1 p");
//     const col2p = document.querySelector(".section-3 .col-2 p");
//     const col3p = document.querySelector(".section-3 .col-3 p");

//     ejecutarGsap();

//     // Desktop
//     function ejecutarGsap() {
//         // if (window.matchMedia("(min-width: 1200px)").matches) {
//         const tl1 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".section-2",
//                 start: "top top",
//                 end: "100% 100%",
//                 scrub: 0.5,
//                 // markers: true
//             },
//         });



//         tl1.to(h1, {
//             fontSize: '2vw',
//             duration: 1,
//         }, 0.5);
//         tl1.to(ind, {
//             fontSize: '10vw',
//             duration: 1.5,
//         }, 0.5);



//         tl1.to(ind, {
//             fontSize: '2vw',
//             duration: 1.5,
//         }, 2.5);
//         tl1.to(by, {
//             fontSize: '10vw',
//             duration: 1.5,
//         }, 2.5);



//         tl1.to(h1, {
//             fontSize: '6.5vw',
//             duration: 1.5,
//         }, 4.5);

//         tl1.to(ind, {
//             fontSize: '6.5vw',
//             duration: 1.5,
//         }, 4.5);

//         tl1.to(by, {
//             fontSize: '6.5vw',
//             duration: 1.5,
//         }, 4.5);



//         tl1.to(h1, {
//             duration: 1.5,
//         }, 5);
//         tl1.to(ind, {
//             duration: 1.5,
//         }, 5);
//         tl1.to(by, {
//             duration: 1.5,
//         }, 5);



//         // Time Line 2
//         const tl2 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".section-3",
//                 start: "top top",
//                 end: "100% 100%",
//                 scrub: 0.5,
//                 // markers: true
//             },
//         });


//         // Estado 1

//         tl2.to(col1, {
//             backdropFilter: 'blur(5px)',
//             duration: 1,
//         }, 0.5);
//         tl2.to(col1h5, {
//             opacity: '1',
//             duration: 1,
//         }, 0.5);
//         tl2.to(col1h6, {
//             opacity: '1',
//             duration: 1,
//         }, 0.5);
//         tl2.to(col1p, {
//             opacity: '1',
//             duration: 1,
//         }, 0.5);



//         // Estado 2

//         tl2.to(col1, {
//             duration: 1,
//         }, 1.5);
//         tl2.to(col1h5, {
//             duration: 1,
//         }, 1.5);
//         tl2.to(col1h6, {
//             duration: 1,
//         }, 1.5);
//         tl2.to(col1p, {
//             duration: 1,
//         }, 1.5);

//         tl2.to(col1, {
//             backdropFilter: 'unset',
//             duration: 1,
//         }, 2.5);
//         tl2.to(col1h5, {
//             opacity: '0',
//             duration: 1,
//         }, 2.5);
//         tl2.to(col1h6, {
//             opacity: '0',
//             duration: 1,
//         }, 2.5);
//         tl2.to(col1p, {
//             opacity: '0',
//             duration: 1,
//         }, 2.5);

//         tl2.to(col2, {
//             backdropFilter: 'blur(5px)',
//             duration: 1,
//         }, 3);
//         tl2.to(col2h5, {
//             opacity: '1',
//             duration: 1,
//         }, 3);
//         tl2.to(col2h6, {
//             opacity: '1',
//             duration: 1,
//         }, 3);
//         tl2.to(col2p, {
//             opacity: '1',
//             duration: 1,
//         }, 3);



//         // Estado 3

//         tl2.to(col2, {
//             duration: 1,
//         }, 4);
//         tl2.to(col2h5, {
//             duration: 1,
//         }, 4);
//         tl2.to(col2h6, {
//             duration: 1,
//         }, 4);
//         tl2.to(col2p, {
//             duration: 1,
//         }, 4);

//         tl2.to(col2, {
//             backdropFilter: 'unset',
//             duration: 1,
//         }, 5);
//         tl2.to(col2h5, {
//             opacity: '0',
//             duration: 1,
//         }, 5);
//         tl2.to(col2h6, {
//             opacity: '0',
//             duration: 1,
//         }, 5);
//         tl2.to(col2p, {
//             opacity: '0',
//             duration: 1,
//         }, 5);

//         tl2.to(col3, {
//             backdropFilter: 'blur(5px)',
//             duration: 1,
//         }, 6);
//         tl2.to(col3h5, {
//             opacity: '1',
//             duration: 1,
//         }, 6);
//         tl2.to(col3h6, {
//             opacity: '1',
//             duration: 1,
//         }, 6);
//         tl2.to(col3p, {
//             opacity: '1',
//             duration: 1,
//         }, 6);

//         tl2.to(col3, {
//             duration: 1,
//         }, 7);
//         tl2.to(col3h5, {
//             duration: 1,
//         }, 7);
//         tl2.to(col3h6, {
//             duration: 1,
//         }, 7);
//         tl2.to(col3p, {
//             duration: 1,
//         }, 7);

//         // }
//     }

// })



/* Con locomotive: */

document.addEventListener('DOMContentLoaded', function () {

    ///// GSAP y Locomotive Scroll //////

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".smooth-scroll"), // El contenedor que envuelve todo tu contenido
        smooth: true,
        getDirection: true,
        getSpeed: true,
    });

    // Refrescamos ScrollTrigger cuando Locomotive Scroll está lista
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".smooth-scroll", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });

    // Refresca ScrollTrigger y Locomotive Scroll al redimensionar la ventana
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Elementos
    const h1 = document.querySelector("h1");
    const ind = document.querySelector(".ind");
    const by = document.querySelector(".by");
    const col1 = document.querySelector(".section-3 .col-1");
    const col2 = document.querySelector(".section-3 .col-2");
    const col3 = document.querySelector(".section-3 .col-3");
    const col1h5 = document.querySelector(".section-3 .col-1 h5");
    const col2h5 = document.querySelector(".section-3 .col-2 h5");
    const col3h5 = document.querySelector(".section-3 .col-3 h5");
    const col1h6 = document.querySelector(".section-3 .col-1 h6");
    const col2h6 = document.querySelector(".section-3 .col-2 h6");
    const col3h6 = document.querySelector(".section-3 .col-3 h6");
    const col1p = document.querySelector(".section-3 .col-1 p");
    const col2p = document.querySelector(".section-3 .col-2 p");
    const col3p = document.querySelector(".section-3 .col-3 p");
    ejecutarGsap();

    function ejecutarGsap() {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-2",
                scroller: ".smooth-scroll",  // Importante para usar con Locomotive Scroll
                start: "top top",
                end: "100% 100%",
                scrub: 0.5,
                // markers: true,
            },
        });

        tl1.to(h1, { fontSize: '2vw', duration: 1 }, 0.5);
        tl1.to(ind, { fontSize: '10vw', duration: 1.5 }, 0.5);
        tl1.to(ind, { fontSize: '2vw', duration: 1.5 }, 2.5);
        tl1.to(by, { fontSize: '10vw', duration: 1.5 }, 2.5);
        tl1.to([h1, ind, by], { fontSize: '6.5vw', duration: 1.5 }, 4.5);
        tl1.to([h1, ind, by], { duration: 1.5 }, 5);

        // Time Line 2
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-3",
                scroller: ".smooth-scroll",  // Importante para usar con Locomotive Scroll
                start: "top top",
                end: "100% 100%",
                scrub: 0.5,
            },
        });

        tl2.to(col1, { backdropFilter: 'blur(5px)', duration: 1 }, 0.5)
            .to([col1h5, col1h6, col1p], { opacity: '1', duration: 1 }, 0.5)
            .to([col1h5, col1h6, col1p], { opacity: '0', duration: 1 }, 2.5)
            .to(col1, { backdropFilter: 'unset', duration: 1 }, 2.5)
            .to(col2, { backdropFilter: 'blur(5px)', duration: 1 }, 3)
            .to([col2h5, col2h6, col2p], { opacity: '1', duration: 1 }, 3)
            .to([col2h5, col2h6, col2p], { opacity: '0', duration: 1 }, 5)
            .to(col2, { backdropFilter: 'unset', duration: 1 }, 5)
            .to(col3, { backdropFilter: 'blur(5px)', duration: 1 }, 6)
            .to([col3h5, col3h6, col3p], { opacity: '1', duration: 1 }, 6)
            .to([col3h5, col3h6, col3p], { duration: 1 }, 7);
    }
});
