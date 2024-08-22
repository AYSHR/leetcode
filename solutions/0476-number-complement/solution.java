class Solution {
    public int findComplement(int num) {
        ArrayList<Integer> binary = new ArrayList<>();
        int result = 0;

        if ( num == 0 ) {
            return 0;
        }
        while ( num > 0) {
            binary.add(num % 2);
            num /=2;
        }

        for ( int i=0;i<binary.size();i++) {
            if ( binary.get(i)==0){
                result += (1 * Math.pow(2,i));
            }else{
                result += (0 * Math.pow(2,i));
            }
        }
        return result;
    }
}
