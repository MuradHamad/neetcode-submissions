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
        // let curr = head;
        // const arr = [];
        // while (curr)
        // {       
        //     arr.push(curr);
        //     curr = curr.next;
        // }
        // let left = 0;
        // let right = arr.length-1;
        // while(left<right)
        // {
        //     arr[left].next = arr[right];
        //     left++;
        //     if(left === right) break;
        //     arr[right].next = arr[left];
        //     right--;
        // }
        // arr[right].next = null;


            let slow = head;
    let fast = head;

    while (fast.next && fast.next.next)
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    let second = slow.next;
    slow.next = null;

    let prev = null;
    let curr = second;
    while(curr)
    {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    let first = head;
    second = prev 
    while(second)
    {
        const firstNext = first.next
        const secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
    }
}
