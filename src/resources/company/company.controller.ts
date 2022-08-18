import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/utils/interface/controller.interface";
import HttpException from "@/utils/exceptions/http.exceptions";
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/company/company.validations';
import CompanyService from '@/resources/company/company.service';
import { request } from "http";

class CompanyController implements Controller {
    public path = '/companies';
    public router = Router();
    private companyService = new CompanyService();

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
            const { name } = req.body;

            const company = await this.companyService.create(name);

            res.status(201).json({ company });
        } catch (error) {
            console.log('error req.body', req.body)
            next(new HttpException(400, 'Cannot create company'));
        }
    };
}

export default CompanyController;