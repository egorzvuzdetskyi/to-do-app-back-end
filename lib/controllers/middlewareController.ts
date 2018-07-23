import { Response, Request } from 'express';
import { authHelper } from '../helpers/authHelper';
import { UserInterafce } from '../interfaces/UserInterafce';
import { ErrorResponse } from '../helpers/responseHelper';
import { ERROR_TYPES, ERRORS_MESSAGE, STATUS } from '../helpers/errorHelper';

class MiddlewareController {
    public isAuthorized = (req: Request, res: Response, next) => {

        const token = req.headers.token;

        if (!token) {
            res.status (STATUS.unauthorized).json (new ErrorResponse (ERRORS_MESSAGE.unauthorized, ERROR_TYPES.custom));
            return
        }

        const user: UserInterafce = authHelper.decode (<string> token);

        if(!user) {
            res.status(STATUS.unauthorized).json(new ErrorResponse(ERRORS_MESSAGE.badToken, ERROR_TYPES.custom))
            return
        }

        next();

    };
}

export const middlewareController: MiddlewareController = new MiddlewareController()