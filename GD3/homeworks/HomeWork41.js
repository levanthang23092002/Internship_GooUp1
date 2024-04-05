const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors');
const helmet = require('helmet');



const corsOptions = {
  origin: '*', // Chỉ cho phép truy cập từ tất cả các nguồn 
  methods: ['GET', 'POST'], // Chỉ cho phép các phương thức GET và POST
  allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các header Content-Type và Authorization
}

app.use(cors(corsOptions));
app.use(helmet());
app.use('/api', apiRoutes);
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  const nodemon = require('nodemon');
  nodemon({ script: 'server.js' });
  nodemon.on('start', () => {
    console.log('Server is running with auto-reload');
  });
  nodemon.on('crash', () => {
    console.log('Server crashed, restarting...');
  });
} else {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
  });
}