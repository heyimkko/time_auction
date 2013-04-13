$(document).ready(function() {
  $('#new_bid_form').on('ajax:success', function(event, data) {
    $('.bids tr:first-child').after(data);
    var hours = data.replace(/\D+/g, "");
    $('.you-highest').removeClass('hide');
    $('.highest-bid bid-time').text(hours);
    $('#flash').text("");
    $('.no-bids-yet').text("");
  });
  
  $('#new_bid_form').on('ajax:error', function(event, data) {
    $('#flash').text("");
    $('#flash').append(data.responseText);
  });

  $('#trigger').click(function(){
      $('#new_bid_form').fadeIn(200);
      $('#overlay').fadeIn(200);
  });
  
  $('#overlay').click(function(){
      $('#new_bid_form').fadeOut(200);
      $('#overlay').fadeOut(200);
  });

  $('.commit-to-bid').click(function(){
      $('#new_bid_form').fadeOut(200);
      $('#overlay').fadeOut(200);
  });
});
