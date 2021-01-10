// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.


// O(n^3) solution 

var maxSubArray = function(nums) {
    let maxSum = 0;

    for(var i = 0; i < nums.length; i++){
        for(var j=0; j< nums.length; j++){
            var tempSum = 0;
            for(var k=i; k<=j; k++){
                tempSum = tempSum + nums[k];
            }
            if(tempSum > maxSum){
                maxSum = tempSum
            }
        }
    }

    console.log("Max sum: "+maxSum);
    
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
