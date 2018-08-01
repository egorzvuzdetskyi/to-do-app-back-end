import * as mongoose from 'mongoose';

import * as bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const TokenSchema = new Schema ({
    jwt_token: {
        type: String,
        required: 'JWT Token is required',
        unique: true
    },
    token_key: {
        type: String,
        unique: true
    },
    expiresIn: {
        type: Number,
        default: 86400
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    expiresIn_date: {
        type: Date
    }
});

TokenSchema.pre ('save', function (next) {

    this.token_key = bcrypt.hashSync(randomString(), 8);

    this.expiresIn_date = new Date(this.created_date + 86400);

    next ();
});

const randomString = () => {

    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( let i = 0; i < 5; i++ ) {
        text += possible.charAt (Math.floor (Math.random () * possible.length));
    }

    return text;

};


export const Token = mongoose.model ('Token', TokenSchema);