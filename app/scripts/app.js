$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
      event.preventDefault();
      var formData = $(form).serialize();

      //Submit the form using AJAX
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })

      .done(function(response) {
        // make sure that the formMessages div has the 'success' class.
        $('formMessages').removeClass('error');
        $('formMessages').addClass('success');

        //sent the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      })
      .fail function(data) {
        //make sure the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        //set the message text.
        if(data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops ! An error occured and your message could not be send');
        }
          console.log(formMessages);
      });
    });
});
