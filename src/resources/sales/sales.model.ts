import { Schema, model } from "mongoose";
import Sales from './sales.interface';

const SalesSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

export default model <Sales>('Sales', SalesSchema);