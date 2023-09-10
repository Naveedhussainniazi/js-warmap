var react = document.querySelector("#center");
react.addEventListener("mousemove", function(details){
    var reactlelocation = react.getBoundingClientRect();
    var insidereactval = details.clientX - reactlelocation.left;

    if(insidereactval < reactlelocation.width/2){
    var redcolor = gsap.utils.mapRange(0, reactlelocation.width/2,255,0,insidereactval);
    gsap.to(react,{
        backgroundColor: `rgb(${redcolor},0,0)`, 
        ease: Power4, 
    });
    }else{
        var bluecolor = gsap.utils.mapRange(reactlelocation.width/2, reactlelocation.width,0,255,insidereactval);
        gsap.to(react,{
            backgroundColor: `rgb(0,0,${bluecolor})`, 
            ease: Power4, 
        });
    }
})
react.addEventListener("mouseleave",function(){
    gsap.to(react,{
        backgroundColor: 'white',
    });
})