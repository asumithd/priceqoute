const { Schema, model } = require('mongoose')

const priceSchema = new Schema({
    first_name: { type: String },
    email: { type: String },
    phone: { type: String },
    pincode: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Price', priceSchema)