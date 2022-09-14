interface Student {
    firstName: string;
    lastName: string;

    study(hours: number | string): void
}

class Person implements Student {
    public firstName: string;
    public lastName: string;
    age: number;
    readonly code: number | string;
    static id: number = 0;

    constructor(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = Age;


    }

    study(hours: number): void {
        alert('I\'ve studied' + hours + ' hours.');
    }

    static sleep() {
        return 'Im sleeping';
    }

    public Firstname() {
        return this.firstName;
    }

    get Age() {
        return this.age;
    }

    set Age(age: number) {
        this.age = age;
    }
}

class Mostafa extends Person {

    setNewName(name: string): void {
        this.firstName = super.Firstname + name;
    }

    wakeup = (hours: number): string => {
        return 'Im sleeping' + hours + 'hours';
    }
}

enum Role { ADMIN, Author}

const mostafa = new Mostafa('mostafa', 'jamali', 24);
Mostafa.id++;
Mostafa.sleep();
mostafa.age = 24.5;
alert(mostafa.setNewName("MohammadAmin"));
const myobject: {
    fname: string;
    lname: string;
    hobbies: string[];
    role: [number, string];//first element should be number then the second should be string
    role2: [number, any];
    role3: Role;
} = {
    fname: 'Mostafa',
    lname: 'Jamali',
    hobbies: ['reading', 'sleeping'],
    role3: Role.Author;
};
myobject.role = [1, 'st'];
myobject.role = [3.5, 'two'];
console.log(myobject.role3);
console.log(myobject.fname);
console.log(myobject.hobbies);

