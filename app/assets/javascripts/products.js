$(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

			$.getScript('/products?search=' + searchValue);

		$(window).scroll(function() {
		      var url = $('.pagination span.next').children().attr('href');
		      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
		        $('.pagination').text("Fetching more products...");
		        return $.getScript(url);
		      }
		   });
		});
  });
});


