import { Document } from "mongoose";

export default interface Sales extends Document {
    products: string;
}