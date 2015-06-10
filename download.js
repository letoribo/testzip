if (Meteor.isClient) {
  
  Template.hello.helpers({
    down: function () {
      return Session.get('file');
    },
    image: function () {
      return  Session.get('image');
    }
  });

  Template.hello.events({
    'click #down': function () {
      Meteor.call('cloudinary', function(err, response) {
      	console.log(response); 
        Session.set('file', response);      
      });         
      convertImgToBase64('http://res.cloudinary.com/dhcie5spu/image/upload/v1433932577/9f47448519b85a2df170d9cb4edd9316_zp5nt2.jpg');        
    }
  });

  function convertImgToBase64(url, outputFormat){
	var img = new Image();
	img.crossOrigin = 'Anonymous';
	img.onload = function(){
	    var canvas = document.createElement('CANVAS');
	    var ctx = canvas.getContext('2d');
		canvas.height = this.height;
		canvas.width = this.width;
	  	ctx.drawImage(this,0,0);
	  	var dataURL = canvas.toDataURL(outputFormat || 'image/png');
	  	//console.log(dataURL);
	  	Session.set('image', dataURL); 
	  	canvas = null; 
	};
	img.src = url;
  }
 
}
