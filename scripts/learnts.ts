//import { Person } from "./Person";
alert("I am in the type script page.");
var var1: number;
var two: boolean;
var aThing: any;

//var1 = "three";
var1 = 3;
//two = "true";
//two = 1;
aThing = "string";
aThing = 12;
aThing = true;

two = <boolean><unknown>1;
two = <boolean><any>2;
two = <boolean>aThing;
//two = <boolean>var1;
var1 = <number><any>'abc';
//alert(var1);

alert(funky("racecar bob mom wow"));

function fun1() : void {
    return;
}

function funky(str: string): string {
    var retStr: string = "";
    for (let c of str) {
        retStr = c + retStr;
    }
    return retStr;
}

class Person {
    private FirstName;
    public LastName;

    public a(): string {
        return this.FirstName + this.LastName;
    }
}

//document.querySelector("a.foo");

var pOne: Person;
pOne = new Person();
pOne.LastName = "Mater";