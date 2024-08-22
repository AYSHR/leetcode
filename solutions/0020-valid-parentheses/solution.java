class Solution {
    public boolean isValid(String s) {
        Stack<Character> braces = new Stack<>();
        if (s.charAt(0) == ')' || s.charAt(0)=='}' || s.charAt(0)==']'){
            return false;
        }

        for (int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if ( c == '(' || c == '{' || c == '['){
                braces.push(c);
            }else{
                if (braces.isEmpty()){
                    return false;
                }
                if ( c == ')' && braces.peek() == '(' ){
                    braces.pop();
                }else if ( c == '}' && braces.peek() == '{' ){
                    braces.pop();
                }else if ( c == ']' && braces.peek() == '[' ){
                    braces.pop();
                }else {
                    return false;
                }    
            }
        }  
        return braces.isEmpty();
    }
}
