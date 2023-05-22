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

//Get item by Tag Name
let li = document.getElementsByTagName(`li`);
console.log(li);

//Change item background color
li[2].style.backgroundColor = `green`;

//Each item change into bold;
for(let i=0; i<li.length; i++){
    li[i].style.fontWeight = `bold`;
}