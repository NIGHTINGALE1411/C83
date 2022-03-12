
var lastpositionx, lastpositiony
canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="blue"
widthofline=1
var width=screen.width
var height= screen.height
 var newwidth= width-70
var newheight=height-300
 if (width<992){
     document.getElementById("mycanvas").width=newwidth
     document.getElementById("mycanvas").height=newheight
     document.body.style.overflow="hidden"

 }

canvas.addEventListener("touchstart",touchstart)
function touchstart(e)
{
    color=document.getElementById("color").value
    widthofline=document.getElementById("width").value
    lastpositionx=e.touches[0].clientX-canvas.offsetLeft
    lastpositiony=e.touches[0].clientY-canvas.offsetTop

}
canvas.addEventListener("touchmove",touchmove)
function touchmove(e){
currentpositionx=e.touches[0].clientX-canvas.offsetLeft
currentpositiony=e.touches[0].clientY-canvas.offsetTop


    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthofline
     ctx.moveTo(lastpositionx,lastpositiony)

     console.log("x="+lastpositionx+"y="+lastpositiony)
     ctx.lineTo(currentpositionx,currentpositiony)
     console.log(currentpositionx,currentpositiony)
     ctx.stroke()

lastpositionx=currentpositionx
lastpositiony=currentpositiony

}
 function ClearArea() {
     ctx.clearRect(0,0,800,600)     
 }
 