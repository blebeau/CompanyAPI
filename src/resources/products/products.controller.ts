import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interface/controller.interface";
import HttpException from "@/utils/exceptions/http.exceptions";
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/products/products.validations';
import ProductsService from '@/resources/products/products.service';
import { request } from "http";

class ProductsController implements Controller {
    public path = '/products';
    public router = Router();
    private productsService = new ProductsService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.create
        );
    }

    private create = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {
            const { name, company } = req.body;

            const products = await this.productsService.create(name, company);

            res.status(201).json({ products });
        } catch (error) {
            console.log('error req.body', req.body)
            next(new HttpException(400, 'Cannot create products'));
        }
    };
}

export default ProductsController;