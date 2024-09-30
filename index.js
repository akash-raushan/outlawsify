const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const session = require("express-session");
const path = require('path');


const app = express();
const port = 3000; 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "ffff",
    resave: false,
    saveUninitialized: true,
  })
);

const uri = "mongodb://127.0.0.1:27017/music_user";
// const uri = "mongodb+srv://akash_raushan_:akash12345@cluster0.cjsil.mongodb.net/music_user";

// Connect to MongoDB using Mongoose
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  // console.log("Connected to MongoDB.");

  // Start the server after successful DB connection
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

// Define User schema and model
const userSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userImgSrc: { type: String, required: true },
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// LOGIN
var data = [
  "akash",
  "1167@gmail.com",
  "admin",
  "img/artists/darshan-raval.jpg",
];

app.post("/login", async (req, res) => {
  const { user_name, user_password, captchaInput, captchaOutput } = req.body;
  if (!user_name || !user_password) {
    return res.render("index.ejs", { errorMessage: "Invalid input data" });
  }

  const submit = captchaInput === captchaOutput;

  try {
    const result = await User.findOne({
      $or: [{ user: user_name }, { email: user_name }],
      password: user_password,
    });

    if (result) {
      if (submit) {
        req.session.user = result;
        res.redirect("/welcome");
        const { user, email, password, userImgSrc } = result;
        data = [user, email, password, userImgSrc];
      } else {
        res.render("index.ejs", { errorMessage: "Invalid Captcha" });
      }
    } else {
      res.render("index.ejs", {
        errorMessage: "Incorrect username/email or password",
      });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  if (req.session && req.session.user) {
    imgUrl = data[3];
    res.render("welcome.ejs", { userImgURL: imgUrl });
  } else {
    res.render("index.ejs", { errorMessage: "" });
  }
});

app.get("/welcome", (req, res) => {
  if (req.session && req.session.user) {
    imgUrl = data[3];
    res.render("welcome.ejs", { userImgURL: imgUrl });
  } else {
    res.redirect("/login");
  }
});

app.get("/darshan", (req, res) => {
  if (req.session && req.session.user) {
    imgUrl = data[3];
    res.render("welcome.ejs", { userImgURL: imgUrl });
  } else {
    res.redirect("/login");
  }
});

app.get("/jalraj", (req, res) => {
  if (req.session && req.session.user) {
    imgUrl = data[3];
    res.render("jalraj.ejs", { userImgURL: imgUrl });
  } else {
    res.redirect("/login");
  }
});

app.get("/hustle", (req, res) => {
  if (req.session && req.session.user) {
    imgUrl = data[3];
    res.render("hustle.ejs", { userImgURL: imgUrl });
  } else {
    res.redirect("/login");
  }
});

app.get("/arijit", (req, res) => {
  if (req.session && req.session.user) {
    imgUrl = data[3];
    res.render("arijit.ejs", { userImgURL: imgUrl });
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.get("/profile", (req, res) => {
  if (req.session && req.session.user) {
    const [name, email, password, src] = data;
    res.render("profile.ejs", {
      urname: name,
      uremail: email,
      urpassword: password,
      imgSrc: src,
    });
  } else {
    res.redirect("/login");
  }
});

app.get("/signup", (req, res) => {
  res.render("index.ejs", { errorMessage: "" });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img/dp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// SIGNUP LOGIC
app.post("/signup", upload.single("UserImg"), async (req, res) => {
  const { user_name, user_email, user_password, user_re_password } = req.body;

  if (!req.file) {
    return res.render("index.ejs", { errorMessage: "Image upload failed" });
  }

  const fullImageUrl = req.file.path;
  const imageUrl = fullImageUrl.replace(/^public[\\/]?/, "");

  if (
    !user_name ||
    !user_email ||
    !user_password ||
    !user_re_password ||
    !imageUrl
  ) {
    return res.render("index.ejs", { errorMessage: "Invalid input data" });
  } else if (user_password !== user_re_password) {
    return res.render("index.ejs", {
      errorMessage: "Re-password does not match",
    });
  }

  try {
    const existingUser = await User.findOne({
      $or: [{ user: user_name }, { email: user_email }],
    });
    if (existingUser) {
      return res.render("index.ejs", {
        errorMessage: "Username or email already exists",
      });
    }

    // Insert new user record
    const newUser = new User({
      user: user_name,
      email: user_email,
      password: user_password,
      userImgSrc: imageUrl,
    });

    await newUser.save();

    // Signup successful
    res.render("index.ejs", { errorMessage: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.render("index.ejs", { errorMessage: "Internal server error" });
  }
});

// Close the database connection on server shutdown
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("Closed the MongoDB connection.");
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
});

const getAllUsers = async () => {
  try {
    const allUsers = await User.find();
    console.log("All data inside the user collection:");
    console.log(
      "User".padEnd(20) +
        "Email".padEnd(30) +
        "Password".padEnd(20) +
        "UserImgSrc"
    );

    // Log each row in tabular format
    allUsers.forEach((user) => {
      console.log(
        user.user.padEnd(20) +
          user.email.padEnd(30) +
          user.password.padEnd(20) +
          user.userImgSrc
      );
    });
  } catch (err) {
    console.error("Error fetching users:", err);
  }
};

// Call the function to get and log all users
getAllUsers();


module.exports = app;