$('.img-responsive').click(function() {
    var image = $(this).attr('src');
    $('#lightbox').attr('src', image);
    $('#lightbox').modal('show');
  });