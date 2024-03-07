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
    totalPrice: String,
    discountRate: String,
    totalDiscount: String,
    subTotal: String,
    paymentVerified: Boolean,
    isReceived: Boolean,
    isRelease: Boolean,
    trxID: String,
    orderNumber: Number,

}, { timestamps: true });

const Orders = mongoose.models.Orders || mongoose.model('Orders', orderSchema);

export default Orders