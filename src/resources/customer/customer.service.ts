import CustomerModel from "./customer.model";
import Customer from '@/resources/customer/customer.interface';

class CustomerService {
    private Customer = CustomerModel;

    public async create(name: string, company: string): Promise<Customer> {
        try {
            const customer = await this.Customer.create({ name, company });
            return customer;
        } catch (error) {
            console.log('error customer service', error);
            throw new Error('Unable to add Customer');
        }
    }
}

export default CustomerService;