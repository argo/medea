var Medea = require('../');

var options = {
  //maxFileSize: 1024*1024
};

var medea = new Medea(options);

var counter = 0;

medea.open(function() {
  var start = Date.now();
  for (var i = 0, len = 130000; i < len; i++) {
    if (i === len - 1) {
      medea.put('hello' + i, 'valz' + i, function() {
        console.log('time:', (Date.now() - start) / 1000, 's');
        console.log(medea.keydir);
        medea.close();
      });
    } else {
      medea.put('hello' + i, 'valz' + i);
    }
  }
});
