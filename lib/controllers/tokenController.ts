import { Response, Request } from 'express';
import { User } from '../models/userModel';
import { authHelper } from '../helpers/authHelper';
import { Token } from '../models/tokenModel';
import { TokenInterface } from '../interfaces/TokenInterface';
import { UserInterafce } from '../interfaces/UserInterafce';

export class TokenControllerClass {

    private _updateToken = () => {

    };

    public getUser = (token_key: string): Promise<UserInterafce> => {

        return new Promise<UserInterafce> (((resolve, reject) => {
            Token.findOne ({
                token_key: token_key
            })
                .then ((token : TokenInterface) => {
                    const user = authHelper.decode(token.jwt_token);

                    this._updateToken();

                    resolve(user);

                })
                .catch(e => reject(e))
        }));

    };

    public saveToken = (token : string): Promise<TokenInterface> => {
        return new Promise(((resolve, reject) => {
            const newToken = new Token ({ jwt_token: token });

            newToken.save ()
                .then (token => resolve(token))
                .catch (e => reject(e));
        }))
    };

}

export const tokenController = new TokenControllerClass ();