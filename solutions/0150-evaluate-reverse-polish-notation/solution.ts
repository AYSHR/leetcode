function evalRPN(tokens: string[]): number {
    const result = new Stack();

    for( let i of tokens ) {
        if ( !isNaN(Number(i) ) ) {
            result.push(Number(i));
        } else {
            const b = result.pop()! as number;
            const a = result.pop()! as number;

            if ( i === '+' ) result.push(a+b);
            else if ( i === '-' ) result.push(a-b);
            else if ( i === '*' ) result.push(a*b);
            else result.push(Math.trunc(a/b));
        }
    }

    return (result.pop() as number);
};
