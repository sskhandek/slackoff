// Client Code
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.footer.events({
    'keypress input': function(e) {
      var inputVal = $('.input-box_text').val();
      if(!!inputVal) {
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode == 13) {
          e.stopPropagation();
          Messages.insert({text: $('.input-box_text').val()});
          $('.input-box_text').val("");
          return false;
        }
      }
    }
  });
}

// Server Code
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
