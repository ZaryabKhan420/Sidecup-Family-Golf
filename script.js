
const mobile_menu = document.querySelector('.menu-icons');
const header = document.querySelector('#header');

// Toggle menu
const MobileToggle = () =>{
    header.classList.toggle('active');
}
mobile_menu.addEventListener('click',()=>MobileToggle());


var crsr = document.querySelector('.cursor');
var crsr_blr = document.querySelector('.cursor-blur');
document.addEventListener("mousemove",(dets)=>{
    crsr.style.left = (dets.x)+30 +"px";
    crsr.style.top = dets.y +"px";
    crsr_blr.style.left = (dets.x) - 200 +"px";
    crsr_blr.style.top = dets.y - 200 +"px";
})

var allA = document.querySelectorAll('a');

allA.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        crsr.style.scale = 2;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid #fff";
    });
    elem.addEventListener('mouseleave',function(){
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "0px solid #95C11E";
    });
})

var box = document.querySelectorAll('.card');

box.forEach(function(elemm){
    elemm.addEventListener('mouseenter',function(){
        crsr.style.scale = 2;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid #fff";
    });
    elemm.addEventListener('mouseleave',function(){
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "0px solid #95C11E";
    });
})

var element = document.querySelectorAll('.element');

element.forEach(function(elemm){
    elemm.addEventListener('mouseenter',function(){
        crsr.style.scale = 2;
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "1px solid #fff";
    });
    elemm.addEventListener('mouseleave',function(){
        crsr.style.scale = 1;
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "0px solid #95C11E";
    });
})


gsap.to("#header",{
    backgroundColor:"black",
    duration:0.5 ,
    scrollTrigger:{
        trigger:'#header',
        scroller:"body",
        start:"top -10%",
        scrub:2
    }
})

gsap.to(".page-wrapper",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:'.page-wrapper',
        scroller:"body",
        start:"top -50%",
        end:"top -70%",
        scrub:5
    }
})

gsap.to(".scroller-in",{
    duration:70,
    transform:"translateX(-100%)",
    repeat:-1
})

gsap.from(".about-us > .left , .about-us > .center , .about-us > .right" ,{
    y:50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".about-us ",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2
    }
})

gsap.from(".card" ,{
    scale:0.8,
    duration:1,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.to(".colon1",{
    x:20,
    y:20,
    duration:1,
    scrollTrigger:{
        trigger:".quote",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.to(".colon2",{
    x:-20,
    y:-20,
    duration:1,
    scrollTrigger:{
        trigger:".quote",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:2
    }
})

gsap.from(".elem > h2",{
    y: 50,
    duration:0.5,
    scrollTrigger:{
        trigger:".elem > h2",
        scroller:"body",
        scrub:2
    }
})