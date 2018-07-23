import { Response, Request } from "express";
import { User } from "../models/userModel";
import { ErrorResponse, SuccessResponse } from '../helpers/responseHelper';
import { authHelper } from '../helpers/authHelper';
import { ERROR_TYPES, STATUS } from '../helpers/errorHelper';

export class UserControllerClass {
    
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
    
}

export const userController = new UserControllerClass();