var rect=document.querySelector('#center')
rect.addEventListener('mousemove',(dets)=>{
    // console.log(rect.getBoundingClientRect())
    var rectLoc=rect.getBoundingClientRect()
    var insiderect=dets.clientX-rectLoc.left

    if (insiderect<rectLoc.width/2){
        var redcolor=gsap.utils.mapRange(0,rectLoc.width/2,255,0,insiderect)
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        })
    }else{
        var bluecolor=gsap.utils.mapRange(rectLoc.width/2,rectLoc.width,0,255,insiderect)
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        })
    }
})
rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{
        backgroundColor:"white"
    })
    // rect.style.backgroundColor="white"
})
