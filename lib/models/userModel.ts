import * as mongoose from 'mongoose';

import * as bcrypt from 'bcryptjs';

import * as beautifyUnique from 'mongoose-beautiful-unique-validation';

import { authValidators } from "../validotrs/authValidators";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: 'EMAIL IS REQUIRED FIELD',
        unique: 'This user already exist',
        lowercase: true,
        validate: value => authValidators.isEmailValid(value).status,
    },
    password: {
        type: String,
        required: 'PASSWORD IS REQUIRED FIELD',
        validate: value => authValidators.isPasswordValid(value).status,
    },
    userName: {
        type: String,
        required: 'USER NAME IS REQUIRED',
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.plugin(beautifyUnique);

UserSchema.pre('save', function (next) {
    
    this.password = bcrypt.hashSync(this.password, 8);
    
    next();
});

export const User = mongoose.model('User', UserSchema);