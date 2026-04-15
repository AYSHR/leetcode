function exclusiveTime(n: number, logs: string[]): number[] {
    const result = Array(n).fill(0);
    const process = new Stack();
    let prev = 0;

    for ( let log of logs ) {
        const [ idStr, type , timeStr ] = log.split(':');
        const id = Number(idStr);
        const time = Number(timeStr);

        if ( type.includes('start') ) {
            const processOnTop = process.peek() as number;
            if ( processOnTop > -1 ) {
                result[processOnTop] += time - prev;
            }

            process.push(id);
            prev = time;
        } else {
           result[process.pop() as number] += time - prev + 1;
           prev = time + 1;
        }
    }
    return result;
};
