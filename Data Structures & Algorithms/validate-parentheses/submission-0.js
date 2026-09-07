class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
            const stack = [];
    let result = true;
    for (let i of s){
        if(i ==='['||i ==='{'||i ==='(')
            stack.push(i);
        if(i ===')'){
            let item = stack.pop();
            if(!(item ==='('))
                result = false;

        }
        if(i ==='}'){
            let item = stack.pop();
            if(!(item ==='{'))
                result = false;

        }
        if(i ===']'){
            let item = stack.pop();
            if(!(item ==='['))
                result = false;

        }
    }
    if(stack.length>0)result = false;
    return result;
    }
}
