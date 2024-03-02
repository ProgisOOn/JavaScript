"use strict";

let linked_list = {
    value:5
};
linked_list.next = {value: 13};
linked_list.next.next  = {value: 16, next: null};

alert(linked_list.next.value);
alert(linked_list.next.next.next);

linked_list.next = linked_list.next.next; // cut midle element

alert(linked_list.next.value);

// Linked list helps us to create a heavy sequance of objects with their properties
// there's no need for programm language to consider place in memory 
// it allocates any free place and just create link for it 
// thus list_member is connected to rest of its list 



    