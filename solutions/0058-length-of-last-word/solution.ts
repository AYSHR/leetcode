function lengthOfLastWord(s: string): number {
    let len = 0;
    s = s.trim();
    for ( let i = s.length - 1; i >= 0; i-- ) {
        if (s.charAt(i) == ' ' ) break;

        len++;
    }

    return len;  
};
