import express, { Express, Router } from "express";
import BodyParser from "body-parser";
import BaseController from "./controllers/BaseController";
import listEndpoints from "express-list-endpoints"

interface IAppOptionsR {
  baseUrl?: string
}

interface IAppOptions {
  baseUrl: string
}
 
class App {
  public app: Express;
  public port: number;
  public options: IAppOptions;
 
  constructor(controllers: Array<BaseController>, port: number, options: IAppOptionsR = {
    baseUrl: "/"
  }) {
    this.app = express();
    this.port = port;
    this.options = options as IAppOptions;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(BodyParser.json());
  }
 
  private initializeControllers(controllers: Array<BaseController>) {
    controllers.forEach((controller) => {
      const router = Router().use(controller.path, controller.router);

      this.app.use(this.options.baseUrl, router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
      
      console.table(listEndpoints(this.app));
    });
  }
}
 
export default App;