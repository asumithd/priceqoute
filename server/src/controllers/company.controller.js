// const hello = (req, res) => { res.send("Rendering file") };

const companyctrl = {}
const nodemailer = require('nodemailer');
const Company = require('../models/company')
companyctrl.getCompanys = async (req, res) => {
    const companys = await Company.find();
    res.json(companys)
}
companyctrl.createCompany = async (req, res) => {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.send({
        message: "Company Created"
    })
}

companyctrl.bulkcompany = async (req, res) => { 
    console.log(req.body)
    await Company.insertMany(req.body)
    .then(function(docs) {
         
         res.send({
            message: docs
        })
    })
    .catch(function(err) {
        
    });
}


companyctrl.getCompany = async (req, res) => {
    const company = await Company.findById(req.params.id);
    res.send(company);
}


companyctrl.editCompany = async (req, res) => {
    await Company.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "Company Updated"
    });
}
companyctrl.deleteCompany = async (req, res) => {
    await Company.findByIdAndDelete(req.params.id);
    res.json({
        status: "Company Deleted"
    });
}

companyctrl.postmail = async( req,res)=>{

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
            path: __dirname +'/img.jpg',
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
        message: "Company Created"
    });

}
module.exports = companyctrl;
