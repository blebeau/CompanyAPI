import { Schema, model } from "mongoose";
import Company from './company.interface';

const CompanySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true}
);

export default model <Company>('Company', CompanySchema);