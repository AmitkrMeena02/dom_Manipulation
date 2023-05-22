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

// QuerySelector //
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
