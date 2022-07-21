console.log('hello');
let element = document.createElement('li');

let text = document.createTextNode("I am a text node");
element.appendChild(text);

//Add a class name to the li element
element.className = "childul";
element.id = "createdLi";
element.setAttribute('title', 'mytitle');
// element.innerHTML = "<b>hello this is created by manish</b>";
 
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul); 
console.log(element);


// -------replacing element 

let elem2 = document.createElement("h3");
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
// let pr = elem2.getAttribute('id');
let pr = elem2.hasAttribute('id');
console.log(elem2, pr);