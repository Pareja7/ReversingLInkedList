const linkedList = require('./Node')

function reverseList(head){
  let prev = null;
  let next = null;

  while(head != null){
    head.next = prev;
    prev = head;
    head = next;
  }
return next;



console.log(reverseList(linkedList))

