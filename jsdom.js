
document.getElementById('pera').innerHTML = "Mamun";

//Finding HTML Element by Id

var myElements = document.getElementById('find');

document.getElementById('myid').innerHTML ="This is new text "+myElements.innerHTML;

//Finding HTML Elements by Tag Name

var findIndex = document.getElementsByTagName('p');
document.getElementById('language').innerHTML ="I love php it's is an popular ->"+findIndex[3].innerHTML+"<- Language";


var x = document.getElementById('main');
var y = document.getElementsByTagName('p');
document.getElementById('demo').innerHTML = "Hello ->"+y[5].innerHTML;
document.getElementById('demo').style.color = "blue";
document.getElementById('demo').style.fontFamily = "Times New Roman";
document.getElementById('demo').style.fontSize = "larger";


// Date
var mydate = Date();
document.getElementById('mydate').innerHTML = mydate;

//Image Changing

document.getElementById('myImg').src = "src/js.jpg";
document.getElementById('myImg').width = 500;
document.getElementById('myImg').heigth = 500;


// Click Me and change my color
 function colorChange()
 {
 	document.getElementById('mycolor').style.color = "red";
 }
