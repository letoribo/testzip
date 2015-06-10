if (Meteor.isClient) {
  
  Template.hello.helpers({
    down: function () {
      return Session.get('file');
    }
  });

  Template.hello.events({
    'click #down': function () {
     // Meteor.call('cloudinary', '9f47448519b85a2df170d9cb4edd9316_zp5nt2.jpg',function(err, response) {
      Meteor.call('cloudinary', function(err, response) {
        Session.set('file', response);
      });
      
    }
  });
}
