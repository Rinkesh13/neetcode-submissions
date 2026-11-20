/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // if(list1 ^ list2){
        //     return list1 ?? list2
        // }
        if(!list1) return list2
        if(!list2) return list1
        if( !list1 && !list2){
            return null
        }
        let x= list1, y = list2;
        let head , temp
        if(list1.val > list2.val){
            head = y;
            y = y.next;
            temp = head
        } else{
            head = list1;
            x = x.next
            temp = head
        } ;
        while (x && y){
            if(x.val > y.val){
                head.next = y
                head = head.next 
                y = y.next
            }else{
                head.next = x
                head = head.next 
                x = x.next
            }
        }
        if(y){
            head.next = y
        }else if(x){
            head.next = x
        }

        return temp
    }
}
