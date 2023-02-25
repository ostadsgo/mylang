
// This is one line comment

/* Multi line comment 
    /* Which can be nested */
Comments are useful to describe the code
*/

/* Features
* Compiled and staticly typed language
* Simple, easy to learn 
* Type inference

*/

/* Operators */
/* 
    * Arthimethics *
    * **
    / //
    + ++
    - --
    % %% /* don't know what to use for */

// define variables
name: string;  // a variable with string defualt value
name: string = ""; // same above
name: string = "Joe Doe";
name = "John Doe";  // change value of the name variable

name := "John Doe";  // define a string with type inference


name, location: string;  // mutiple variable define
name, location := "John Doe", "Unknown";


// Hello world
print("hello world!");

// Functions
add :: (x: int, y: int) -> int {
    return x + y;
}

sub :: (x: int, y: int) -> int {
    return x - y;
}

// if there is a main function progrm will start from that.

main :: () {
    calculation := add(2, 3) + sub(9, 3);
    print(calculation);
}


// symbol visibility

@public
public_function :: ();

@private
private_function :: ();

// String
s := "hello world";
s[0];  // h
s[1..]; // ello world
s[..];  // hello world
s[..s.len];  // hello world
s[..s.len..2];  //hlowrd

// string formating
name := "John Doe";
age := 42;
output := "My name is {name} and I am {age} years old.";
print(output);

// Arrays
// callection of data that they are same type

numbers: array[int] = [1, 2, 3, 4];
numbers[0];  // 1
numbers.append(5);  // [1, 2, 3, 4, 5]
numbers.extend([1, 2, 3]);
print(1 in numbers);  // true


// Maps
person : map[str: string | int] = ["name": "Jeff", "age": 12];

person := map[string: string | int];
array[person];

array[int] = [1, 2, 3];
list[int | float] = [1, 2, 1.1, 1];
map[string: string] = ["name": "some"];
error : tuple[msg: string, val: int] = ["Not found", 404];
error.msg;  // "not found"

// lua like methods
// define struct
Superhero :: {
    name: string;
    age: int;
    real_name: string;
    capiblities: array[string];
}

// define a struct;
peter = Superhero();
peter.name = "Spider man"
peter.age = 23;
peter.real_name = "Peter Parker"
// initial struct
spider = Superhero(name="Spider Man", age=23, real_name="Peter Parker");
spider.capiblities.append("Fluy with robs")
spider.capiblities.append("Predict danger.")

// method for struct
Superhero.capiblities := (superhero: Superhero) -> array[string] {
    print(superhero.capiblities);
}

