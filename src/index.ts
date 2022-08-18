import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app'
import CompanyController from '@/resources/company/company.controller'
import CustomerController from '@/resources/customer/customer.controller'
import ProductsController from '@/resources/products/products.controller'
import SalesController from '@/resources/sales/sales.controller'

validateEnv();

const app = new App(
    [new CompanyController(), new CustomerController(), new ProductsController(), new SalesController()],
    Number(process.env.PORT)

);

app.listen();

