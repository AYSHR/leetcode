function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    let prefix = 1;
    let suffix = 1;
    const answer = new Array(n).fill(1);

    for ( let i = 0 ; i < n; i++ ) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    for ( let i = n - 1; i >= 0; i-- ) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;   
};
