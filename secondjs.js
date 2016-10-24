// A Website title and URL can be typed into two fields. When the enter button is clicked, it creates a new card on the right side. The two fields on the left are cleared so new information can be entered.
// On the card, the read button can be clicked to show the website has been accessed. The card also changes colors. The website is clickable. The delete button deletes the card.
var enter = document.querySelector('.enter');
var readButton = document.querySelector('.read');
var deleteButton = document.querySelector('.delete');
var bookmarkSection = document.querySelector('.right');
var bookmarks = [];
var id = 0;

// bookmarks --> an array of html fragments, these have an id (which is the index of the array)
// render() --> will take all html fragemnets and put them on th page
//
// listen for clicks on enter
//   create html fragments with u/t
//   push that fragment to array
//
// render
//   empty the `.right` section
//   render fragments on oage
//
// read
//   bubble
//   change relevenat franemtn
//     -> render()
//
// delet
//   bubble
//   change rel fragment
//     -> render()

enter.addEventListener('click', function(){
  var title = document.querySelector('.title').value;
  var url = document.querySelector('.url').value;

  // make this a global varibale that starts at 0
  // var id = 0
  dataId = id++

  var fragment = '<article data-id="' + id + '" class="card darkercard">' +
                  '<h2>' + title + '</h2>'+
                  '<h3><a href="' + url + '">' + url + '</a></h3>'+
                  '<button class="read alreadyread">Read</button>'+
                  '<button class="delete">Delete</button>'+
                '</article>';

  bookmarks.push(fragment);
  render();
});

function render() {
  $(bookmarkSection).empty();
  $(bookmarkSection).append(bookmarks);
}

bookmarkSection.addEventListener('click', function(event) {
  var id = $(event.target).closest('.card').data('id');

  var filteredBookmarks = bookmarks.filter(function (fragment) {
    return $(fragment).data('id') == id;
  });

  console.log(filteredBookmarks);

  bookmarks = filteredBookmarks;
  render();
});
// enter.addEventListener('click', function() {
//   var title = document.querySelector('.title').value;
//   var url = document.querySelector('.url').value;
//
//   // adding blob of html to page
//   $('.right').append('<article class="card darkercard">'+
//   '<h2>The Website Title</h2>'+
//   '<h3>Website URL</h3>'+
//   '<button class="read alreadyread">Read</button>'+
//   '<button class="delete">Delete</button>'+'</article>');
//
//   $('h2').text(title);
//   // create a func that returns a valid a tag <---- check for https://
//   $('h3').html("<a href='" + url + "'>" + url + "</a>");
//
//   // clearing fields
//   title.value = null;
//   url.value = null;
//
//
//   $('.card').on('click', function(e) {
//     debugger;
//   })

  // assigning listener to `.read` button
  // $('.read').on('click', function() {
  //   $('.read').toggleClass('alreadyread');
  //   $('.card').toggleClass('darkercard');
    // $('.card').css('background-color', '#F2F4F4');
    // $('.read').css('color', "#F05A28");
  // });

  // assigning listener to .delet button
  // $('.delete').on('click', function() {
    // $('.card').remove();
  // })
// })
