
function animationMove() 
{
  var elements = document.getElementById('animate');
  var pos = 0;
    var id = setInterval(frame, 5);
      function frame() 
      {
        if (pos == 350)
         {
            clearInterval(id);
         } 
        else
         {
           pos++;
           elements.style.bottom = pos + "px";
           elements.style.top = pos + "px";
         }
     }
}