import CompanyModel from "./company.model";
import Company from '@/resources/company/company.interface';

class CompanyService {
    private Company = CompanyModel;

    public async create(name: string): Promise<Company> {
        try {
            const company = await this.Company.create({ name });
            return company;
        } catch (error) {
            throw new Error('Unable to add Company');
        }
    }
}

export default CompanyService;