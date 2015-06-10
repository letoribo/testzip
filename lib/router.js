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

      // Add a file to the zip
      zip.file('textfile1.txt', 'Hello World');

      // Generate zip stream
      var output = zip.generate({
        type:        "nodebuffer",
        compression: "DEFLATE"
      });

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
  
});
