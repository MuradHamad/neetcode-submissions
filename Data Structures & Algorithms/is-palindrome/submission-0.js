class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toUpperCase();
        console.log(s)
        let pointer1 = 0;
        let pointer2 = s.length-1;
        while (pointer1<= pointer2){
        if(!(
            (s[pointer1].charCodeAt(0)>=65&&s[pointer1].charCodeAt(0)<=90)
          ||(s[pointer1].charCodeAt(0)>=48&&s[pointer1].charCodeAt(0)<=57)
        )
        ){
            pointer1++;
            continue;
        }
        if(!(
            (s[pointer2].charCodeAt(0)>=65 && s[pointer2].charCodeAt(0)<=90)
          ||(s[pointer2].charCodeAt(0)>=48 && s[pointer2].charCodeAt(0)<=57)
        )
        ){
            pointer2--;
            continue;
        }
        if(s[pointer1] !== s[pointer2])
            return false;
        pointer1++;
        pointer2--;
    }
    return true;

    }
}
