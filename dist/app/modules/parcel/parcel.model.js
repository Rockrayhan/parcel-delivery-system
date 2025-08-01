"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parcel = void 0;
const mongoose_1 = require("mongoose");
const parcel_interface_1 = require("./parcel.interface");
const statusLogSchema = new mongoose_1.Schema({
    status: {
        type: String,
        enum: Object.values(parcel_interface_1.ParcelStatus),
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    updatedBy: {
        type: String,
        required: true,
    },
    note: {
        type: String,
    },
}, { _id: false });
const parcelSchema = new mongoose_1.Schema({
    trackingId: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    weight: { type: Number, required: true },
    sender: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    pickupAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    fee: { type: Number, required: true },
    deliveryDate: { type: Date, required: true },
    currentStatus: {
        type: String,
        enum: Object.values(parcel_interface_1.ParcelStatus),
        required: true,
    },
    statusLogs: { type: [statusLogSchema], required: true },
    isBlocked: { type: Boolean, default: false },
    isFlagged: { type: Boolean, default: false },
    isHeld: { type: Boolean, default: false },
}, {
    timestamps: true,
});
exports.Parcel = (0, mongoose_1.model)('Parcel', parcelSchema);
