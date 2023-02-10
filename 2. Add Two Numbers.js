/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let str1 = ''
    while (l1) {
        str1 = str1 + l1.val;
        l1 = l1.next;
    }

    let str2 = ''
    while (l2) {
        str2 = str2 + l2.val;
        l2 = l2.next;
    }

   let num1 = (Number(str1.split("").reverse().join("")) + Number(str2.split("").reverse().join(""))).toString().split("").reverse();

    let l3 = new ListNode(Number(num1[0]));
    let final = l3;
    for(i=1;i<num1.length;i++){
        final.next = new ListNode(Number(num1[i]))
        final = final.next;
    }

    return l3;
};