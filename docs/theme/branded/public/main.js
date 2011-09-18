
$(function(){
  $('#files a').click(function(){
    display($(this).attr('href'), '/' + $(this).text());
    return false;
  });
});

function display(path, name) {
  $.get(path, function(res){
    $('#content').html(res);
    if (name != 'home') window.location.hash = name;
    $('.view-source').click(function(){
      $(this).next('.source').toggle(200);
      return false;
    });
    $('.source').hide();
  });
}