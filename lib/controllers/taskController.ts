import { Response, Request } from 'express';
import { Task } from '../models/taskModel';
import { authHelper } from '../helpers/authHelper';
import { UserInterafce } from '../interfaces/UserInterafce';
import { ErrorResponse, SuccessResponse } from '../helpers/responseHelper';
import { ERROR_TYPES, ERRORS_MESSAGE, STATUS } from '../helpers/errorHelper';

export class TaskControllerClass {

    public save = (req: Request, res: Response) => {

        const {
            token
        } = req.headers;

        const {
            taskName,
        } = req.body;

        const user = authHelper.decode (<string>token);

        if (!taskName) {
            res.status (STATUS.badRequest).json (new ErrorResponse ('Task name' + ERRORS_MESSAGE.requiredField, ERROR_TYPES.custom));
            return;
        }
        ;

        const newTask = new Task ({
            userID: user._id,
            taskName: taskName
        });

        newTask.save ()
            .then (task => {
                res.status (STATUS.OK).json (new SuccessResponse (task));
            })
            .catch (error => {
                res.status (STATUS.internalServerError).json (new ErrorResponse (error, ERROR_TYPES.model));
            });

    };

    public get = (req: Request, res: Response) => {
        const token = <string>req.headers.token;

        const user: UserInterafce = authHelper.decode (token);

        Task.find ({
            userID: user._id
        })
            .then (tasks => {
                res.status (STATUS.OK).json (new SuccessResponse (tasks));
            })
            .catch (err => res.status (STATUS.internalServerError).json (new ErrorResponse (err, ERROR_TYPES.model)));

    };

    public update = (req: Request, res: Response) => {
        const {
                token
            } = req.headers,
            {
                taskName,
                done,
            } = req.body,
            {
                taskID
            } = req.params,
            user: UserInterafce = authHelper.decode (<string> token);

        const task = {
            taskName: taskName,
            done: done
        }

        if (!taskName) {
            delete task.taskName
        }

        if (done === null) {
            delete task.done
        }

        Task.update ({
            userID: user._id,
            _id: taskID
        }, task)
            .then (() => {
                this.get (req, res);
            })
            .catch (err => {
                res.status (STATUS.internalServerError).json (new ErrorResponse (err, ERROR_TYPES.model));
            });


    };

    public delete = (req: Request, res: Response) => {

        const {
                token
            } = req.headers,
            {
                taskID
            } = req.params;

        const user: UserInterafce = authHelper.decode (<string>token);

        if (!taskID) {
            res.json (STATUS.badRequest).json (new ErrorResponse ('Task id is' + ERRORS_MESSAGE.requiredField, ERROR_TYPES.custom));
            return;
        }

        Task.deleteOne ({
            userID: user._id,
            _id: taskID
        })
            .then (() => {
                this.get (req, res);
            })
            .catch (err => {
                res.status (STATUS.internalServerError).json (new ErrorResponse (err, ERROR_TYPES.model));
            });
    };

}

export const taskController = new TaskControllerClass ();