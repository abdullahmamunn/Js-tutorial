$('#submit').click(function () {
    var first_name  = $('#first_name').val();
    var last_name = $('#last_name').val();
    if (first_name=='' || last_name=='')
    {
        alert("PLease fill the form");
    }
    else{
        var fullName = first_name +" "+last_name;
    }

    // alert(fullName);
    $('#fullName').val(fullName);
});
$('#name').html("my name is Mamun");
document.getElementById('name').innerHTML = "Mmaun";

$('#firstName').keyup(function () {
    var getFirstName = $('#firstName').val();
    $('#res1').html(getFirstName);
});
$('#lastName').keyup(function () {
   var last_name = $('#lastName').val();
   $('#res2').html(last_name);
});
$('#full_name').blur(function () {
    var getFirstName = $('#firstName').val();
    var last_name = $('#lastName').val();
    var full_Name = getFirstName+" "+last_name;
    $('#full_name').val(full_Name);
    $('#res3').html(full_Name);

});
function fromcontrol() {
    var input = document.createElement('input');
    document.getElementById('create-inputForm').appendChild(input)
}

document.getElementById('form-btn').onclick = function()
{
    fromcontrol();
};



function creatingform() {
    var heading = document.createElement('h1');
    var para = document.createElement('p');
    heading.innerHTML = "This is a heading";
    para.innerHTML = "This is paragraph";
    document.getElementById('create-form').appendChild(heading)
    document.getElementById('create-form').appendChild(para);
}
    document.getElementById('btn').onclick = function () {
          creatingform();
    };




