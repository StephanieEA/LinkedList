function Bookmark (title, url){
    this.title = title;
    this.url = url;

Bookmark.prototype.create() = function () {
  var title = document.querySelector("[name='title']");
  var url = document.querySelector("[name='url']");
  var enter = document.querySelector("[name='enter']");

  enter.addEventListener('click', function () {
    document.createElement("[name='card']");
    h2.innerText()=title;
    h3.innerText()=url;

    })
  }
}
