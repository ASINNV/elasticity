window.onload = function() {

  var grip = document.getElementById('grip');
  var reset = document.getElementById('reset');
  var anchor = document.getElementById('anchor');
  var anchorRect = anchor.getBoundingClientRect();

  var svg = document.getElementById('svg');
  var line = document.getElementById('line');

  var bodyID = document.getElementById('body-id');
  var clientWindow = bodyID.getBoundingClientRect();
  
  svg.setAttribute('viewBox', '0 0 ' + (Math.round(clientWindow.width)) + ' ' + (Math.round(clientWindow.height)));
  svg.setAttribute('width', Math.round(clientWindow.width));
  svg.setAttribute('height', Math.round(clientWindow.height));

  document.addEventListener("click", function(e) {
    var gripRect = grip.getBoundingClientRect();
    if (e.clientX >= gripRect.left && e.clientX <= gripRect.right && e.clientY >= gripRect.top && e.clientY <= gripRect.bottom) {
      if (grip.className !== "") {
        document.removeEventListener("mousemove", mover);
        grip.className = "";
      } else {
          grip.className = "whoa";
          var mover = document.addEventListener("mousemove", function(f) {
            if (grip.className !== "") {
              grip.style.left = f.clientX + 'px';
              grip.style.top = f.clientY + 'px';
              line.setAttribute('x1', f.clientX);
              line.setAttribute('y1', f.clientY);
              line.setAttribute('x2', (anchorRect.left + (anchorRect.width/2)));
              line.setAttribute('y2', (anchorRect.top + (anchorRect.width/2)));
              console.log(gripRect.width);
              // console.log(f.clientX, f.clientY);
              // console.log("originX = ", origin.x, "originY = ", origin.y);
            }
          });
      }
    }
    console.log(gripRect.left + (gripRect.width/2), gripRect.top + (gripRect.height/2));
    console.log(e.clientX, e.clientY, grip.offsetWidth, grip.offsetHeight);
    var origin = {
      x: e.clientX,
      y: e.clientY
    };

    // if (grip.className !== "") {
    //   bodyID.removeEventListener("mousemove", mover);
    //   grip.className = "";
    // } else {
    //     grip.className = "whoa";
    //     var mover = bodyID.addEventListener("mousemove", function(f) {
    //       if (grip.className !== "") {
    //         grip.style.left = f.clientX + 'px';
    //         grip.style.top = f.clientY + 'px';
    //         // console.log(f.clientX, f.clientY);
    //         // console.log("originX = ", origin.x, "originY = ", origin.y);
    //       }
    //     });
    // }
  });

  reset.addEventListener("click", function() {
    grip.style.left = "50%";
    grip.style.top = "50%";
    line.setAttribute('x1', (Math.round(clientWindow.width/2)));
    line.setAttribute('y1', (Math.round(clientWindow.height/2)));

  });

};
