import { Schema, model } from "mongoose";
import Customer from './customer.interface';

const CustomerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

export default model <Customer>('Customer', CustomerSchema);