import { Response, Request } from "express";
import { User } from "../models/userModel";
import { ErrorResponse, SuccessResponse } from '../helpers/responseHelper';
import { authHelper } from '../helpers/authHelper';
import { ERROR_TYPES, ERRORS_MESSAGE, STATUS } from '../helpers/errorHelper';
import { Token } from '../models/tokenModel';
import { TokenControllerClass } from './tokenController';
import { UserInterafce } from '../interfaces/UserInterafce';

export class UserControllerClass {

    private _tokenControllerClass: TokenControllerClass = new TokenControllerClass ();
    
    public save = (req: Request, res: Response) => {
        const newUser = new User(req.body);
        
        newUser.save()
            .then(user => {
                
                const token = authHelper.encode(user);
                
                res.status(STATUS.OK).json(new SuccessResponse(
                    {
                        token: token
                    }
                ));
            })
            .catch(err => {
                res.status(STATUS.internalServerError).json(new ErrorResponse(err, ERROR_TYPES.model));
            })
    }

    public get = (req: Request, res: Response) => {

        const token_key : string = <string>req.headers.token;

        if(!token_key) {
            res.status(STATUS.unauthorized).json(new ErrorResponse(ERRORS_MESSAGE.unauthorized, ERROR_TYPES.custom))
            return
        }

        this._tokenControllerClass.getUser(token_key)
            .then((user : UserInterafce) => res.status(STATUS.OK).json(new SuccessResponse(user)))
            .catch((e) => res.status(STATUS.internalServerError).json(new ErrorResponse(e, ERROR_TYPES.model)))

    }
}

export const userController = new UserControllerClass();