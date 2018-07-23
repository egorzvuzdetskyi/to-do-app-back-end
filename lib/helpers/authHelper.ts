
import * as jwt from 'jsonwebtoken';

import * as mongoose from 'mongoose';

import * as bcrypt from 'bcryptjs';

import { JWTCONFIG } from '../config/settings';

import { UserInterafce } from '../interfaces/UserInterafce';

class AuthHelper {
    constructor() {

    }

    public decode = (token: string) : UserInterafce => {
        return jwt.decode(token, JWTCONFIG.secret)
    };

    public encode = (object: mongoose.Schema) : string => {
        return jwt.sign(object.toJSON(), JWTCONFIG.secret, {
            expiresIn: 86400
        });


    };

    public checkValidPassword = (user: UserInterafce, password: string):boolean => {
        return bcrypt.compareSync(password, user.password)
    }

}

export const authHelper = new AuthHelper();