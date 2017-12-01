window.onload = function() {

  var face = document.getElementById('grip');
  var reset = document.getElementById('reset');

  document.addEventListener("click", function(e) {
    var element = face.getBoundingClientRect();
    if (e.clientX >= element.left && e.clientX <= element.right && e.clientY >= element.top && e.clientY <= element.bottom) {
      if (face.className !== "") {
        document.removeEventListener("mousemove", mover);
        face.className = "";
      } else {
          face.className = "whoa";
          var mover = document.addEventListener("mousemove", function(f) {
            if (face.className !== "") {
              face.style.left = f.clientX + 'px';
              face.style.top = f.clientY + 'px';
              // console.log(f.clientX, f.clientY);
              // console.log("originX = ", origin.x, "originY = ", origin.y);
            }
          });
      }
    }
    console.log(element.left + (element.width/2), element.top + (element.height/2));
    console.log(e.clientX, e.clientY, face.offsetWidth, face.offsetHeight);
    var origin = {
      x: e.clientX,
      y: e.clientY
    };

    // if (face.className !== "") {
    //   bodyID.removeEventListener("mousemove", mover);
    //   face.className = "";
    // } else {
    //     face.className = "whoa";
    //     var mover = bodyID.addEventListener("mousemove", function(f) {
    //       if (face.className !== "") {
    //         face.style.left = f.clientX + 'px';
    //         face.style.top = f.clientY + 'px';
    //         // console.log(f.clientX, f.clientY);
    //         // console.log("originX = ", origin.x, "originY = ", origin.y);
    //       }
    //     });
    // }
  });

  reset.addEventListener("click", function() {
    face.style.left = "50%";
    face.style.top = "50%";
  });

};
