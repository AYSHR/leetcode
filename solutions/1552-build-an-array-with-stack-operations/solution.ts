function buildArray(target: number[], n: number): string[] {
    const result = [];
    let targetIdx = 0;

    for ( let i = 1; i <= n; i++ ) {
        if ( target.length == targetIdx ) return result;

        if ( target.includes(i) ) {
            targetIdx++;
            result.push('Push');
        } else {
            result.push('Push','Pop');
        }
    }

    return result;
};
