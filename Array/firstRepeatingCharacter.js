//Google interview question 

//Return the first repeating character in the array

// O(n) time,space solution

var firstRepatingCharacter = (inpArray) => {
    var ledger = {}
    var ledger2 = {}
    var minIndex = [];
    for(let i = 0 ;i<inpArray.length; i++){
        if(!ledger[inpArray[i]]){
            ledger[inpArray[i]] = 1
        } 
        else {
            ledger[inpArray[i]] = ledger[inpArray[i]] + 1
        }
    }

    for(let i = 0 ;i<inpArray.length; i++){
        if(ledger2[inpArray[i]] == undefined){
            ledger2[inpArray[i]] = i 
        }
    }
    
    for(const property in ledger){
        if(ledger[property] > 1){
            minIndex.push(ledger2[property]);
        }
    }

    console.log("\nRepeating value is : "+ inpArray[Math.min(...minIndex)]);
  
}

//  O(n) time,space solution

var firstRepatingCharacter2 = (inpArray) => {
    var map = {}

    for(let i = 0 ;i<inpArray.length; i++){
        if(map[inpArray[i]] !== undefined){
            return inpArray[i];
        }
        else{
            map[inpArray[i]] = i 
            
        }
    }

    return undefined;
    
  
}

firstRepatingCharacter([2,5,2,1,3,5,1,4])
console.log(firstRepatingCharacter2([2,5,2,1,3,5,1,4]))