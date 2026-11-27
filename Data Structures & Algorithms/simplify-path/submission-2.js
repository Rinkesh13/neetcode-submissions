class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let stack = []
        let i = 0, j = 0 ;
        while ( i < path.length){
            j = i;
            if(path[i] === '/'){
                i++; continue;
            }
            while( j<path.length && path[j] !== '/'){
                j++
            }
            let subStr = path.substring(i,j)
            if(subStr === '..'){
                stack.pop()
            }
            else{
                if(subStr !== '.')
                stack.push(subStr)
            }
            i = j
        }
        if(stack.length === 0) return '/'
        let ans = ''
        for(let word of stack){
            ans += '/' + word
        }
        return ans;
    }
}
