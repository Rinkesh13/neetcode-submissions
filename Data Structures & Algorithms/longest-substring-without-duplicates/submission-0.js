class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mp = new Map();
        let ans = 0 , y = -1;
        for(let i = 0; i< s.length;i++){            
            y = Math.max(y,(mp.get(s[i]) ?? -1))
            mp.set(s[i],i)
            ans =  Math.max(ans, i - y); 
        }

        return ans;

    }
}
