const colors=["green","red","rgba(133,122,20)","#f15025","#f22398"]
const btn=document.getElementById("btn");
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    const rand0mNum=Math.floor(Math.random()*colors.length)

    document.body.style.backgroundColor=colors[rand0mNum]
    color.textContent=colors[rand0mNum]
})