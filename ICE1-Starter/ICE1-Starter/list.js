// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0];// Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newLastItem = document.createElement('li');// Create element
let newTextLast = document.createTextNode('half and half cream');// Create text node
newLastItem.appendChild(newTextLast);// Add text node to element
list.appendChild(newLastItem);// Add element end of list

// ADD NEW ITEM START OF LIST
let newFirstItem = document.createElement('li');// Create element
let newFirstText = document.createTextNode('lettuce');// Create text node
newFirstItem.appendChild(newFirstText);//add text node to element
list.insertBefore(newFirstItem, list.firstChild);//add element to list


let listItems = document.querySelectorAll('li');
//let listItems2 = document.getElementsByTagName('li');// All <li> elements

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let i;// Counter variable
console.log("abc");
for (i = 0; i < listItems; i++) {// Loop through elements
    listItems[i].className = 'cool';// Change class to cool

}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let heading = document.querySelector('h2');// h2 element
let headingText = heading.firstChild.nodeValue;// h2 text
let totalElements = listItems.length;// No. of <li> elements
let newHeading = headingText + '<span>' + totalElements + '<span>';// Content
heading.innerHTML = newHeading;// Update h2 using innerHTML (not textContent) because it contains markup


