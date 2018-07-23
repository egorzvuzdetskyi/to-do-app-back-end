
import { DefaultController } from '../controllers/controller';
export class Routes {
    
    // default routes file
    
    public defaultController: DefaultController = new DefaultController();
    
    public routes = (app): void => {
        app.route('/')
            .get(this.defaultController.defaultRoute);

        app.use(this.defaultController.incorrectRoutesHandler);
        
    }
}