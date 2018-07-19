import  app from './app';
import { APP } from "./config/settings";

const PORT = APP.port;

app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
})