/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
    let size = 0;
    let node = head;
    while (node) {
        size++;
        node = node.next;
    }
    let nth = size - n;
    if (nth < 0 || nth > size) {
        return head;
    }
    if (nth === 0 && nth === size - 1) {
        return head = null;
    }
    if (size === n) {
        return head = head.next;
    }

    let count = 0;
    let current = head;
    let previous = null;

    while (count < nth) {
        previous = current;
        current = current.next;
        count++;
    }

    if (previous) {
        previous.next = current.next;
    }

    return head;

};