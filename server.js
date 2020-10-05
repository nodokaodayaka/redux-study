const express = require("express");
const app = express();
const port = process.env.port || 4000;
const cors = require("cors");
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
    res.json([
        { text: "hello world1" },
        { text: "hello world2" },
        { text: "hello world3" },
        { text: "hello world4" },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
