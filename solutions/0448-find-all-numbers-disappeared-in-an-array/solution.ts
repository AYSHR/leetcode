function findDisappearedNumbers(nums: number[]): number[] {
    const missing = [];
    const values = new Set(nums);

    for ( let i = 1; i <= nums.length; i++ ) {
       if ( !values.has(i) ) {
        missing.push(i)
       }
    }

    return missing;
};
