function validateForm()
{
var x = document.forms["myform"]["fname"].value;
var y = document.forms["myform"]["password"].value;

if(x == '' || y == ''){
	alert("1Name must be filled out");
	return false;
}
else{
	alert('It working')
}
}