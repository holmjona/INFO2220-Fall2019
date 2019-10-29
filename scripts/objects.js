function doSomeStuff() {
    alert("Some Stuff");
}

//alert(doSomeStuff);

function doSomeStuff(v, as, s) {
    alert("Some Something else");
}

//alert(doSomeStuff);

function addNumbers(x, y) {
    if (typeof arguments[2] === "undefined") {
        //alert("top");
        return x + y;
    } else {
        //alert("bottom");
        return x + y + arguments[2];
    }
}

//alert(addNumbers);
//alert(addNumbers());
//alert(addNumbers(1, 2));
//alert(addNumbers(1, 2, 3));

var newThing = addNumbers;

//alert(newThing);
//alert(newThing());
//alert(newThing(1, 2));
//alert(newThing(1, 2, 3));

var happiness = function () { };
var sssssssss = "Some Value 12";

var lucid = function () {
    alert("You are awesome!");
    return 3;
};

//alert(lucid);
//alert(lucid());

var objOne = { a: 15, b: 3 };
objP.
var c = objOne.a + objOne.b;

function Person(){
    this.firstName = "Bob";
    this.lastName = "Awesome";
}

function Teacher(sal,lName) {
    this.salutation = sal;
    this.lastName = lName;
}

var objTwo = new Person();
//alert(objTwo.firstName);

var objTeach = new Teacher("Mr.", "Cotter");
//alert(objTeach.salutation + " " + objTeach.lastName);

function Student(fName, idNum) {
    this.firstName = fName;
    this.idNumber = idNum;
    this.code = getCode;
    this.greet = function () {
        alert("Hello my name is " + this.firstName);
    };

    function getCode() {
        return this.firstName.substr(0, 1) + this.idNumber;
    }

}

//var objStud = new Student("Bill", 7);
//objStud.greet();
//alert(objStud.getCode());


var name = prompt("What is your first name");
while (name !== "Fred") {
    name = prompt("What is your name");
}

var name;
do {
    name = prompt("What is your name");
} while (name !== "Fred");