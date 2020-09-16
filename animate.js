
function animationMove() 
{
  var elements = document.getElementById('animate');
  var pos = 0;
    var id = setInterval(frame, 10);
      function frame() 
      {
        if (pos == 350)
         {
            clearInterval(id);
         } 
        else
         {
           pos++;
           elements.style.top = pos + "px";
           elements.style.left = pos + "px";
         }
     }
}