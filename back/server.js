const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 8001;
//const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
app.use(cors());
app.use(express.json()); //bodyparse 대신 들어간거
app.use(express.urlencoded({ extended: false })); //
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
//app.post(경로, 업로드하는 경로, cb)

app.post("/form", upload.none(), (req, res) => {
  console.log(req.body);
  res.send(
    `정상적으로 데이터를 전송받았습니다. name ${req.body.name}, birth ${req.body.birth}`
  );
});
app.post("/upload", upload.single("userfile"), (req, res) => {
  res.send(
    "정상적으로 업로드가 완료되었습니다. 파일명: " + req.file.originalname
  );
  console.log(req.file);
});

app.listen(port, () => console.log(`server running ... Port : ${port}`));
