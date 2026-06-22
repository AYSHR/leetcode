function containsDuplicate(nums: number[]): boolean {
    const uniqueNumber = new Set<number>();

    for ( let i = 0; i< nums.length; i++ ) {
        if ( uniqueNumber.has(nums[i]) ) return true;
        
         uniqueNumber.add(nums[i]);
    }
    return false;
};
