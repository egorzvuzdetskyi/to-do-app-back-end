import { authController } from '../controllers/authController';


export class AuthRoutes {

    public routes = (app): void => {
        /**
         * @api {post} /login Verify user
         * @apiName Login
         * @apiGroup Auth
         * @apiDescription Route for user verify
         *
         * @apiParam (Params) {String} email User email
         * @apiParam (Params) {String} password User password
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "status": true,
         *       "data": {
         *          "token" : ...
         *       }
         *     }
         *     @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "User does not exist"
         *     }
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Password is required"
         *     }
         *
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Password is invalid"
         *     }
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.post ('/login', authController.login);

    };

};