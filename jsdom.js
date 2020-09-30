
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


//The onchange Event
function Myfunction()
{
	var x = document.getElementById('name');
	x.value = x.value.toLowerCase();
}

//objects
var person = {
    first_name : "Abdullah Al",
    last_name  : "Mamun",
    age        : 26,  
	    fullname:function()
	    {
	    	return this.first_name +" "+this.last_name;
	    }
}
console.log(person.fullname());
document.getElementById('fullname').innerHTML = person.fullname();
document.getElementById('age').innerHTML = "Age is "+person.age;

//switch case


function getMonth(){
	var getNumber = parseInt(document.getElementById('getNumber').value);
	//parseInt
    var txt;

	switch(getNumber)
	{
		case 1:
			txt = "January";
			break;
		case 2:
			txt = "February";
			break;
		case 3:
			txt = "March";
			break;
		case 4:
			txt = "April";
			break;
		case 5:
			txt = "May";
			break;
		case 6:
			txt = "June";
			break;
		case 7:
			txt = "July";
			break;
		case 8:
			txt = "August";
			break;
		case 9:
			txt = "September";
			break;
		case 10:
			txt = "October";
			break;
		case 11:
			txt = "November";
			break;
		case 12:
			txt = "December";
			break;
		default:
			txt = "Invalid month";
			break;
	}
  document.getElementById('getMonth').innerHTML = txt;


	
}
  var text1 = document.getElementById('getText').innerText;
  document.getElementById('show').innerHTML = text1;
  console.log(text1);

 
 var startTime;
 var countDown;
  function countDownInit() {	
		
		startTime = 20;
        startTimeout();
  }

  function startTimeout()
  {
  	
  	if(startTime>0)
  	{
  		startTime--;
  		document.getElementById('show_count').innerHTML = startTime;
  		if (startTime>0) 
  		{
           countDown = setTimeout("startTimeout()",1000);
  		}

  	}
    
  	
  }
function stopTimeout()
{
	clearTimeout(countDown);
}

function average(a, b) {
  return (a + b)/ 2;
}

console.log(average(2, 1));