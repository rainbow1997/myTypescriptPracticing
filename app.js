var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = Age;
    }
    Person.prototype.study = function (hours) {
        alert('I\'ve studied' + hours + ' hours.');
    };
    Person.sleep = function () {
        return 'Im sleeping';
    };
    Person.prototype.Firstname = function () {
        return this.firstName;
    };
    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Person.id = 0;
    return Person;
}());
var Mostafa = /** @class */ (function (_super) {
    __extends(Mostafa, _super);
    function Mostafa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wakeup = function (hours) {
            return 'Im sleeping' + hours + 'hours';
        };
        return _this;
    }
    Mostafa.prototype.setNewName = function (name) {
        this.firstName = _super.prototype.Firstname + name;
    };
    return Mostafa;
}(Person));
var mostafa = new Mostafa('mostafa', 'jamali', 24);
Mostafa.id++;
Mostafa.sleep();
mostafa.age = 24.5;
alert(mostafa.setNewName("MohammadAmin"));
var myobject = {
    fname: 'Mostafa',
    lname: 'Jamali',
    hobbies: ['reading', 'sleeping']
};
console.log(myobject.fname);
console.log(myobject.hobbies);
