// const hello = (req, res) => { res.send("Rendering file") };

const pricectrl = {}
const nodemailer = require('nodemailer');
const Price = require('../models/price')
pricectrl.getPrices = async(req, res) => {
    const prices = await Price.find();
    res.json(prices)
}
pricectrl.createPrice = async(req, res) => {
    const newPrice = new Price(req.body);
    await newPrice.save();
    res.send({
        message: "Price Created"
    })
}

pricectrl.bulkprice = async(req, res) => {
    console.log(req.body)
    await Price.insertMany(req.body)
        .then(function(docs) {

            res.send({
                message: docs
            })
        })
        .catch(function(err) {

        });
}


pricectrl.getPrice = async(req, res) => {
    const price = await Price.findById(req.params.id);
    res.send(price);
}


pricectrl.editPrice = async(req, res) => {
    await Price.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "Price Updated"
    });
}
pricectrl.deletePrice = async(req, res) => {
    await Price.findByIdAndDelete(req.params.id);
    res.json({
        status: "Price Deleted"
    });
}

pricectrl.postmail = async(req, res) => {

    console.log(req.body.email)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'sullansumith@gmail.com',
            pass: 'sumithdeepan'
        }
    });

    let mailOptions = {
        from: 'sullansumith@gmail.com',
        to: req.body.email,
        subject: 'arra',
        text: 'New try!',
        attachments: [{
            filename: 'img.jpg',
            path: __dirname + '/img.jpg',
            //same cid value as in the html img src
        }]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');

    });
    res.send({
        message: "Price Created"
    });

}
module.exports = pricectrl;