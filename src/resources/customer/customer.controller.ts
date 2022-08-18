import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interface/controller.interface";
import HttpException from "@/utils/exceptions/http.exceptions";
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/customer/customer.validations';
import CustomerService from '@/resources/customer/customer.service';
import { request } from "http";

class CustomerController implements Controller {
    public path = '/customer';
    public router = Router();
    private customerService = new CustomerService();

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

            const customer = await this.customerService.create(name, company);

            res.status(201).json({ customer });
        } catch (error) {
            console.log('error req.body', req.body)
            next(new HttpException(400, 'Cannot create customer'));
        }
    };
}

export default CustomerController;