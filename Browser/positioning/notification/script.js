"use strict";

function showNotification(inputObject) {
    let div = document.createElement('div');
    div.className = inputObject.className||'plain';
    div.innerHTML = inputObject.html || '';
    div.style.position = "absolute";
    div.top =  inputObject.top||'0' + "px";
    div.right = inputObject.right||0 + "px";

    document.body.prepend(div);
}

showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome" // an additional class for the div (optional)
  });
