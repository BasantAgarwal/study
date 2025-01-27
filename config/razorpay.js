const Razorpay = require("razorpay");
require('dotenv').config() ;



exports.instance = new Razorpay({
    key_id : "rzp_test_DYGGTBLS6BhQhy",
    key_secret : "UeaNJLwiCBsuUmdDrqjTusqI",
})