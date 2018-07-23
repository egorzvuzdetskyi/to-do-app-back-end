export class SuccessResponse<ResponseObjectType> {

    public readonly status: boolean = true;

    public data: ResponseObjectType;

    constructor(data: ResponseObjectType) {
        this.data = data;
    }
}

export class ErrorResponse {

    public readonly status: boolean = false;

    public type: string;

    public errorMessage: string;

    public errorObject: Object;

    constructor(error: any | string, type: string) {
        this.type = type;
        switch ( type ) {
            case 'MODEL' :
                this._prepareModelError (error);
                break;
            case 'CUSTOM':
                this.errorMessage = <string>error;
                break;
            default:
                this._prepareModelError (error);
        }
        ;
    };

    private _prepareModelError = (error: any) => {
        this.type = 'MODEL';
        this.errorObject = error
    };
}