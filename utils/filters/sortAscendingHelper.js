/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let map = {};
    let length = 1;
    let currentNode = head;
    
    while(currentNode.next != null) {
        map[length] = currentNode;
        currentNode = currentNode.next;
        currentNode.prev = map[length];
        length++;
    }
    
    let deletionPosition = length - n + 1;
    if(deletionPosition === 1) {
       head = head.next;
       return head
    } else if(deletionPosition === length) {
        map[length - 1].next = null;
        return head;
    } else {
        map[length - n + 1].prev.next = map[length - n + 1].next;
        //console.log(head);
        return head;
    }
};
