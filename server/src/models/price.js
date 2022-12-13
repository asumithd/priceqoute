const { Schema, model } = require('mongoose')

const companySchema = new Schema({
    first_name: { type: String },
    email: { type: String },
    phone: { type: String },
    pincode: { type: String },
    category: { type: String },
    categoryType: { type: String },
    address: { type: String },
    acre: { type: String },
    crap: { type: String },
    waterIrrigation: { type: String },
    deliverySize: { type: String },
    deliveryPerHr: { type: String },
    accessories: { type: String },
    boreSize: { type: String },
    totalDepth: { type: String },
    waterLevel: { type: String },
    pumpLowringDepth: { type: String },
    pVPanel: { type: String },
    vFDPanelBox: { type: String },
    mountingStructure: { type: String },
    dCCables: { type: String },
    earthKit: { type: String },
    othersAccessories: { type: String },
    installation: { type: String },
    transportation: { type: String },
    motorPump: { type: String },
    lightingArrestor: { type: String },
    hDPHose25: { type: String },
    cable3CX25Sqmm: { type: String },
    rope16mm: { type: String },
    borewellAccessories: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Company', companySchema)