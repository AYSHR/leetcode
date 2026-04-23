function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let max = 0;

    for (let i = 0; i <= heights.length; i++) {
        const currHeight = i === heights.length ? 0 : heights[i];

        while (stack.length && heights[stack[stack.length - 1]] > currHeight) {
            const height = heights[stack.pop()!];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }

        stack.push(i);
    }

    return max;
}
