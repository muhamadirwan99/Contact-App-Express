const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts); // third party middleware
app.use(express.static("public")); // built-in middleware

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Muhamad Irwan",
      email: "muhamadirwan@gmail.com",
    },
    {
      nama: "Erik",
      email: "erik@gmail.com",
    },
    {
      nama: "Dodi",
      email: "dodi@gmail.com",
    },
  ];

  res.render("index", {
    nama: "Irwan Ramadhan",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});
