const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema({
    name: String,
    email: String,
    airport: String,
    vehiclePlateNumber: String,
    vehicleModelNumber: String,
    vehicleModelYear: String,
    AirportTerminal: String,
    startDate: String,
    EndDate: String,
    totalCost: String,
    discount: String,
    subTotal: String,
    paymentStatus: String,
    trxID: String,

}, { timestamps: true });

const Orders = mongoose.models.Order || mongoose.model('Orders', orderSchema);

export default Orders