function majorityElement(nums: number[]): number {
    if ( nums.length === 1 ) return nums[0];
    
    const frequency = new Map<number, number>();
    const majorityCount = Math.ceil(nums.length/2);

    for ( let i = 0; i < nums.length; i++ ) {
        if ( frequency.has(nums[i])) {
            const newCount = frequency.get(nums[i]) + 1;

            if ( newCount >= majorityCount ) {
                return nums[i];
            }
            frequency.set(nums[i], newCount);
        } else {
            frequency.set(nums[i], 1);
        }
    }

    return 0;
};
