import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { Routes } from "./routes/routes";


/*
*   ALL ROUTE AND CONTROLLER FILES SHOULD BE REMOVED AFTER FORK. THEY ARE HERE ONLY FOR EXAMPLES
* */

class App {
    
    public app: express.Application;
    
    // setting up dummy routes
    public route: Routes = new Routes();
    
    // Link to ur mongoDB storage
    private _mongoUrl: string = 'mongodb://localhost/CRMdb';
    
    constructor() {
        
        //bootstrap express app
        this.app = express();
        
        this._config();
        
        // setting up default routes
        this.route.routes(this.app);
        
        this._mongoSetup();
    }
    
    private _config = () => {
        // base config for node js app
        this.app.use(bodyParser.json());
        
        this.app.use(bodyParser.urlencoded({extended: false}));
    };
    
    private _mongoSetup = (): void => {
        // base set up for mongoose and mongo;
        mongoose.Promise = global.Promise;
        
        mongoose.connect(this._mongoUrl);
        
    }
    
}

export default new App().app;