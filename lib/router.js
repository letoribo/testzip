Router.map(function() {
	
  this.route('/', {
    where: 'client',
    path: '/'
  });
	
  this.route('zip1', {
    where: 'server',
    path: 'zip1',
    action: function() {
      var self = this;
       
      // Create zip
      var zip = new JSZip();
      console.log(zip);
      // Add a file to the zip
      zip.file('textfile1.txt', 'Hello World');

      // Generate zip stream
      var output = zip.generate({
        type:        "nodebuffer",
        compression: "DEFLATE"
      });
      console.log(output);
      // Set headers
      self.response.setHeader("Content-Type", "application/octet-stream");
      self.response.setHeader("Content-disposition", "attachment; filename=first.zip");
      self.response.writeHead(200);

      // Send content
      self.response.end(output);
    }
  });
  
    this.route('zip2', {
    where: 'server',
    path: 'zip2',
    action: function() {
      var self = this;

      // Create zip
      var zip = new JSZip();

      // Add a file to the zip
      zip.file('textfile2.txt', 'Hello Zip');

      // Generate zip stream
      var output = zip.generate({
        type:        "nodebuffer",
        compression: "DEFLATE"
      });

      // Set headers
      self.response.setHeader("Content-Type", "application/octet-stream");
      self.response.setHeader("Content-disposition", "attachment; filename=second.zip");
      self.response.writeHead(200);

      // Send content
      self.response.end(output);
    }
  });
  
  this.route('zip3', {
    where: 'server',
    path: 'zip3',
    action: function() {
     
      /*function downloadAllImages(imgLinks){
 var zip = new JSZip();
 var deferreds = [];
 for(var i=0; i<imgLinks.length; i++)
 {
  deferreds.push( addToZip(zip, imgLinks[i], i) );
 }
 $.when.apply(window, deferreds).done(generateZip);
}
function generateZip(zip)
{
 var content = zip.generate({type:"blob"});
 // see FileSaver.js
 saveAs(content, "downloadImages.zip");
}

function addToZip(zip, imgLink, i) {
  var deferred = $.Deferred();
  JSZipUtils.getBinaryContent(imgLink, function (err, data) {
    if(err) {
      alert("Problem happened when download img: " + imgLink);
      console.log("Problem happened when download img: " + imgLink);
      deferred.resolve(zip); // ignore this error: just logging
      // deferred.reject(zip); // or we may fail the download
    } else {
      zip.file("picture"+i+".jpg", data, {binary:true});
      deferred.resolve(zip);
    }
 });
return deferred;
}
      downloadAllImages( ["http://res.cloudinary.com/dhcie5spu/image/upload/v1433932577/9f47448519b85a2df170d9cb4edd9316_zp5nt2.jpg"] );*/
    }
  });
  
});
