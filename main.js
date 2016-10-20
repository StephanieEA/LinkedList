var enter = document.querySelector('.enter')
var title = document.querySelector('.title')
var url = document.querySelector('.url')

enter.addEventListener('click', function(){
$('.right').append('<article class="card">'+
'<h2>Website Title</h2>'+
'<h3>Website URL</h3>'+
'<button class="read">Read</button>'+
'<button class="delete">Delete</button>'+
'</article>')
document.querySelector('h2').innerText = title;
document.querySelector('h3').innerText = url;

})


//function Bookmark (card) {
//     this.title = title;
//     this.url = url;
//   }
//
// Bookmark.prototype.create() = function () {
//   var title = document.querySelector(".title");
//   var url = document.querySelector(".url");
//   var enter = document.querySelector(".enter");
//   var right = document.querySelector(".right");
//
//   enter.addEventListener('click', function () {
//     h2.innerText = title.value;
//     h3.innerText = url.value;
//     })
//   }
//
// function Card (title, url) {
//     this.title = title;
//     this.url = url;
// }
