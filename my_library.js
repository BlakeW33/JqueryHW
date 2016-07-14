
$(document).click(function(){
	//The document. asures that the function wont start until,in this instance,
	//.click is performed
	alert('Starting show')
	        //$("body")
	//inserting this^ into the console log will return an array with the selectied items in body
	$('p').slideUp(3000);
	//the $ is how we access the jquery library. The ".slideUp" is a modifier that 
	//goes into the function.
	$('p').slideDown(3000);
	//this uses the slideDown command it slides the selected item down and can be 
	//modified as seen above by how fast it executes the command
	$('h1').slideDown(3000);
	$('h3').hide(10000);
	//.hide hides the function
	$('h3').show(6000);
	//.show can make the function reapear
	$('h1').animate({ width:"20%"} , 2000);
	//The animate function can be used in a variety of ways. it is used above to make 
	//the H1 tag shrink over 2 seconds.
	$('p').fadeOut(5000);
	//The fade out command makes the selected item fade away.
});

var anon = function(){alert('anon');}
//This is a anonymous function
function SomeRunner(afunction){ console.log(2+2); afunction();}
//This is a callback and accesses the function