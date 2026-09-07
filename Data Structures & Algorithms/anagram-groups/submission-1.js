class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        let c= 0;
        for(let [i,element] of strs.entries()){
            const sorted = element.split('').sort().join('');
            if(!map.has(sorted)){
                map.set(sorted,c);
                c++;
            }
        }
        const result =[];
        for(let i = 0;i<map.size;i++){
        result.push([])
        }
        for (let str of strs){
            let newstr = str.split('').sort().join('');
            result[map.get(newstr)].push(str);
        }
        return result;
    }
}
