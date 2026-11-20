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
       
        let x= list1, y = list2;
        let head = new ListNode(), dummy = head
       
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

        return dummy.next
    }
}
