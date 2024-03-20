import express, {Express} from "express"
import cors from "cors"
import Routes from "../routes/routes"

export default class App{
  protected app: Express = express()
  constructor(
  ){
    this.middlewares()
    this.router()
  }
  protected middlewares(){
    this.app.use(cors())
    this.app.use(express.json())
  }
  protected router(){
    const routes = new Routes(express.Router())
    this.app.use("/", routes.handleRoutes())
  }
  public serve({port, host, callback}:{
    port: number,
    host: string,
    callback?: () => void
  }){
    this.app.listen(port, host, callback)
  }
}