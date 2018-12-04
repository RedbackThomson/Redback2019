(function () {
  const express = require('express');
  const throng = require('throng');
  
  const sourceDir = 'dist';
  const PORT = process.env.PORT || 3000;
  const WORKERS = process.env.WEB_CONCURRENCY || 1;
  
  throng({
    workers: WORKERS,
    lifetime: Infinity
  }, start);
  
  function start() {
    var app = express();
    app.use(express.static(sourceDir));
       
    http.createServer(app).listen(app.get(PORT), function(){
      console.log(`Express server listening on port ${PORT} on ${WORKERS} worker(s)`);
      console.log(`Serving content from /${sourceDir}/`);
    });
  }
}).call(this);  
