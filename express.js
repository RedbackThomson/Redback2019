(function () {
  const express = require('express');
  const throng = require('throng');
  const {join} = require('path');
  
  const staticDir = 'src/assets/static';
  const sourceDir = 'dist';
  const PORT = process.env.PORT || 3000;
  const WORKERS = process.env.WEB_CONCURRENCY || 1;
  
  throng({
    workers: WORKERS,
    lifetime: Infinity
  }, start);
  
  function start() {
    var app = express();

    app.use('/static', express.static(staticDir));
    app.use(express.static(sourceDir));

    app.get('*', (_, res) =>
        res.sendFile(join(__dirname, sourceDir, '/index.html'))
    );
       
    app.listen(PORT, () => {
      console.log(`Express server listening on port ${PORT} on ${WORKERS} worker(s)`);
      console.log(`Serving content from /${sourceDir}/`);
    });
  }
}).call(this);  
