import { Response, Request } from "express";
import { ERROR_TYPES, ERRORS_MESSAGE, STATUS } from '../helpers/errorHelper';
import { ErrorResponse } from '../helpers/responseHelper';

export class DefaultController {
    
    public defaultRoute = (req: Request, res: Response) => {
        res.json(
            {
                message: 'Api works'
            }
        )
    };

    public incorrectRoutesHandler = (req: Request, res: Response) => {
        res.status(STATUS.notFound).json(new ErrorResponse(ERRORS_MESSAGE.noMethod, ERROR_TYPES.custom));
    }
}
