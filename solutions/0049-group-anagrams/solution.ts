function groupAnagrams(strs: string[]): string[][] {
    let result = new Map<string, string[]>();

    for ( let i = 0; i < strs.length; i++ ) {
        const current = strs[i].split('').sort().join('');
        let existingValues = [];

        if ( result.has(current) ) {
            existingValues = result.get(current);
        } 

        result.set(current, [...existingValues, strs[i]]);
    }

    return [...result.values()];
};
