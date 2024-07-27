name: string = "John Blow";
PI: int32: 3.14156;

// type inference
name:= "John Doe";
PI:: 3.14156;


// ananymous function
() { }


// main function
main: function : () {
	print("Hello world!");
}


// main function infered function type.
main:: () {

}


// add two value function

add:: (x: int, y: int) -> int {
	return x + y;
}

// my experment; one line function
add:: (x:= 0, y:= 0) -> int = x + y;

// functionc call
add(2, 3); // 5
add(y = 3, x = 2);  // 5
add(); // 0

// array: my experment
numbers:= [1, 2, 3];

numbers: array[int; 5] =[1, 4, 3, 2, 1];

// no size mean dynamic size
numbers: array[int]

stuff: list[int | string | float; 5] =[1, "hello", 2.2, 0, 1];

Stuff: Type: { int | string | float | array[int; 5] };
Stuff: Type: { int, string, float, array[int; 5]; }

mystuff: array[Stuff; 4] =[[1, 2, 3, 4, 5], "hello", 1, 1.4, 1.54];

mystuff2: Stuff = 3.2;


person: dict[string: string] =["name": "john", "age": "12"];

status: tuple[symbol: string | int] =[msg: "Page not found", code: 404];

status.code;  // 404
msg, code = status;  // unpacking tuple;


result: int = 
	if x > 0    5;
else 10;


import("math");   // from math import *

stat:: import("statistics")  // import statistics as stat

random:: import("random"); // from random import randrange as rr
rr:: random.randrange;



// struct
Point:: {
	x: int;
	y: int;
}

// maybe
Rect: struct: { width: uint; height: uint; }

Rect = { w: int; h: int; }

type = {}

/* type alias */


mx: list[list[int; 3]] =[[1, 2, 3], [1, 2, 3], [0, 0, 0]];

Matrix:= alais(list[list[int; 3]]);
Matrix:= type(list[list[int; 3]]);
type Matrix = list[list[int; 3]];
mx: Matrix = [[1, 2, 3], [0, 0, 0]];
