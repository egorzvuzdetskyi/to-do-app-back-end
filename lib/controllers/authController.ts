import { Response, Request } from 'express';
import { User } from '../models/userModel';
import { authHelper } from '../helpers/authHelper';
import { ErrorResponse, SuccessResponse } from '../helpers/responseHelper';
import { ERROR_TYPES, ERRORS_MESSAGE, STATUS } from '../helpers/errorHelper';

export class AuthControllerClass {

    public login = (req: Request, res: Response) => {
        const {
            email,
            password
        } = req.body;

        User.findOne ({
            email: email
        })
            .then (user => {

                if (!user) {
                    res.status (STATUS.badRequest).json (new ErrorResponse (ERRORS_MESSAGE.noUser, ERROR_TYPES.custom));
                    return;
                }

                if (!password) {
                    res.status (STATUS.badRequest).json (new ErrorResponse (ERRORS_MESSAGE.password.required, ERROR_TYPES.custom));
                    return;
                }

                const isPasswordValid: boolean = authHelper.checkValidPassword (user, password);

                if (!isPasswordValid) {
                    res.status (STATUS.badRequest).json (new ErrorResponse (ERRORS_MESSAGE.password.inValid, ERROR_TYPES.custom));
                    return;
                }

                const token: string = authHelper.encode (user);

                res.status (STATUS.OK).json (new SuccessResponse ({ token: token }));

            })
            .catch (err => {
                console.log (err);
                res.status (STATUS.internalServerError).json (new ErrorResponse (err, ERROR_TYPES.model));
            });
    };

}

export const authController = new AuthControllerClass ();