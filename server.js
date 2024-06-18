const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const ejsMate = require("ejs-mate");
const cors = require("cors");
const axios = require("axios");
const crypto = require("crypto-js");
const dotenv = require('dotenv');
const mailsender = require("./utils/mailsender");
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const multer = require('multer');
const fs = require('fs');
const User = require("./models/User");
const Blog = require('./models/Blog');
const bcrypt = require('bcrypt');
const passport = require('./config/passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

main().then(() => {
    console.log("connected to the DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://shashisales:SS%40sales2604@213.210.21.176:27017/shashisales");
}




app.use(
    session({
        secret: 'shashisalesandmarketing',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: 'mongodb://shashisales:SS%40sales2604@213.210.21.176:27017/shashisales',
            collectionName: 'sessions',
        }),
        cookie: {
            maxAge: 48 * 60 * 60 * 1000,
        },
    })
    );
    
    
    // Passport middleware
    app.use(passport.initialize());
    app.use(passport.session());



// Multer setup (only for file uploads)
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
const uploadFields = upload.fields([
    { name: 'blogBannerImage', maxCount: 1 },
    { name: 'images' }
]);

app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     console.log('Request Method:', req.method);
//     console.log('Request URL:', req.url);
//     console.log('Content-Type:', req.headers['content-type']);
//     console.log('Request Body:', req.body);
//     console.log('Request Files:', req.files);
//     next();
//   });
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(cors());
app.use(flash());

dotenv.config();






// Authentication middleware
const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
      return next();
    }
    res.redirect('/login');
  };






app.get("/", (req, res) => {
    const successMessage = req.session.successMessage || null;
    const errorMessage = req.session.errorMessage || null;
    console.log('successMessage:', successMessage); // Log the value of successMessage
    console.log('errorMessage:', errorMessage); // Log the value of errorMessage
    req.session.successMessage = null; // Clear the success message after displaying it
    req.session.errorMessage = null; // Clear the error message after displaying it
    res.render("home", { successMessage, errorMessage });
});




app.get("/about-us" , (req, res)=>{
    res.render("aboutUs")
})
app.get("/web-development" , (req, res)=>{
    res.render("webDevelopment")
})
app.get("/contact-us" , (req, res)=>{
    res.render("contact")
})
app.get("/fusion-marketing" , (req, res)=>{
    res.render("advertisement")
})
app.get("/terms-of-use" , (req, res)=>{
    res.render("terms")
})
app.get("/cookie-policy" , (req, res)=>{
    res.render("cookiePolicy")
})
app.get("/refund-policy" , (req, res)=>{
    res.render("refundPolicy")
})
app.get("/privacy-policy" , (req, res)=>{
    res.render("privacyPolicy")
})

app.get("/graphic-design" , (req, res)=>{
    res.render("design")
})


app.get("/email-marketing" , (req, res)=>{
    res.render("emailMarketing")
})


app.get("/hidden-img" , (req, res)=>{
    res.render("hidden")
})

app.get("/hidden-img2" , (req, res)=>{
    res.render("hidden2")
})

function truncateString(str, length = 200) {
  if (str.length > length) {
    return `${str.substring(0, length)}...`;
  }
  return str;
}

app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        console.log(blogs.canonical);
        res.render("blog", { blogs, truncateString });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


app.get("/blog-detail/:canonical", async (req, res) => {
    try {
        const { canonical } = req.params;
        const blog = await Blog.findOne({ canonical: canonical});

        if (!blog) {
            return res.status(404).send("Blog not found");
        }

        res.render("blogDetails", { blog });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/blog-form", isAdmin, (req, res) => {
    res.render("uploadForm");
});

// Route for handling blog upload
app.post('/upload-blog', uploadFields, async (req, res) => {
    try {
        const { blogTitle, blogShortDesc, headings, paragraphs, metaTitle, metaDescription, metaKeywords, canonical, contentText } = req.body;
        const bannerImage = req.files['blogBannerImage'] ? req.files['blogBannerImage'][0] : null;
        const images = req.files['images'] ? req.files['images'].map(img => `/uploads/${img.filename}`) : [];

        if (!bannerImage) {
            throw new Error('Blog banner image is required');
        }

        const content = [];
        for (let i = 0; i < headings.length; i++) {
            content.push({
                heading: headings[i],
                paragraph: paragraphs[i],
                image: images[i] || null
            });
        }

        const blog = new Blog({
            title: blogTitle,
            shortDescription: blogShortDesc,
            bannerImage: `/uploads/${bannerImage.filename}`,
            content,
            metaTitle,
            canonical,
            contentText,
            metaDescription,
            metaKeywords: metaKeywords.split(',').map(keyword => keyword.trim()),
        });

        await blog.save();
        console.log(blog);
        // res.status(200).send('Blog uploaded successfully!');
        res.redirect("/blog-form")
    } catch (error) {
        console.error('Error uploading blog:', error);
        res.status(500).send('Failed to upload blog. Please try again.');
    }
});




//   const recipients = ['suryakantgupta678@gmail.com', 'bgmilelomujhse@gmail.com'];
  const recipients = ['anurag.tiwari@shashisales.com', 'info@shashisales.com'];






app.post('/submit-quote', (req, res) => {
    const formData = req.body;

    try {
        console.log('Received form data:', formData);
        mailsender(formData, recipients);
        req.session.successMessage = 'Thank you for your interest in Shashi sales and marketing, we will get back to you soon';
        res.redirect('/');
    } catch (error) {
        console.error('Failed to send email:', error);
        req.session.errorMessage = 'An error occurred while submitting your form. Please try again later.';
        res.redirect('/');
    }
});



  

  





// Function to generate a unique transaction ID
function generatedTranscId() {
  return 'T' + Date.now();
}

// POST route for initiating payment
app.post("/payment", async (req, res) => {
  console.log(req.body);

  try {
      const price = parseFloat(req.body.price);
      const { user_id, phone, name, email,  } = req.body;

      // Set the values to variables for later use
      this.name = name;
      this.email = email;
      this.user = user_id;
      this.phone = phone;
      this.price = price;

      // Prepare payment request data
      const data = {
          merchantId: process.env.PHONEPE_MERCHANT_ID,
          merchantTransactionId: generatedTranscId(),
          merchantUserId: 'MUID' + user_id,
          name: name,
          amount: price * 100,
          redirectUrl: `http://localhost:4000/api/v1/orders/status/${generatedTranscId()}`,
          redirectMode: "POST",
          mobileNumber: phone,
          paymentInstrument: {
              type: "PAY_PAGE",
          },
      };

      // Convert payload to Base64 encoding
      const payload = JSON.stringify(data);
      const payloadMain = Buffer.from(payload).toString("base64");

      // Generate checksum
      const key = process.env.PHONEPE_SALT;
      const keyIndex = 1;
      const string = payloadMain + "/pg/v1/pay" + key;
      const sha256 = crypto.SHA256(string).toString();
      const checksum = sha256 + "###" + keyIndex;

      // Prepare request options
      const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
      const requestData = {
          method: "POST",
          url: prod_URL,
          headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              "X-VERIFY": checksum,
          },
          data: {
              request: payloadMain,
          },
      };

      // Make payment API request
      axios.request(requestData)
          .then(async function (response) {
              const phonePeTransactionId = response.data.transactionId;
              res.status(201).send({
                  msg: "payment done",
                  status: "success",
                  data: response.data,
                  phonePeTransactionId: phonePeTransactionId,
              });
              console.log("Payment API Response:", response.data);
          })
          .catch(function (error) {
              console.error("Payment API Error:", error.message);
              res.status(500).json({ msg: "Payment Failed", status: "error", error: error.message });
          });
  } catch (e) {
      console.error("Internal Server Error:", e.message);
      res.status(500).json({ msg: "Internal Server Error", status: "error", error: e.message });
  }
});

// POST route for checking payment status
app.post('/status/:txnId', async (req, res) => {
  try {
      const merchantTransactionId = req.params.txnId;
      const merchantUserId = "PGTESTPAYUAT";
      const key = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

      // Generate checksum
      const keyIndex = 1;
      const string = `/pg/v1/status/${merchantUserId}/${merchantTransactionId}` + key;
      const sha256 = crypto.SHA256(string).toString();
      const checksum = sha256 + "###" + keyIndex;

      // Prepare request options
      const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantUserId}/${merchantTransactionId}`;
      const options = {
          method: 'GET',
          url: URL,
          headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
              'X-VERIFY': checksum,
              'X-MERCHANT-ID': merchantUserId,
          }
      };

      // Make status API request
      const response = await axios.request(options);

      if (response.data.data.responseCode === 'SUCCESS') {
          // Handle successful payment
          // Create a new order instance and save it to the database
          // Redirect to success URL
      } else {
          // Handle failed payment
          // Redirect to failure URL
      }
  } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ msg: "Error", status: "error", error: error.message });
  }
});


// admin panel code 
async function createDefaultAdminUsers() {
    try {
      // Check if any admin or manager users exist
      const existingAdmins = await User.find({ role: 'admin' });
      
  
      if (existingAdmins.length > 0) {
        console.log('Admin user already exist');
        return;
      }
  
      // Check if environment variables are set
      if (!process.env.ADMIN_PASS || !process.env.ADMIN_EMAIL) {
        throw new Error('Environment variables MANAGER_PASS, ADMIN_PASS, and ADMIN_EMAIL must be set');
      }
  
      
      
  
      const adminUser = new User({
        name: 'Admin User',
        email: process.env.ADMIN_EMAIL,
        password:  process.env.ADMIN_PASS, // await the hashed password
        role: 'admin'
      });
  
      await adminUser.save();
  
      console.log('Default admin created successfully');
    } catch (err) {
      console.error('Error creating default admin and manager users:', err);
    }
  }
  // Call the function to create the default admin users
//   createDefaultAdminUsers();


app.get('/login', (req, res) => {
    const { successMessage, errorMessage } = req.flash();
    res.render('login', { successMessage, errorMessage });
  });

  app.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: true,
    }),
    (req, res) => {
      const { role } = req.user;
      if (role === 'admin') {
        res.redirect('/blog-form'); // Redirect to admin panel
      } else {
        res.redirect('/'); // Redirect to home page
      }
    }
  );


  app.get('/logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        console.error('Error during logout:', err);
      }
      res.redirect('/');
    });
  });
  




app.listen(4000 , ()=>{
    console.log("listening on port 4000");
})