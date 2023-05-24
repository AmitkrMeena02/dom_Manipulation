/*
let headerTitle = document.getElementById(`header-title`);
let header = document.getElementById(`main-header`);
header.style.borderBottom = `solid 3px #000`;
let addTitle = document.querySelector(`.title`);
addTitle.style.fontWeight = `bold`;
addTitle.style.color = `green`;

let items = document.getElementsByClassName(`list-group-item`);
console.log(items);
change item background color
items[2].style.backgroundColor = `green`;

each item change into bold;
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = `bold`;
}

Get item by Tag Name
!--let li = document.getElementsByTagName(`li`);
console.log(li);

//Change item background color
li[2].style.backgroundColor = `green`;

//Each item change into bold;
for(let i=0; i<li.length; i++){
    li[i].style.fontWeight = `bold`;
}

 QuerySelector //
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
secondItem[1].style.color = `green`;

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

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement('button');
  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
} */

var filter = document.getElementById('filter');

// Filter event
filter.addEventListener('keyup', filterItems);

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
