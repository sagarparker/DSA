// Return the first duplicate element in an array
//[1,2,1,2,3,3] -  1
//[2,1,3,5,3,2] -  3
//[1,2,3,4,5,6] - -1

// 1. Create a object of the no of time an element appears in an array
// 2. Check the lastIndex of element that repeat

var testArray = [1,2,1,2,3,3,4]

function firstDuplicate(testAry){
    let ledger = {}
    let elementPostion = []
    for(let i = 0; i< testAry.length;i++){
        if(!ledger[testAry[i]]){
            ledger[testAry[i]] = 1
        }
        else{
            ledger[testAry[i]] = ledger[testAry[i]] + 1
        }
    }
    console.log(ledger);

    
    for(const property in ledger){
        // console.log(property,testAry.lastIndexOf(parseInt(property)));
        if(ledger[property]>1){
            elementPostion.push(property);
        }
    }    
    console.log(elementPostion)



}

firstDuplicate(testArray);