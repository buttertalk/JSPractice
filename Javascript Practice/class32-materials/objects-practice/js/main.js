// Come up with with a parent class (includes name and role); set a getter that returns the underscore name to prevent changes to the name, add a method that introduces the Contractor.
// Extend that parent class into two children by using super (allows the new class to inherit properties from parent class)
// Use Encapsulation (methods and properties in one location so it is easy to find or change, also doesn't break other parts like backend class), Abstraction (can make changes to front end without changing backend, giving a dev access to the properties, but can make it private so they can't change it), Inheritance (using extends or super to pass in properties), and Polymorphism *(array of contractors)
class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hi, my name is ${this._name} and I am on the ${this._role} team at #100Devs.`)
    }
}
class Front extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hey, I am ${this._name} and I work on the Front-end.`)
    }
}

class Back extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am ${this._name} and I work on the Back-end.`)
    }
}
let devin = new Contractor('Devin', 'Front-end', 'React');
let dustin = new Contractor('Dustin', 'Back-end', 'Node');

//polymorphism
let agencyList = [devin, dustin]
//for loop runs through the array consolelogging the sayHello (polymorhpism - code that works for all of the objects)
for(person of agencyList){
    person.sayHello()
}

// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }
