// var e=document.querySelector(".elem")
// var eimg=document.querySelector("#elem1 img")

// document.addEventListener("DOMContentLoaded", function () {
//     var e1 = document.querySelector("#elem1");

//     e1.addEventListener("mousemove", function (dets) {
//         eimg.style.left=dets.x + "px"
//         eimg.style.top=dets.y + "px"
//     });
// });

// e1.addEventListener("mouseenter",(dets)=>{
//     eimg.style.opacity=1
// })
// e1.addEventListener("mouseleave",(dets)=>{
//     eimg.style.opacity=0
// })
var es=document.querySelectorAll(".elem")
es.forEach((e)=>{

e.addEventListener('mouseenter',(dets)=>{
    e.childNodes[3].style.opacity=1
})
e.addEventListener('mouseleave',(dets)=>{
    e.childNodes[3].style.opacity=0
})
e.addEventListener("mousemove",(dets)=>{
    e.childNodes[3].style.left=dets.x+"px"
    e.childNodes[3].style.top=0.2*(dets.y)+'px'
})
})