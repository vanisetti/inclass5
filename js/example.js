// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.appendChild(document.createTextNode('cream'));
 
document.querySelector('ul').appendChild(node);

// ADD NEW ITEM START OF LIST
var node2 = document.createElement('li');

node2.setAttribute('id', 'zero')

node2.appendChild(document.createTextNode('kale'));

document.querySelector('ul').insertBefore(node2, document.getElementById('one'));


// ADD A CLASS OF COOL TO ALL LIST ITEMS

var element = document.getElementsByTagName("li");
var i;
for (i = 0; i < element.length; i++) {
  element[i].className += "cool";
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var number = element.length;
/*
span = document.createElement("span");
span.append(number);
h2.appendChild(span);
*/ // was trying to figure out how to add the css for h2 span
document.querySelector('h2').append(' ');
document.querySelector('h2').append(number);

