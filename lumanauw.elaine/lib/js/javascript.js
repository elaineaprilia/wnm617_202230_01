// sticky //

window.onscroll = function() {myFunction()};

var search-form = document.getElementById("search-form");
var sticky = search-form.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    search-form.classList.add("sticky")
  } else {
    search-form.classList.remove("sticky");
  }
}

//CLICKABLE ROW//

jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});