

//Write a function that takes a string 
//and returns the first character of 
//the string. Test your function on a 

function firstLetter(string){
    return string.substring(0,1);
};

firstLetter("cupboard");
firstLetter(" ");


//Write a function that takes a string 
//and returns the last character of a string. 
//Test your function on a few inputs, 
//including the empty string.

function lastLetter(string){
    return string.substring(string.length-1);
};
                 
lastLetter("cupboard");
lastLetter(" ");

//string number, returns position represented
//by number
var position = function(string,num){
    return string .charAt(num);
};
position("cupboard",4);
position("kitchen",3);
position("");
//add function
function add (a, b){
    return a+b   
};
add (1,2);
add (2,3);
add ("cupboard", "kitchen");
//if anything else than a number it will 
//put them next to each other, 
//like "adding" them into //another result. 

//multiply function
function multiply (a,b){
    return a*b
};
multiply(2,3);
multiply(3,5);
multiply("cupboard","kitchen");
// if not a number it will give an 
//undefined error message 

//two numbers one string
function caculate(a,b,str){
    if (str==="add"){
        return a+b;
    }else if (str==="substract"){
        return a-b;
    }
    else if(str==="multiply"){
        return a*b;
    }
    else if(str==="div"){
        return a/b;
    }else{
        return 0;  
}
};

//string number repeated

var repetition = function (string, number){
    for(var i = 0; i <= number; i++){
        console.log(string);
    }
};
repetition("wild", 4);

//reverse
var reverse = function(string){
    return string.split('').reverse().join('');
};
reverse("hello");
reverse("pauline");
reverse(" ");

//factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(4);
factorial(-2);