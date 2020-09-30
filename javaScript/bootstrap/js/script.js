var GreenBtn = document.getElementById('greenBtn');
GreenBtn.onclick = function(){
    //document.getElementById('div-one').style.background = 'green';
    var getElement = document.getElementById('div-one');
    // getElement.className = 'div-one';
    //getElement.style.background = 'green';
    getElement.className = 'class-five'
};

var redBtn = document.getElementById('redBtn');
redBtn.onclick = function(){
    //document.getElementById('div-one').style.background = 'green';
    var getElement = document.getElementById('div-one');
    // getElement.className = 'div-one';
    //getElement.style.background = 'red';
    getElement.className = 'class-four';
};

var yellowBtn = document.getElementById('yellowBtn');
yellowBtn.onclick = function(){
    //document.getElementById('div-one').style.background = 'green';
    var getElement = document.getElementById('div-one');
    // getElement.className = 'div-one';
    //getElement.style.background = 'yellow';
    getElement.className = 'class-three';
};
var blueBtn = document.getElementById('blueBtn');
blueBtn.onclick = function(){
    //document.getElementById('div-one').style.background = 'green';
    var getElement = document.getElementById('div-one');
    // getElement.className = 'div-one';
    //getElement.style.background = 'blue';
    getElement.className = 'class-two';
};
var defaultBtn = document.getElementById('defaultBtn');
defaultBtn.onclick = function()
{
     let getElements = document.getElementById('div-one');
     getElements.className = 'class-one';
};
