import SalesModel from "./sales.model";
import Sales from '@/resources/sales/sales.interface';

class SalesService {
    private Sales = SalesModel;

    public async create(name: string, company: string): Promise<Sales> {
        try {
            const sales = await this.Sales.create({ name, company });
            return sales;
        } catch (error) {
            console.log('error sales service', error);
            throw new Error('Unable to add sales');
        }
    }
}

export default SalesService;