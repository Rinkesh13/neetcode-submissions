class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let ans = 0, sum = 0
        let prefixMp = new Map();
        prefixMp.set(0,1);
        for (let num of nums){
            sum += num
            ans += prefixMp.get(sum-k) || 0
            prefixMp.set(sum, (prefixMp.get(sum) || 0 )+1)
        }
        return ans;
    }
}
