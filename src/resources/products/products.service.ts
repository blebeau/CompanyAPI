import ProductsModel from "./products.model";
import Products from '@/resources/products/products.interface';

class ProductsService {
    private Products = ProductsModel;

    public async create(name: string, company: string): Promise<Products> {
        try {
            const products = await this.Products.create({ name, company });
            return products;
        } catch (error) {
            console.log('error products service', error);
            throw new Error('Unable to add product');
        }
    }
}

export default ProductsService;