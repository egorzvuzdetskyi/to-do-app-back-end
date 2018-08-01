import { Request, Response } from "express";
import { userController } from "../controllers/userController";

export class UserRoutes {
    
    public routes = (app): void => {

        /**
         * @api {post} /user Create user
         * @apiName Create user
         * @apiGroup User
         * @apiDescription Route for user creation
         *
         *
         * @apiParam (Body) {String} email Email for user
         *
         * @apiParam (Body) {String} password Password for user
         *
         * @apiParam (Body) {String} userName User name
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "status": true,
         *           "data": {
         *                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...EzmfeA"
         *           }
         *      }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.post('/user', userController.save);

        /**
         * @api {get} /user Get user
         * @apiName Get user
         * @apiGroup User
         * @apiDescription Route for user info
         *
         *
         * @apiParam (Body) {String} token Token for user
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "status": true,
         *           "data": {
         *                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...EzmfeA"
         *           }
         *      }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.get('/user', userController.get)


    }
    
}