//import { Person } from "./Person";
alert("I am in the type script page.");
var var1;
var two;
var aThing;
//var1 = "three";
var1 = 3;
//two = "true";
//two = 1;
aThing = "string";
aThing = 12;
aThing = true;
two = 1;
two = 2;
two = aThing;
//two = <boolean>var1;
var1 = 'abc';
//alert(var1);
alert(funky("racecar bob mom wow"));
function fun1() {
    return;
}
function funky(str) {
    var retStr = "";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var c = str_1[_i];
        retStr = c + retStr;
    }
    return retStr;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.a = function () {
        return this.FirstName + this.LastName;
    };
    return Person;
}());
//document.querySelector("a.foo");
var pOne;
pOne = new Person();
pOne.LastName = "Mater";
//# sourceMappingURL=learnts.js.map