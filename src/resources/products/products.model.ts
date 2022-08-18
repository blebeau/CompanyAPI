import { Schema, model } from "mongoose";
import Products from './products.interface';

const ProductsSchema = new Schema(
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

export default model <Products>('Products', ProductsSchema);