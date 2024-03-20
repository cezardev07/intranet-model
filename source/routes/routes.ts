import { Router,Request, Response } from "express"
import GetController from "../controller/get.controller"
import ViewController from "../controller/view.controller"
import PdfController from "../controller/pdf.controller"

export default class Routes{
  constructor(
    protected routes: Router
  ){}
  public handleRoutes(){
    this.routes.get("/", (request: Request, response: Response) => {
      const viewController = new ViewController()
      return viewController.handle(request, response)
    })
    this.routes.get("/api/", (request: Request, response: Response) => {
      const getController = new GetController()
      return getController.handle(request, response)
    })
    this.routes.get("/pdf", (request: Request, response: Response) => {
      const pdfController = new PdfController()
      return pdfController.handle(request, response)
    })
    return this.routes
  }
}