function trimTrailingVowels(s: string): string {
  const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
  let i = s.length - 1;

  while (i >= 0 && vowels.includes(s.charAt(i))) {
    i--;
  }

  return s.slice(0, i + 1);
};
