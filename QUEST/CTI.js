//Scroll Bar Progress//
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('myprogress').style.width = scrolled + "%";
}


function textDisplay() {
    const textarea = document.getElementById('txtarea').value;
    document.getElementById('output').innerHTML = textarea;
}
