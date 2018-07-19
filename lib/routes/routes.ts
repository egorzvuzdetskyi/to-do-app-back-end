import { Request, Response } from "express";
import { ContactController } from "../controllers/controller";

export class Routes {
    
    // default routes file
    
    public contactController: ContactController = new ContactController();
    
    public routes = (app): void => {
        app.route('/')
            .get(this.contactController.defaultRoute);
        
    }
}