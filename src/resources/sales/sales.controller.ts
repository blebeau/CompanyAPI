import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interface/controller.interface";
import HttpException from "@/utils/exceptions/http.exceptions";
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/sales/sales.validations';
import SalesService from '@/resources/sales/sales.service';
import { request } from "http";

class SalesController implements Controller {
    public path = '/sales';
    public router = Router();
    private salesService = new SalesService();

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

            const sales = await this.salesService.create(name, company);

            res.status(201).json({ sales });
        } catch (error) {
            console.log('error req.body', req.body)
            next(new HttpException(400, 'Cannot create sales'));
        }
    };
}

export default SalesController;