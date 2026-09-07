class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        
    const newT = t.split('').sort().join('');
    const newS = s.split('').sort().join('');
    if(newT === newS) return true;
    return false;

    }
}
