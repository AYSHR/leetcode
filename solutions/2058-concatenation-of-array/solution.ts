function getConcatenation(nums: number[]): number[] {
    const result = [];
    const len = nums.length

    for ( let i = 0; i < len; i++ ) {
        result[i] = nums[i];
        result[i+len] = nums[i];
    }

    return result;
};
