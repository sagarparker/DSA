// class FirstClass{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     };
//     giveDetails(){
//         console.log(`Hello ${this.name}, Age: ${this.age}`);
//     }
// }

// const firstClass = new FirstClass("Sagar",20)
// firstClass.giveDetails();


const ledger = {
        name:"Sagar",
        age:14,
        like:{
            'sagarparker':'2nd jan',
            'ajayparker':'3rd jan'
        }
}

delete ledger.like.ajayparker;


console.log(ledger);
console.log(ledger.like.hasOwnProperty('sagarparker'));
