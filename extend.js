/* Comment
Multi line comment 
/* that can be nest */
very useful
*/

/* Features: 
** Static / Compiled Programming Language
** Simple / Tiny / Easy to learn
** No OOP but able to define methods
** 
*/

/* ----------  
    Variable
* ---------- */
name: string = "John Doe";
age: int;   /* use defualt value */
location := "London";  /* infered type */

age = 20;  /* change value of the variable */

/* ----------  
    constant
* ---------- */
PI :: 3.14;
NAME :: "Jery";

/* ----------  
    function
* ---------- */
/* define a function */
function(x: int, y: int) -> int {
    return x + y;
}

/* assaign a function to a constant to call it */
add :: function(x: int, y: int) -> int {
    return x + y;
}


/* one line function */
add :: function(x: int, y: int) => x + y;

/* one liner function useful to pass them as arrgument. */
/* filter names that start with the letter 'J' */
filter(function(name) => name.startwith('J'), names);

/* Export names */
@export
print :: function(s: string) -> null {}

@export
version := 1.1;



