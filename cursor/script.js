window.addEventListener("mousemove",(dets)=>{
    var xval=gsap.utils.mapRange(0,window.innerWidth,100,window.innerWidth-100,dets.clientX)
    var yval=gsap.utils.mapRange(0,window.innerHeight,100,window.innerHeight-100,dets.clientY)
    gsap.to('.rect',{
        left:xval+'px',
        top:yval+'px',
        ease:Power3
    })
})