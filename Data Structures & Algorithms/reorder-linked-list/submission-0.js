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
    while (curr&& curr.next&& curr.next.next)
    {   
        let prev =curr;
        while(prev.next.next)
        {
            prev = prev.next;
        }
        const last = prev.next;

        prev.next = null;
        last.next = curr.next;
        curr.next = last;
        curr = last.next;
    }
    return curr;
    }
}
