import * as mongoose from 'mongoose';
import { ContactSchema } from "../models/crmModel";
import { Response, Request } from "express";

// default schema set up
const Contact = mongoose.model('contact', ContactSchema);

export class ContactController {
    
    public defaultRoute = (req: Request, res: Response) => {
        res.json(
            {
                message: 'Api works'
            }
        )
    };
    
    private makeResponseContact = (res: Response, err, contact) => {
        
        //default handler for response after actions with schema (contact for ex);
        
        if (err) {
            // error handler
        }
        
        res.json(contact);
    }
}
