class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let pointer1 =0;
    let pointer2 = 0;
    const map = new Map();
    let max = 0;

    while(pointer2 < s.length)
    {
        map.set(s[pointer2], (map.get(s[pointer2])??0) + 1);
        let mostFreqItem=0;

        for(let [key, value] of map)
        {
            if(value> mostFreqItem)
            {
                mostFreqItem = value;
            }
        }

        let windowSize = pointer2 - pointer1 + 1;

        if(windowSize - mostFreqItem > k)
        {
            map.set(s[pointer1], map.get(s[pointer1]) - 1);
            pointer1++;
        }
        max = Math.max(max, pointer2 - pointer1 + 1);
        pointer2++;
    }

    return max;
    }
}
