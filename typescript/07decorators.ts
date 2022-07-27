function CanJump(constructorFunction: Function){
    console.log("### CAN JUMP INVOKED ###");
    constructorFunction.prototype.jump = true;
}

@CanJump
class Person {
    private name: string;

    constructor(name: string){
        console.log("### constructor called ###");
        this.name = name;
    }
}

console.log("###  creating 1st ###");

let clark: Person = new Person("Clark");
console.log(clark);
console.log(`CAN I JUMP: ${clark['jump']}`);


console.log("###  creating 2nd ###");

let josh: Person = new Person("Josh");
console.log(josh);
console.log(`CAN I JUMP: ${josh['jump']}`);


/*
    The syntax at line no 6 is called as Decorators.

    What we are trying from the perspective of angular is that,
    angular has written so many of these methods (like CanJump method in above into our code) & classes for us 
    and when we create our own classes, we just inject or just insert the things (using @) which are written by angular for us,
    it can modifies all the properties and even can inject more properties for us.

    For Example:
    In our entire class Person, we don't have property (properties) like jump i.e. clark['jump'],
    hence this property is (are) new & we don't know what this is (these are), we never declared it (them) in class,
    But may be in order to run this class Person, this property is (properties are) neccessary to run my framework,
    thats why we decorate our class Person with CanJump (CanJump is written by us but there are many others in angular)

    This kind things is also called as meta programming,
    where we inserts some of meta deta on our classes,
    how we do that above code is one of those syntax,
    it can be done for constructors, getters & setters, methods, variables .. it can be done anywhere.

    Why they called as Decorators ?
    Because they decorate our classes with some additional features and properties.
    (Just like regular decoration where we make existing things more beautiful)
*/