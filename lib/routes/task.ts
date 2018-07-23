import { taskController } from '../controllers/taskController';
import { middlewareController } from '../controllers/middlewareController';

export class TaskRoutes {

    public routes = (app): void => {

        /**
         * @api {post} /task Create task
         * @apiName Create task
         * @apiGroup Task
         * @apiDescription Route for task creation
         *
         * @apiHeader {String} token Authentication token. Get after login or registration process.
         *
         * @apiParam (Body) {String} taskName Name for task
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "status": true,
         *       "data": {
         *           "done": false,
         *           "_id": "5b55b458c30eff2915fe9c6d",
         *           "userID": "5b519fa3645c0e07b29b50ac",
         *           "taskName": "task413",
         *           "created_date": "2018-07-23T10:56:24.310Z",
         *           "__v": 0
         *       }
         *     }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Only for authorized users"
         *     }
         *
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Task name is required field"
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.post ('/task', middlewareController.isAuthorized, taskController.save);

        /**
         * @api {get} /task Get list of tasks
         * @apiName Get list of tasks
         * @apiGroup Task
         * @apiDescription Route for getting tasks
         *
         * @apiHeader {String} token Authentication token. Get after login or registration process.
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "status": true,
         *       "data": [
         *           {
         *               "done": false,
         *               "_id": "5b5592ffa765ef255660c05e",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task41",
         *               "created_date": "2018-07-23T08:34:07.583Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559301a765ef255660c05f",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task43",
         *               "created_date": "2018-07-23T08:34:09.832Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559304a765ef255660c060",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task45",
         *               "created_date": "2018-07-23T08:34:12.062Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b55b458c30eff2915fe9c6d",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task413",
         *               "created_date": "2018-07-23T10:56:24.310Z",
         *               "__v": 0
         *           }
         *       ]
         *     }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Only for authorized users"
         *     }
         *
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Task name is required field"
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.get ('/task', middlewareController.isAuthorized, taskController.get);

        /**
         * @api {put} /task/:taskID Edit task
         * @apiName Edit task
         * @apiGroup Task
         * @apiDescription Route for editing tasks
         *
         * @apiHeader {String} token Authentication token. Get after login or registration process.
         *
         * @apiParam (Query) {String} taskID
         *
         * @apiParam (Body) {String} [taskName] Name for task
         *
         * @apiParam (Body) {Boolean} [done] Is task done flag
         *
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "status": true,
         *       "data": [
         *           {
         *               "done": false,
         *               "_id": "5b5592ffa765ef255660c05e",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task41",
         *               "created_date": "2018-07-23T08:34:07.583Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559301a765ef255660c05f",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task43",
         *               "created_date": "2018-07-23T08:34:09.832Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559304a765ef255660c060",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task45",
         *               "created_date": "2018-07-23T08:34:12.062Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b55b458c30eff2915fe9c6d",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task413",
         *               "created_date": "2018-07-23T10:56:24.310Z",
         *               "__v": 0
         *           }
         *       ]
         *     }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Only for authorized users"
         *     }
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Token is not valid"
         *     }
         *
         *
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.put ('/task/:taskID', middlewareController.isAuthorized, taskController.update);

        /**
         * @api {get} /task Get list of tasks
         * @apiName Get list of tasks
         * @apiGroup Task
         * @apiDescription Route for getting tasks
         *
         * @apiHeader {String} token Authentication token. Get after login or registration process.
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "status": true,
         *       "data": [
         *           {
         *               "done": false,
         *               "_id": "5b5592ffa765ef255660c05e",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task41",
         *               "created_date": "2018-07-23T08:34:07.583Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559301a765ef255660c05f",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task43",
         *               "created_date": "2018-07-23T08:34:09.832Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559304a765ef255660c060",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task45",
         *               "created_date": "2018-07-23T08:34:12.062Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b55b458c30eff2915fe9c6d",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task413",
         *               "created_date": "2018-07-23T10:56:24.310Z",
         *               "__v": 0
         *           }
         *       ]
         *     }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Only for authorized users"
         *     }
         *
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Task name is required field"
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.get ('/task', middlewareController.isAuthorized, taskController.get);

        /**
         * @api {delete} /task/:taskID Delete task
         * @apiName Delete task
         * @apiGroup Task
         * @apiDescription Route for deleting tasks
         *
         * @apiHeader {String} token Authentication token. Get after login or registration process.
         *
         * @apiParam (Query) {String} taskID
         *
         * @apiSuccessExample {json} Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "status": true,
         *       "data": [
         *           {
         *               "done": false,
         *               "_id": "5b5592ffa765ef255660c05e",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task41",
         *               "created_date": "2018-07-23T08:34:07.583Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559301a765ef255660c05f",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task43",
         *               "created_date": "2018-07-23T08:34:09.832Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b559304a765ef255660c060",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task45",
         *               "created_date": "2018-07-23T08:34:12.062Z",
         *               "__v": 0
         *           },
         *           {
         *               "done": false,
         *               "_id": "5b55b458c30eff2915fe9c6d",
         *               "userID": "5b519fa3645c0e07b29b50ac",
         *               "taskName": "task413",
         *               "created_date": "2018-07-23T10:56:24.310Z",
         *               "__v": 0
         *           }
         *       ]
         *     }
         *
         *     @apiErrorExample {json} Error-Response:
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Only for authorized users"
         *     }
         *
         *     HTTP/1.1 401 Unauthorized
         *     {
         *       "status" : false,
         *       "type" : "CUSTOM",
         *       "errorMessage" : "Token is not valid"
         *     }
         *
         *
         *
         *     HTTP/1.1 500 Internal server error
         *     {
         *       "status" : false,
         *       "type" : "MODEL",
         *       "errorObject" : "Mongoose default error object"
         *     }
         */

        app.delete ('/task/:taskID', middlewareController.isAuthorized, taskController.delete);
    };

}