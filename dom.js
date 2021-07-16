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

var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var title=document.getElementsByClassName('title');
// console.log(title[0]);
title[0].style.fontWeight='bold';
title[0].style.color='green';
var list=document.getElementsByClassName('list-group-item');
list[2].style.backgroundColor='green';

for(var i=0;i<list.length;i++){
    list[i].style.fontWeight='bold';
}
