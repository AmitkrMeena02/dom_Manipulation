//let headerTitle = document.getElementById(`header-title`);
//let header = document.getElementById(`main-header`);
//header.style.borderBottom = `solid 3px #000`;
//let addTitle = document.querySelector(`.title`);
//addTitle.style.fontWeight = `bold`;
//addTitle.style.color = `green`;

//let items = document.getElementsByClassName(`list-group-item`);
//console.log(items);
//change item background color
//items[2].style.backgroundColor = `green`;

//each item change into bold;
//for(let i=0; i<items.length; i++){
//    items[i].style.fontWeight = `bold`;
//}

/*Get item by Tag Name
!--let li = document.getElementsByTagName(`li`);
console.log(li);

//Change item background color
li[2].style.backgroundColor = `green`;

//Each item change into bold;
for(let i=0; i<li.length; i++){
    li[i].style.fontWeight = `bold`;
} */

/* QuerySelector //
let secItem = document.querySelector(`.list-group-item:nth-child(2)`);
secItem.style.backgroundColor = `green`;

let thirdItem = document.querySelector(`.list-group-item:nth-child(3)`);
thirdItem.style.display = `none`;

// QuerySelectorAll //
let odd =  document.querySelectorAll(`li:nth-child(odd)`);
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = `green`;
}

let secondItem = document.querySelectorAll(`.list-group-item`);
secondItem[1].style.color = `green`;*/

// Keywords used to manipulate the DOM //
let itemList = document.querySelector(`#items`);

//parentElement
console.log(itemList.parentElement); 

// firstChild
console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);

// lastChild 
console.log(itemList.lastChild);

// lastlementChild 
console.log(itemList.lastElementChild); 

// nextsibling 
console.log(itemList.nextSibling);

// nextElementsibling 
console.log(itemList.nextElementSibling);

// previoussibling 
console.log(itemList.previousSibling);

// previousElementsibling 
console.log(itemList.previousElementSibling);

// create an Element before Item Lister 
let newDiv = document.createElement('div');

newDiv.className = 'hello'; // Create class
newDiv.id = 'Hello1'; // Create id
newDiv.setAttribute('title', 'Hello Div'); // Add attribute

let newDivtext = document.createTextNode('HEllo'); // Create text node
newDiv.appendChild(newDivText); // Add text to div

let newDivText = document.createTextNode('HEllo');
headerTitle.parentNode.insertBefore(newDiv, headerTitle);

// create an Element before Item 1
let newul = document.createElement('div');

newul.className = 'hello0'; // Create class
newul.id = 'Hello01'; // Create id
newul.setAttribute('title', 'Hello Div'); // Add attribute

let newultext = document.createTextNode('HEllo'); // Create text node
newul.appendChild(newultext); // Add text to div

let itemTitle = document.querySelector(`#items .list-group-item:first-child`);
itemTitle.parentNode.insertBefore(newul, itemTitle);


