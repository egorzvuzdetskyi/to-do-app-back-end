import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    taskName: {
        type: String,
        required: 'TASK NAME IS REQUIRED FIELD'
    },
    userID: {
        type: String
    },
    done: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const Task = mongoose.model('Task', TaskSchema);