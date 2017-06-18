//Check off todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//remove todos when x is clicked
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add new todos
$("input[type='text']").on('keypress', function(event) {
  if(event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $('ul').append(`<li><span><i class="fa fa-trash" aria-hidden="true"></i>
    </span> ${todoText}</li>`);
  };
});

//fade input
$('.fa-plus').on('click', function() {
  $('input[type="text"]').fadeToggle();
});