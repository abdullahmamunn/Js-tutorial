var x = document.getElementById('btn');
   
    x.onclick = function()
    {
    	var first_name = document.getElementById('first_name').value;
    	var last_name =  document.getElementById('last_name').value;
    	var full_name = first_name+" "+last_name;
    	
    	//document.getElementById('fullname').innerHTML = full_name;
    	document.getElementById('fullname').value = full_name;
    };

var addition  = document.getElementById('add');
    addition.onclick = function()
    {
    	var first_number = Number(document.getElementById('first_number').value);
    	var second_number = Number(document.getElementById('second_number').value);
    	var result  = first_number + second_number;
        
    	document.getElementById('result').value = result;
    };

  var subtraction  = document.getElementById('sub');
    subtraction.onclick = function()
    {
    	var first_number = Number(document.getElementById('first_number').value);
    	var second_number = Number(document.getElementById('second_number').value);
    	var result  = first_number - second_number;
        
    	document.getElementById('result').value = result;
    };

    var multiplication  = document.getElementById('mul');
    multiplication.onclick = function()
    {
    	var first_number = Number(document.getElementById('first_number').value);
    	var second_number = Number(document.getElementById('second_number').value);
    	var result  = first_number * second_number;
        
    	document.getElementById('result').value = result;
    };

    var divition  = document.getElementById('div');
    divition.onclick = function()
    {
    	var first_number = Number(document.getElementById('first_number').value);
    	var second_number = Number(document.getElementById('second_number').value);
    	var result  = first_number / second_number;
        
    	document.getElementById('result').value = result;
    };

    var modulus  = document.getElementById('mod');
    modulus.onclick = function()
    {
    	var first_number = Number(document.getElementById('first_number').value);
    	var second_number = Number(document.getElementById('second_number').value);
    	var result  = first_number % second_number;
        
    	document.getElementById('result').value = result;
    };


function clickMe()
{
	var name = prompt("Who are you?");
	document.getElementById('myid').innerHTML = name;
};




