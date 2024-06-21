const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const ejsMate = require("ejs-mate");
const cors = require("cors");
const axios = require("axios");
// const crypto = require("crypto-js");
const crypto = require('crypto');

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






app.get("/", async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    const successMessage = req.session.successMessage || null;
    const errorMessage = req.session.errorMessage || null;
    console.log('successMessage:', successMessage); // Log the value of successMessage
    console.log('errorMessage:', errorMessage); // Log the value of errorMessage
    req.session.successMessage = null; // Clear the success message after displaying it
    req.session.errorMessage = null; // Clear the error message after displaying it
    res.render("home", { successMessage, errorMessage, blogs, truncateString });
});




app.get("/about-us", (req, res) => {
    res.render("aboutUs")
})
app.get("/web-development", (req, res) => {
    res.render("webDevelopment")
})
app.get("/contact-us", (req, res) => {
    res.render("contact")
})
app.get("/fusion-marketing", (req, res) => {
    res.render("advertisement")
})
app.get("/terms-of-use", (req, res) => {
    res.render("terms")
})
app.get("/cookie-policy", (req, res) => {
    res.render("cookiePolicy")
})
app.get("/refund-policy", (req, res) => {
    res.render("refundPolicy")
})
app.get("/privacy-policy", (req, res) => {
    res.render("privacyPolicy")
})

app.get("/graphic-design", (req, res) => {
    res.render("design")
})


app.get("/email-marketing", (req, res) => {
    res.render("emailMarketing")
})


app.get("/search-engine-optimization" , (req, res)=>{
    res.render("seo")
})



app.get("/hidden-img", (req, res) => {
    res.render("hidden")
})

app.get("/hidden-img2", (req, res) => {
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
        const blog = await Blog.findOne({ canonical: canonical });

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
        const { blogTitle, blogShortDesc, headings, paragraphs, metaTitle, metaDescription, metaKeywords, canonical } = req.body;
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

        const contentText = req.body.contentText.replace(/<\/?[^>]+(>|$)/g, '');


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
        res.redirect("/all-blogs-list")
    } catch (error) {
        console.error('Error uploading blog:', error);
        res.status(500).send('Failed to upload blog. Please try again.');
    }
});




app.get("/all-blogs-list", isAdmin, async (req, res) => {
    const AllBlogs = await Blog.find();
    // console.log(AllBlogs);
    res.render("allBlogs", { AllBlogs })
})

app.delete('/delete-blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).send('Blog not found');
        }

        res.redirect("/all-blogs-list");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/edit-blog/:canonical', isAdmin, async (req, res) => {
    try {
        const { canonical } = req.params;
        const blog = await Blog.findOne({ canonical: canonical });

        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        res.render('blogEdit', { blog });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/update-blog/:id', uploadFields, async (req, res) => {
    try {
        const { id } = req.params;
        const { blogTitle, blogShortDesc, headings, paragraphs, metaTitle, metaDescription, metaKeywords, canonical, contentText } = req.body;

        const existingBlog = await Blog.findById(id);
        if (!existingBlog) {
            return res.status(404).send('Blog not found');
        }

        const bannerImage = req.files['blogBannerImage'] ? req.files['blogBannerImage'][0] : existingBlog.bannerImage;
        const images = req.files['images'] ? req.files['images'].map(img => `/uploads/${img.filename}`) : existingBlog.content.map(item => item.image);

        const content = [];
        for (let i = 0; i < headings.length; i++) {
            content.push({
                heading: headings[i],
                paragraph: paragraphs[i],
                image: images[i] || null
            });
        }



        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            title: blogTitle,
            shortDescription: blogShortDesc,
            bannerImage: bannerImage.startsWith('/uploads/') ? bannerImage : `/uploads/${bannerImage.filename}`,
            content,
            metaTitle,
            canonical,
            contentText,
            metaDescription,
            metaKeywords: metaKeywords.split(',').map(keyword => keyword.trim()),
        }, { new: true });

        res.redirect("/all-blogs-list")
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
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
            password: process.env.ADMIN_PASS, // await the hashed password
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
            res.redirect('/all-blogs-list'); // Redirect to admin panel
        } else {
            res.redirect('/login'); // Redirect to home page
        }
    }
);


app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Error during logout:', err);
        }
        res.redirect('/login');
    });
});





//   payment gateway integration




app.get("/phonepe-form", async (req, res) => {
    res.render("phonepayForm")
})

app.post("/payment", async (req, res) => {
    try {
        const { name, number, amount } = req.body;
        const merchantTransactionId =  'T' + Date.now();;
        const data = {
            "merchantId": process.env.PHONEPE_MERCHANT_ID,
            "merchantTransactionId":merchantTransactionId,
            "merchantUserId": process.env.PHONEPE_MERCHANT_UID,

            "amount": amount * 100,
            "redirectUrl": `https://shashisales.com/status/${merchantTransactionId}`,
            "redirectMode": "POST",
            "mobileNumber": number,
            "paymentInstrument": {
                "type": "PAY_PAGE"
            }
        };

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const key = process.env.PHONEPE_SALT;
        const keyIndex = process.env.PHONEPE_KEY_INDEX;
        const stringToHash = payloadMain + '/pg/v1/pay' + key;
        const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
        const checksum = sha256 + '###' + keyIndex;
        const URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

        const options = {
            method: 'post',
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
            },
            data: {
                request: payloadMain
            }
        };

        axios
  .request(options)
      .then(function (response) {
          console.log(response.data);
        res.redirect(response.data.data.instrumentResponse.redirectInfo.url)

  })
  .catch(function (error) {
    console.error(error);
  });
       

       
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            status: error.response?.status,
            headers: error.response?.headers,
            data: error.response?.data,
        });
        res.status(500).send({
            message: error.message,
            success: false,
            details: error.response?.data || 'No additional details available'
        });
    }
});



app.post("/status/:txnId", async (req, res) => {
    console.log("status body" , res.req.body);
    const merchantId = res.req.body.merchantId;
    const merchantTransactionId = res.req.body.transactionId;
    const key = process.env.PHONEPE_SALT;
    const keyIndex = process.env.PHONEPE_KEY_INDEX;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;

    const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`


    const options = {
        method: 'GET',
        url: URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-VERIFY' : checksum,
            'X-MERCHANT-ID': `${merchantId}`
        },
    };
    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
            if(res.data.success === true){
                return res.redirect("/");
            } else {
                return res.redirect("/phonepe-form");
            }
           
        })
        .catch(function (error) {
            console.error(error);
            
        });

})







app.listen(4000, () => {
    console.log("listening on port 4000");
})