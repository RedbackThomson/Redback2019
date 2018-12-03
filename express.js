const express = require('express');
const throng = require('throng');

const sourceDir = 'dist';
const PORT = 3000;
const WORKERS = process.env.WEB_CONCURRENCY || 1;

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start);

function start() {
  var app = express();
  app.use(express.static(sourceDir));
  
  app.listen(PORT, () => {
    console.log(`Express web server started: http://localhost:${PORT}`);
    console.log(`Serving content from /${sourceDir}/`);
  });
}

