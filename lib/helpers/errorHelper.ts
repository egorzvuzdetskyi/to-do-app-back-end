
export const STATUS = {
    OK: 200,
    Created: 201,
    noContent: 204,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalServerError: 500,
};

export const ERRORS_MESSAGE = {
    unauthorized: "Only for authorized users",
    badToken: "Token is not valid",
    requiredField: ' is required field',
    noUser: 'User does not exist',
    password: {
        required: 'Password is required',
        inValid: 'Password is invalid'
    },
    noMethod: 'Method is not provided'
};

export const ERROR_TYPES= {
    custom: "CUSTOM",
    model: "MODEL"
};