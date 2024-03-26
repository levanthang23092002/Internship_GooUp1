const express = require('express');
const app = express();

// Middleware ghi log
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

app.use(logger);
app.get('/home', (req, res) => {

    res.send('Hello world');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);

});