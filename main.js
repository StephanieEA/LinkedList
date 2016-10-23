var enter = document.querySelector('.enter');

enter.addEventListener('click', function(){
  var title = document.querySelector('.title');
  var url = document.querySelector('.url');
  var right = document.querySelector('.right')
  var newCard = document.createElement('article');

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
