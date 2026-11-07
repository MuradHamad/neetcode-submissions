class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const have = new Array(26).fill(0);
        const need = new Array(26).fill(0);
        for(let i = 0;i<s1.length;i++)
        {
            need[s1.charCodeAt(i) - 97]++;
        }
        const n = s1.length;
        for(let i =0;i<s2.length;i++)
        {
            have[s2.charCodeAt(i)-97]++;
            if(i>=n) have[s2.charCodeAt(i-n)-97]--;
            if(have.every((e,v) => e=== need[v])) return true;
        }
        return false;

    }
}
