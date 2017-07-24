

var menuContainer = '<div class="menu"></div>';
var menu = "<ul><li><a>About</a></li><li><a>Portfolio</a></li><li><a>Contact</a></li></ul>";

$("body").append(menuContainer);
$(".menu").append(menu);

$(".navtrigger").click(function() {
  if (! $(".navtoggle").hasClass("rotated")) {
    $("a.navtoggle").toggleClass("rotated");
    $(".menu").show();
    $(".menu").toggleClass("opac");
  } else if ($(".navtoggle").hasClass("rotated")) {
    $(".navtoggle").toggleClass("rotated");
    $(".menu").toggleClass("opac").delay(4800);
    $(".menu").fadeOut(200, function(){
      $(".menu").hide();
    });
    //$(".menu").toggleClass("opac").delay(300).hide();
  }
});
