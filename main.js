var can = document.getElementById("myCanvas") ;
var ctx = can.getContext("2d") ;
var mousev = "empty" ;
var lastpofx , lastpofy ;
var col = "Red" ;
var wili = 2 ;
var widths = screen.width ;
var new_widths = screen.width - 70 ;
var new_height = screen.height - 300 ;

if (widths < 992) 
{
    document.getElementById("myCanvas").width = new_widths ;
    document.getElementById("myCanvas").height = new_height ;
    document.body.style.overflow = "hidden" ;
}

can.addEventListener("mousedown", mymd) ;
function mymd(e) 
{
   col = document.getElementById("col").value ;
   wili = document.getElementById("wil").value ;
   mousev = "mousedown" ;
}
can.addEventListener("mouseup", mymp) ;
function mymp(e) 
{
    mousev = "mouseup" ;
}
can.addEventListener("mouseleave", myml) ;
function myml(e) 
{
    mousev = "mouseleave" ;
}
can.addEventListener("mousemove", mymo) ;
function mymo(e) 
{
    var curX = e.clientX - can.offsetLeft ;
    var curY = e.clientY - can.offsetTop ;
    if (mousev == "mousedown") 
    {
        ctx.beginPath()
        ctx.strokeStyle = col ;
        ctx.lineWidth = wili ;
        console.log("last position of x and y coordinate = ")
        console.log("X = "+curX+" Y = "+curY) ;
        ctx.moveTo(lastpofx,lastpofy) ;
        ctx.lineTo(curX,curY) ;
        ctx.stroke() ;
    }
    lastpofx = curX ;
    lastpofy = curY ;
}

 can.addEventListener("touchstart", my_touchstart);
    
 function my_touchstart(e)
   {
        console.log("my_touchstart")
        col = document.getElementById("col").value;
        wili = document.getElementById("wil").value;
   }


can.addEventListener("touchmove", my_touchmove);
    
function my_touchmove(e)
{

        console.log("tkk")
        var tx = e.touches[0].clientX - can.offsetLeft;
        var ty = e.touches[0].clientY - can.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = col;
        ctx.lineWidth = wili;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastpofx + "y = " + lastpofy);
        ctx.moveTo(lastpofx, lastpofy);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + tx + "y = " + ty);
        ctx.lineTo(tx, ty);
        ctx.stroke();

        lastpofx = tx; 
        lastpofy = ty;
}

