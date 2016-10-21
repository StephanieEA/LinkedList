var enter = document.querySelector('.enter');
//var readButton = document.querySelector('.read')
//var newCard = ...

enter.addEventListener('click', function(){
  var title = document.querySelector('.title');
  var url = document.querySelector('.url');
$('.right').append('<article class="card alreadyread">'+
'<h2>Website Title</h2>'+
'<h3>Website URL</h3>'+
'<button class="read">Read</button>'+
'<button class="delete">Delete</button>'+
'</article>');
$('h2').text(title.value);
$('h3').text(url.value);
//document.querySelector('h2').innerText = title.value;
//document.querySelector('h3').innerText = url.value;
title.value=null;
url.value=null;
})

// $('.read').on('click', function () {
//   $(this).
//   toggleClass('read')
// })


// readButton.addEventListener('click', function(){
//   readButton.toggleClass(.red)
//   newCard.toggleClass(.alreadyread)
//})


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
