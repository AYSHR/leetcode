function findErrorNums(nums: number[]): number[] {
    const unique = new Set();
    let dup = 0;
    let len = nums.length;
    let sum = 0;

    for ( let num of nums ) {
        if ( unique.has(num) ) {
           dup = num;
        }

        unique.add(num);
        sum += num;
    } 

    const missing = len*(len+1)/2 - sum + dup;
    return [ dup, missing ];
};
