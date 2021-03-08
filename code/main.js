var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("logo").style.width = "100px"; document.getElementById("logo").style.marginTop = "60px";
     document.getElementById("header").style.height = "250px"; document.getElementById("logo").style.marginBottom = "0px";
    document.getElementById("p").style.color= "transparent";
   
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
    $('body').css('display','none');
    $('body').fadeIn(500);
});


