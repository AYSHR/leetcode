function dailyTemperatures(temperatures: number[]): number[] {
    const len = temperatures.length;
    const res = Array(len).fill(0);
    const temp = new Stack<number>();

    for ( let i = 0; i < len; i++ ) {
        while ( temp.size() && temperatures[i] > temperatures[temp.peek()] ) {
            const prevIdx = temp.pop();
            res[prevIdx] = i - prevIdx;
        }
        temp.push(i);
    }

    return res;
};
