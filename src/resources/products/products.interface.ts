import { Document } from "mongoose";

export default interface Products extends Document {
    name: string;
    company: string;
}