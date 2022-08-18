import { Document } from "mongoose";

export default interface Customer extends Document {
    name: string;
    company: string;
}