const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const ejsMate = require("ejs-mate");
const cors = require("cors");
const axios = require("axios");
// const sha256 = require("sha256");
// const uniqid = require("uniqid");
const crypto = require("crypto-js");
const dotenv = require('dotenv'); // If using .env file
const mailsender = require("./utils/mailsender");





const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// Load environment variables if using .env
dotenv.config();



app.get("/" , (req, res)=>{
    res.render("home")
})
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



app.post('/submit-form', (req, res) => {
  // Extract form data from the request body
  const formData = req.body;

  // Define the recipient email address
  const recipients = ['anurag.tiwari@shashisales.com', 'info@shashisales.com'];

  // Send email with form data
  mailsender(formData, recipients);

  // Respond to the client
  res.redirect("/contact-us");
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





app.listen(4000 , ()=>{
    console.log("listening on port 4000");
})