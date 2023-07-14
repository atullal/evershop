const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

exports.createOrder = async (amount, currency) => {
    const options = {
        amount: amount * 100,  // converting to paise
        currency,
        receipt: 'receipt#1',
        payment_capture: 1
    };

    const order = await instance.orders.create(options);
    return order;
};
