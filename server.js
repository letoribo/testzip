Meteor.methods({
	'cloudinary': function () {
  //check(Id, String);
  this.unblock();
  try {
    var result = HTTP.call("GET", "http://res.cloudinary.com/dhcie5spu/image/upload/v1433932577/9f47448519b85a2df170d9cb4edd9316_zp5nt2.jpg");
    console.log(result);                     
    return result;
  } catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
    return false;
  }
}/*,
 'base64Encode':function(unencoded) {
      return new Buffer(unencoded || '').toString('base64');
    },*/
 /*'base64Decode': function(encoded) {
      return new Buffer(encoded || '', 'base64').toString('utf8');
    },*/
    /*'base64UrlEncode':function(unencoded) {
      var encoded = Meteor.call('base64Encode',unencoded);
      return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }*//*,
    'base64UrlDecode': function(encoded) {
      encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
      while (encoded.length % 4)
        encoded += '=';
      return Meteor.call('base64Decode',encoded);
    }*/
});