
// time()
const tl = gsap.timeline(); 




tl.from(".left-stick",{
    x:"-320%",
    duration:1.2, 
    delay:.3,
}, "y")
tl.from(".sub-nav",{
    x:"320%",
    duration:1.2, 
    delay:.3,
}, "y")
tl.from("#home-btn",{
    y:100, 
    opacity:0,
    duration:.8,
})
tl.from("#home-txt",{
    y:100, 
    opacity:0,
    duration:.8,
    stagger:.3
})
tl.from("#home-sub-txt",{
    y:100, 
    opacity:0,
    duration:.8,
    stagger:.3
})
tl.from(".home-exp",{
    y:100, 
    opacity:0,
    duration:1.2,
    stagger:.3
})


gsap.from("#about .sec-btn",{
    y:100, 
    opacity:0,
    duration:.5,
    scrollTrigger:"#about .sec-btn"
})
gsap.from("#about-txt",{
    y:100, 
    opacity:0,
    duration:.5,
    scrollTrigger:"#about-txt", 
    delay:2,
})
gsap.from(".about-sub",{
    y:-100, 
    opacity:0,
    duration:.5,
    scrollTrigger:".about-sub", 
    delay:2,
})
gsap.from("#education .sec-btn",{
    y:100, 
    opacity:0,
    duration:.5,
    scrollTrigger:"#education .sec-btn"
})

gsap.from("#education h1",{
    height:0,
    opacity:0,
    duration:2,
    delay:1,
    scrollTrigger:"#education h1"
})
gsap.from("li",{
    x:100, 
    y:100,
    height:0,
    opacity:0,
    duration:2,
    delay:1,
    stagger:.4,
    scrollTrigger:"li"
})
gsap.from("#skills .sec-btn",{
    y:100, 
    opacity:0,
    duration:1.2,
    scrollTrigger:"#skills .sec-btn", 
    
})
gsap.from("#skills h1",{
    x:1000, 
    opacity:0,
    duration:1.2,
    scrollTrigger:"#skills h1"
})
gsap.from(".type-1",{
    x:-100, 
    y:-100, 
    opacity:0, 
    delay:1 , 
    duration:2,
    scrollTrigger:".type-1",
    
},"j")
gsap.from(".type-2",{
    x:100, 
    y:100, 
    opacity:0, 
    delay:1 , 
    duration:2,
    scrollTrigger:".type-2"
},"j")

gsap.from("#projects .sec-btn",{
    y:100, 
    opacity:0,
    duration:1.2,
    scrollTrigger:"#projects .sec-btn"
})

gsap.from("#projects h1",{
    x:1000, 
    opacity:0,
    duration:1.2,
    scrollTrigger:"#projects h1"
})
gsap.from("#first-project",{
    x:-100,
    scale:0 , 
    opacity:0, 
    duration:1.5,
    
})
gsap.from(".half-project-1",{
    scale:0 ,
    x:-1000, 
    y:-1000 , 
    opacity:0, 
    duration:2,
    stagger:.8,
    scrollTrigger:"half-project-1",
    markers:true ,
})
gsap.from(".half-project-2",{
    scale:0 ,
    x:-1000, 
    y:1000 , 
    opacity:0, 
    duration:2,
    stagger:.8,
    scrollTrigger:"half-project-2"
})
gsap.from("#fourth-project",{
    x:1000,
    scale:0 , 
    opacity:0, 
    duration:1.5,
    scrollTrigger:"#fouth-project"
})
