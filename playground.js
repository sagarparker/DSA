class FirstClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    giveDetails(){
        console.log(`Hello ${this.name}, Age: ${this.age}`);
    }
}

const firstClass = new FirstClass("Sagar",20)
firstClass.giveDetails();
