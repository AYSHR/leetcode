function topKFrequent(nums: number[], k: number): number[] {
    const numCount = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        numCount.set(nums[i], (numCount.get(nums[i]) || 0) + 1);
    }

    return [...numCount.keys()]
        .sort((a, b) => numCount.get(b) - numCount.get(a))
        .slice(0, k);
};
