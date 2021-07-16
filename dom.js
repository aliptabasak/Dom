// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);

// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px #000';
// var title=document.getElementsByClassName('title');
// console.log(title[0]);
// title[0].style.fontWeight='bold';
// title[0].style.color='green';

// var list=document.getElementsByClassName('list-group-item');
// list[1].style.backgroundColor='green';
// list[2].style.display='none';

// for(var i=0;i<list.length;i++){
//     list[i].style.fontWeight='bold';
// }

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

var itemList=document.querySelector('#items');
//parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);
//parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);
//childnodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';

// //firstchild
// console.log(itemList.firstChild);
// //firstelementchild
// itemList.firstElementChild.textContent='Hello 1';

//lastchild
// console.log(itemList.lastChild);
// //lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

//nextsibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);
//previoussibling
// console.log(itemList.previousSibling);
// //previouselementsibling
// console.log(itemList.previousElementSibling);

//createelement
//create div
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
//create text node
var newDivtext=document.createTextNode('HEllo');
//add text to div
newDiv.appendChild(newDivtext);
console.log(newDiv);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv,h1);

// var listGroup=document.querySelector('title .list-group-item');
// var item1=document.querySelector('title li');
// listGroup.insertBefore(newDiv,item1);
