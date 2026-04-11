function findMaxConsecutiveOnes(nums: number[]): number {
    let curr = 0;
    let max = 0;

    for( let i =0; i< nums.length; i++ ){
       curr = ( nums[i] === 1 ) ? curr + 1 : 0;
       max = Math.max(max, curr);
    }

    return max;
};
