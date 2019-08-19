const express = require("express");
const app = express();
const users = require("./routes/user");
const port = 3000;

//Static Folders for assets
app.use(express.static("public"));

//router for entire users section
app.use("/user", users);

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/nerd", (req, res) => res.send("Hello World Nerd!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
