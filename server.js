var R;
Meteor.methods({
	'cloudinary': function () {
  //check(Id, String);
  this.unblock();
  try {
    var result = HTTP.call("GET", "http://res.cloudinary.com/dhcie5spu/image/upload/v1433932577/9f47448519b85a2df170d9cb4edd9316_zp5nt2.jpg");
    R = result; console.log(R);
    //console.log(new JSZip());       not working              
    return result;
  } catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
    return false;
  }
}
});

