const express = require("express");
const app = express();
const port = process.env.port || 4000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options('*', function (req, res) {
    res.send(200);
  });
// respond with "hello world" when a GET request is made to the homepage
response_data = [
    { id: 1, text: "hello world1" },
    { id: 2, text: "hello world2" },
    { id: 3, text: "hello world3" },
    { id: 4, text: "hello world4" },
];
app.get("/", function (req, res) {
    res.json(response_data);
});

app.post('/api/todo/add', function (req, res, next) {
    const data = {
        id: response_data.length + 1,
        text: req.body.text
    }
    response_data.push(data);
    res.json({status:"ok"});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
