// learning js with ziang from ubuff
// is the syntax for commenting
/* this syntax is for commenting multiple lines */

// console.log() is print() in python

'use strict' // js back then is old and uses strict, this 'use strict' command sets it so your program is running using strict, we want to use strict to work with older programs if we're collaborating, strict and non strict code wont run together.

// some requirements for strict is that you have to establish the variables using var, let or const, similar to C.
// you also need to add semi colons, similar to C as well.

// javascript is syntax similar to C and also programs similar to python so i had a easy time learning this

/* 
instead of def func(): in python
js uses function func (){

}
----
instead of if statements like if a == b: in python
you have if (a == b){

}
----
on top of = and ==, js has a ===, which returns true or false.
for example, 1 == int(1) is good, but 1 === int(1) is false. 1 === 1 is true.
*/

function check (num){
  if (num == 0){
    console.log("zero");
  }
  else if (num == 1){
    console.log("one");
  }
  else{
    console.log("not 0 or 1");
  }
}
check("0");
check("1");
check("4");

// indexing is the same in python, it goes from 0, 1, 2

// for loops normal (similar to C)
function forloop0 (list0){
  for (var i = 0; i < list0.length; i++)
  console.log(list0[i]);
}

forloop0([["0Asd"], ["0asdafead"]])

// for loops of (this just takes values)

function forloop1 (list1){
  for (var i of list1)
  console.log(i);
}

forloop1([["1Asd"], ["1asdafead"]])

// for loops in (this shows index)

function forloop2 (list2){
  for (var i in list2)
  console.log(list2[i]);
}

forloop2([["2Asd"], ["2asdafead"]])