"use strict";
function handler(event) {
    let [positionX, positionY] = [event.clientX, event.clientY]
    let finallX,finallY;
    finallX = (positionX-37 <160) ? (positionX-37>0) ? positionX-37:0 : 160;
    finallY = (positionY-70 <0) ? 0 : (positionY-70>110) ? 110 : positionY-70;
    console.log(finallX,finallY);
    ball.style.top = finallY+"px";
    ball.style.left = finallX + "px";
}

field.addEventListener ("click", handler) 