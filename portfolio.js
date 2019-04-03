if (screen.width <= 699) {
window.location = "https://codingoni.github.io/portfolioWebsite/";
}

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
      alert("Click my profile picture to learn more!");
  }
});
