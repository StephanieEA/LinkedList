var enter = document.querySelector('.enter');
var title = document.querySelector('.title');
var url = document.querySelector('.url');

enter.addEventListener('click', function(event) {
  $('.right').append('<article class="card">'+
  '<h2>The Website Title</h2>'+
  '<h3>Website URL</h3>'+
  '<button class="read">Read</button>'+
  '<button class="delete">Delete</button>'+'</article>');
  document.querySelector('title').innerText = title;
  document.querySelector('url').innerText = url;
})

reset form and re-enter information

//
// document.querySelector('h3').innerText = function () {
//     return title;
// // $('.title').show();



// function Bookmark (title, url) {
//   this.title = title;
//   this.url = url;
//   // this.card = [];
// }
// //sets up construtor function
//
//
//
// Bookmark.prototype.create() = function() {

//   var card = document.createElement(newCard, [title, url])
//   card.addEventListener('click', function (){
//     // var card = document.createElement('.card');
//     h2.innerText = title;
//     h3.innerText = url;
// }
//
//
// //var titleInput = document.querySelector('.title')
//
// // var title = "title"
// // var address = "url"
// //above is to save input as string to be able to pass it in as argument.
//
// // enter.addEventListener('click', function(){
// //   document.createElement() {
// //     when enter button is clicked, card is created: title goes to title field, URL goes to URL field and appears on right side of screen.
// // })
