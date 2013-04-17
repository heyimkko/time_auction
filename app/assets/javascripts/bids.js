$(document).ready(function() {
    $('#new_bid_form').on('submit', function(event){
    if ($("input#bid_time").val() >= 100 ) {
      if( !confirm('Are you sure you want to submit this bid?') ) {
        $('input#bid_time').val("")
        return false;
     }
   }
  });

  $('#new_bid_form').on('ajax:success', function(event, data) {
    $('#overlay').fadeIn(50);

    var hours = data.match(/>\d+</)[0].replace(/</,"").replace(/>/,"")
    if (hours >= 100) {
      $('#bid_success_popup .errors').text('PLEASE NOTE: Due to the generous ' +
       'size of this bid, it must first be approved by an admin.');
    }
    $('#bid_success_popup').fadeIn(50);
    $('.bids tr:first-child').after(data);
    $('.you-highest').removeClass('hide');
    $('#hours').text(hours);
    $('#flash').text("");
    $('#flash').removeClass("alert alert-errors");
    $('.no-bids-yet').text("Highest Bid");
  });
  
  $('#new_bid_form').on('ajax:error', function(event, data) {
    $('#flash').text("");
    $('#flash').addClass("alert alert-errors");
    $('#flash').append(data.responseText);
  });

  $('#trigger').click(function(){
      $('#new_bid_form').fadeIn(50);
      $('#overlay').fadeIn(50);
  });
  
  $('#overlay').click(function(){
      $('#new_bid_form, #bid_success_popup').fadeOut(50);
      $('#overlay').fadeOut(50);
  });

  $('.commit-to-bid').click(function(){
      $('#new_bid_form').fadeOut(50);
      $('#overlay').fadeOut(50);
  });

  $('#success_popup_close').click(function(){
    $('#bid_success_popup').fadeOut(50);
    $('#overlay').fadeOut(50);
  });
  
  $('#bid_charity_id').tooltip({
    'placement': "top"
  })

  

  $('#bid_charity_id').click(function() {
    $.ajax({
      url: '/charities',
      method: 'get',
      dataType: 'json'
    })
    .done(function(data) {
      var charities = []
      for (i = 0; i < data.length; i++ ) {
        charities.push(data[i].name);
      }
      $("#bid_charity_id").autocomplete({
        source: charities
      });
    })
  });
});
