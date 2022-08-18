import { Document } from "mongoose";

export default interface Company extends Document {
    name: string;
}