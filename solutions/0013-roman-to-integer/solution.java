class Solution {
    public int romanToInt(String s) {
        int result=0;
        for ( int i=s.length()-1; i>=0; i-- ) {
            char current = s.charAt(i);
            if (current=='I') {
                result+=1;
            } else if( current == 'V'){
                if (i!=0){
                    if(s.charAt(i-1)=='I') {
                    result+=4;
                    i--;
                    }else{
                        result+=5;
                    }
                }else{
                    result+=5;
                }
            } else if( current == 'X'){
                if(i!=0){
                    if(s.charAt(i-1)=='I') {
                    result+=9;
                    i--;
                    }else{
                        result+=10;
                    }
                }else{
                    result+=10;
                }
            } else if( current == 'L'){
                if(i!=0){
                    if(s.charAt(i-1)=='X') {
                    result+=40;
                    i--;
                    }else{
                        result+=50;
                    }
                }else{
                    result+=50;
                }
            } else if( current == 'C'){
                if(i!=0){
                    if(s.charAt(i-1)=='X') {
                    result+=90;
                    i--;
                    }else{
                        result+=100;
                    }
                }else{
                    result+=100;
                }
            } else if( current == 'D'){
                if ( i!=0 ){
                    if(s.charAt(i-1)=='C') {
                    result+=400;
                    i--;
                    }else{
                        result+=500;
                    }
                }else {
                    result+=500;
                }  
            } else {
                if ( i!=0 ){
                    if(s.charAt(i-1)=='C') {
                    result+=900;
                    i--;
                    }else{
                        result+=1000;
                    }
                }else {
                    result+=1000;
                }  
            }
        } 
        return result;
    }
}
