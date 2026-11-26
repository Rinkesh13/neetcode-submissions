class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((pos,i)=>[pos,speed[i]]);
        pairs.sort((a,b)=>a[0]-b[0])
        let stack = []
        for(let [p,s] of pairs){
            stack.push((target-p)/s);
        }
        let ans = 0, top = 0
        while( stack.length > 0){
            if(top < stack[stack.length-1]){
                ans++
                top = stack[stack.length-1]
            }
            stack.pop()
        }
        

        return ans;
    }

    // 2, 4, 12, 7, 9
    // 1  1 12 7 3


    // 6 9 10 3
    // 3 4.5 1 1
}
