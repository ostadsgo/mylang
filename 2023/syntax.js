/* import modules */
/* Philospophey 
* Simple yet effecient programming langauge.
* No OOP
* No complex concepts
* Procedulare language
* Simple minimal syntax overhead
* Only have neccessery concepts to write software
*/


/* create constant */
PI:: 3.14159256;
NAME: string: "Bob";

/* Variables */
age:= 10;
age++;  /* 11 */

value: int = 12.3;
value = 10.9;
value += 11; /* 21.9 */

Location:= struct {
    county: string;
    city: string;
    street: string;
    number: int;
}

Person:= struct {
    name: string;
    age: int;
    location: Location;
}

loc = Location(county = "Germany", city = "Hamburge", street = "Madam Cury", number = 3410);
peter = Person(name = "Peter Parker", age = 23, location = loc)