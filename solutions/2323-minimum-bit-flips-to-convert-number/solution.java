class Solution {
    public int minBitFlips(int start, int goal) {
        String s = Integer.toBinaryString(start);
        String g = Integer.toBinaryString(goal);    
        int diff = 0, result = 0, i=s.length()-1, j=g.length()-1;
        diff = s.length() > g.length() ? s.length() - g.length()  : g.length() - s.length();
        String maxStr = s.length() > g.length() ? s : g;
        int count = diff;

        while ( i >= 0 && j>=0 ){
            if (s.charAt(i) != g.charAt(j)) {
                result++;
            }
            i--; 
            j--;
        }

        for (int k=0;k<diff;k++) {
            if ( maxStr.charAt(k) == '0') {
                    count--;
            }
        }

        return (result+count);
    }
}
