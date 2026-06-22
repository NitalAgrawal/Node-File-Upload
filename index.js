const path = require("path");
const express = require("express");
const multer = require("multer");
const { log } = require("console");

const app= express()
const PORT = 8000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      return cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage })

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
 // urlencoded: helps in parsing the form data
 // the  json data will not come here form data will come 

app.get("/", (req, res) => {
     return res.render("homepage");
})

app.post("/upload", upload.fields([ { name: "profileImage"},{ name: "coverImage"}]), (req,res) => {
     console.log(req.body);
     console.log(req.file);

     return res.redirect("/");
     
     
});
app.listen(PORT,() => console.log(`Server Started at PORT:8000`));
