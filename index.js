const express = require('express');
const app = express();
const path = require('path');

const HTTP_PORT = process.env.PORT || 8080;
app.use(express.static('dist'));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(HTTP_PORT, () => {
    console.log("Express connected");
})