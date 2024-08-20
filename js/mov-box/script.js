window.addEventListener("mousemove",function(dets){
var rect= document.querySelector("#rect");
    
var xval=gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2,
        window.innerWidth-(100+rect.getBoundingClientRect().width/2),
        dets.clientX
    );
gsap.to("#rect", {
    left: xval,
    ease: Power3,
});
var yval=gsap.utils.mapRange(
    0,
    window.innerHeight,
    100 + rect.getBoundingClientRect().height/2,
    window.innerHeight-(100+rect.getBoundingClientRect().height/2),
    dets.clientY
);
gsap.to("#rect", {
top: yval,
ease: Power3,
});
});

