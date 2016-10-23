var enter = document.querySelector('.enter');

enter.addEventListener('click', function(){
  var title = document.querySelector('.title');
  var url = document.querySelector('.url');
  var right = document.querySelector('.right')
  var newCard = document.createElement('article');
  var readButton = document.querySelector('.read')
  var deleteButton = document.querySelector('.delete')

  newCard.className = 'card';
  newCard.innerHTML = '<h2>Website Title</h2>'+
  '<h3>Website URL</h3>'+
  '<button class="read">Read</button>'+
  '<button class="delete">Delete</button>'+
  '</article>';
  newCard.querySelector('h2').innerText = title.value;
  newCard.querySelector('h3').innerText = url.value;

  right.appendChild(newCard);

  title.value=null;
  url.value=null;

  $('.read').on('click', function () {
  $(this).toggleClass('alreadyread');
  $(this).parent().toggleClass('darkercard')
  })

  $('.delete').on('click', function() {
  $(this).parent().remove();
  })
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
