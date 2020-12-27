// Amazon Interview question

// Return the first ( non repeating / unique ) character for the given string 


// The below solution has a time complexity of O(n) - Solved 25/12/2020

const testString = "abcabc"

function firstUniqueCharacter(testStrg){
  let ledger = {}
  for(let i=0;i<testStrg.length;i++){
    if(!ledger[testStrg[i]]){
      ledger[testStrg[i]] = 1
    }
    else if(ledger[testStrg[i]]){
      const item = testStrg[i];
      ledger[item]= ledger[item] + 1
    }
  }

  const hasValue = Object.values(ledger).includes(1);
  if(!hasValue){
    return "_"
  }
  else if(hasValue){
    for(const property in ledger){
        if(ledger[property] == 1 ){
          return property
        }
    }
  }
  
}

console.log(firstUniqueCharacter(testString));