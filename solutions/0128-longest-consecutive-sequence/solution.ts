function longestConsecutive(nums: number[]): number {
    if ( !nums.length ) return 0;

    let count = 1;
    let maxCount = 1;
    nums = nums.sort((a, b) => a - b);

    for ( let i = 1 ; i< nums.length; i++ ) {
        if ( nums[i] === nums[i-1] ) {
            continue;
        } else if ( nums[i] == nums[i-1] + 1 ) {
            count++;
        } else {
            maxCount = Math.max(count, maxCount);
            count = 1;
        }
    }

    return Math.max(count, maxCount);
};
