// Client Code
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.footer.events({
    'keypress input': function(event) {
      if (event.charCode == 13) { // Enter key
        event.stopPropagation();
        $('.message-history')
            .append('<div class="message">' +
              '<a href="" class="message_profile-pic"></a>' +
              '<a href="" class="message_username">scotch</a>' +
              '<span class="message_timestamp">1:31 AM</span>' +
              '<span class="message_star"></span>' +
              '<span class="message_content">' +
              $('.input-box_text').val() +
              '</span></div>'
            );
        $('.input-box_text').val("");
        return false;
      }
    }
  });

  Template.messages.helpers({
    messages: [
      {text: "All these messages."},
      {text: "Sujay is ACM chair"},
      {text: "Meteor is cool"}
    ]
  });
}

// Server Code
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
