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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let curr = head;
        const arr = [];
        while (curr)
        {       
            arr.push(curr);
            curr = curr.next;
        }
        let left = 0;
        let right = arr.length-1;
        while(left<right)
        {
            arr[left].next = arr[right];
            left++;
            if(left === right) break;
            arr[right].next = arr[left];
            right--;
        }
        arr[right].next = null;
    }
}
