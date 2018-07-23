class AuthValidators {
    
    private readonly _emailReg: RegExp = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    
    private readonly passwordErrors = {
        required: 'PASSWORD IS REQUIRED FIELD',
        minLength: 'PASSWORD SHOULD CONTAIN MORE THEN 6 SYMBOLS',
    };
    
    constructor () {
    }
    
    public isEmailValid = (email: string): ResponseInterface => {
        
        if(!this._emailReg.test(email)){
            return new ResponseClass(false, 'EMAIL IS NOT VALID').getResponse();
        }
    
        return new ResponseClass(true).getResponse()
    
    };
    
    public isPasswordValid = (password: string): ResponseInterface => {
        
        if (!password) {
            return new ResponseClass(false, this.passwordErrors.required).getResponse();
        }
        
        if (password.length <= 6) {
            return new ResponseClass(false, this.passwordErrors.minLength).getResponse();
        }
    
        return new ResponseClass(true).getResponse();
    }
    
}

interface ResponseInterface {
    status: boolean,
    
    errorMessage?: string
}

class ResponseClass {
    
    private status: boolean = null;
    
    private errorMessage: string = null;
    
    constructor (status: boolean, message?: string) {
        this.status = status;
        
        if (message) {
            this.errorMessage = message;
        }
    }
    
    public getResponse = (): ResponseInterface => {
        if(this.errorMessage) {
            return {
                status: this.status,
                errorMessage: this.errorMessage
            }
        } else {
            return {
                status: this.status
            }
        }
    }
    
}

export const authValidators = new AuthValidators();