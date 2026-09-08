class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        if(tokens.length ===1)return tokens[0]
        let result;
        for(let i of tokens){
            result = 0;
            if(i==='+'||i==='-'||i==='*'||i==='/'){
                const op1 = parseInt(stack.pop());
                const op2 = parseInt(stack.pop());
                if(i ==='+')result =  op1 + op2
                if(i ==='-')result = (op2 - op1)
                if(i ==='*')result = (op1 * op2)
                if(i ==='/')result = Math.trunc(op2 / op1)
                stack.push(result);
            }
            else{
                stack.push(i);
            }
        }
        return result;
    }
}
