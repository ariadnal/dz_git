function simple_tooltip(target_items, name){
  $(target_items).each(function(i){
  $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
  var my_tooltip = $("#"+name+i);
  var levo=$(target_items).offset().left;
  var verh=$(target_items).offset().top;
  $(this).removeAttr("title").mouseover(function(){
  my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
  }).mousemove(function(kmouse){
  my_tooltip.css({left:levo+160, top:verh-8});
  }).mouseout(function(){
  my_tooltip.fadeOut(400);
  });
  });
}
(function($) {

$(function() {
//  simple_tooltip("a","fn");
  simple_tooltip("input#firstname","fn");
  simple_tooltip("input#lastname","ln");
  simple_tooltip("input#address","ad");
$("button")
 .click(function() {
    var name;
    var target_items;
    var levo;
    var verh;
    name="fn";
    target_items="input#firstname";
    levo=$(target_items).offset().left;
    verh=$(target_items).offset().top;
    $("."+name).css({opacity:0.8, display:"none", left:levo+160, top:verh-8}).fadeIn(400);

    name="ln";
    target_items="input#lastname";
    levo=$(target_items).offset().left;
    verh=$(target_items).offset().top;
    $("."+name).css({opacity:0.8, display:"none", left:levo+160, top:verh-8}).fadeIn(400);

    name="ad";
    target_items="input#address";
    levo=$(target_items).offset().left;
    verh=$(target_items).offset().top;
    $("."+name).css({opacity:0.8, display:"none", left:levo+160, top:verh-8}).fadeIn(400);

  });
});
})(jQuery);
