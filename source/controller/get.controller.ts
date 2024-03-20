import { Request, Response } from "express"

import macs from "../mac/ip";
import { port } from "../serve";

export default class GetController{
  public handle(request: Request, response: Response){
    const mediaAccessControls = Object.assign(macs) 
    return response.status(200).json({
      status: 200,
      mediaAccessControls,
      macs: Object.keys(macs),
      port
    })
  }
}