class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let pointer1 = 0;
        let set = new Set();
        let max = 0;
        for (let i = 0;i<s.length;i++)
        {
            while(set.has(s[i]))
            {
                set.delete(s[pointer1])
                pointer1++;
            }
            set.add(s[i]);
            max = Math.max(max,i-pointer1+1)
        }
        return max;
    }
}
