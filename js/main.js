

// Down arrows expand content
$('.moreless-button').click(function (e) {
    e.preventDefault();
    $(this).siblings(".moretext").slideToggle();
  
  });
