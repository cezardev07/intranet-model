import { Request, Response } from "express"

export default class ViewController{
  public async handle(request: Request, response: Response){
    return response.sendFile(process.cwd() + "/source/view/index.html")
  }
}