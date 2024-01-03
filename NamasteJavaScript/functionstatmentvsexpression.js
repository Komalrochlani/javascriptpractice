//function statment is also known as function declaration
//a();
//b(); this line will give you error
// because b is undefine 
//difference is that function statement hoisting is possible but not with epression
function a(){
	console.log("a is called");
}
a();


//function expression

var b = function(){
	console.log("b is called");
}
b();

//named function expression

var c = function xyz(){
	console.log("c is called");
}

c();
//xyz(); this line will give error(this name only accessible with in the function)
// You can use the name for self-reference within the function, 
//but it won't be visible outside the function or in the surrounding scope.


var d = function()
{
	return function xyz(){
	}
}

console.log(d());