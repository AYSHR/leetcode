class Solution {
    public int getLucky(String s, int k) {
        String result="";
        Integer num = 0;
        for ( int i=0;i<s.length();i++){
            result+=(s.charAt(i) - 96); 
        }
        while(k>0){
            for(int i=0;i<result.length();i++){
                num += (int)(result.charAt(i) - '0');
            }
            result = String.valueOf(num);
            k--;
            if ( k > 0){
                num = 0;
            }
        }
        return num;
    }
}
