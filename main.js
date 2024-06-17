// main.js
import LinkedList from './linkedList.js';

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null
console.log(list.size()); // Output: 3
console.log(list.head().value); // Output: 5
console.log(list.tail().value); // Output: 20
console.log(list.at(1).value); // Output: 10
list.pop();
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> null
console.log(list.contains(10)); // Output: true
console.log(list.find(10)); // Output: 1
list.insertAt(15, 1);
console.log(list.toString()); // Output: ( 5 ) -> ( 15 ) -> ( 10 ) -> null
list.removeAt(1);
console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> null
