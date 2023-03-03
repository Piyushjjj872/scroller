var active = 3;

var dot = document.querySelectorAll(".dot");
var sec = document.querySelectorAll(".second");

gsap.to(dot[active-1],{
    opacity:.8
})
gsap.to(sec[active-1],{
    opacity:1
})


dot.forEach(function(val , index){
    val.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate:(3-(index+1))*10,
            // ease: Expo.easeInOut,
            duration:0.5
        })
        greyout();
        gsap.to(this,{
            opacity:.8
        })
        gsap.to(sec[index],{
            opacity:1
        })
    })
})

function greyout(){
    gsap.to(dot,{
        opacity:0.4
    })
    gsap.to(sec,{
        opacity:.5
    })
}

gsap.to("#circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})