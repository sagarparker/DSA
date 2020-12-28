var twoSum = function(nums,target){
    let ledger ={}
    for(let i = 0; i<nums.length; i++){
        if(!ledger[nums[i]]){
            ledger[nums[i]] = [i]
        }
        else{
            ledger[nums[i]].push(i)
        }
    }

    for(property in ledger){
        if(ledger[property].length>1){
            if(+property+ +property == target){
                return [ledger[property][0],ledger[property][1]]
            }
        }
        else if(ledger.hasOwnProperty(target-property)){
            return [ledger[property][0],ledger[target-property][0]]
        }
    }
}

console.log(twoSum([2,3,11,15,2],4))