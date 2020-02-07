const express = require("express");
const cors = require("cors");
const app = express();
const port = 8001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.send("Hello Node.js"));
app.get("/time", (req, res) => {
  time = Date();
  res.send(time);
  console.log("connected");
});
app.post("/email", (req, res) => {
  const email = req.body.email;

  if (email === "stpjw777@gmail.com") {
    const info = { info: "1+1=2" };
    res.json(info);
    console.log(email + "정상접근");
  } else {
    const info = {
      info: "1 +1 = 3"
    };
    res.json(info);
    console.log(email + "비정상접근");
  }
});

app.listen(port, () => console.log(`server running ... Port : ${port}`));
