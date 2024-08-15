class Solution {
    public boolean lemonadeChange(int[] bills) {
        if (bills[0] == 10 || bills[0] == 20 ) {
            return false;
        }

        int five=0,ten=0;
        for(int bill: bills){
            if (bill == 5){
                five++;
            } else if (bill == 10 ){
                if(five==0){
                    return false;
                } else {
                    five--;
                    ten++;
                }
            } else {
               if (five>0 && ten>0){
                    ten--;
                    five--;
               }else if ( five >= 3){
                    five-=3;
               }else {
                    return false;
               }
            }
        } 
        return true;
    }
}
