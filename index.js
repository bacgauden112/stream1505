const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();
const port = 3333;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", (req, res) => res.render("home"));

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

const peerServer = ExpressPeerServer(server, {
  path: "/peer-server",
});

app.use("/", peerServer);
