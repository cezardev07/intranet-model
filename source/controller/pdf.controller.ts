import { Request, Response } from "express"
import puppeteer from 'puppeteer';

export default class PdfController{
  public async handle(request: Request, response: Response){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 2740, height: 800 });

    const {host} = request.headers

    await page.goto(`http://${host}`, {
      waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
      printBackground: true,
      width: '16in',
      height: '9in'
    })

    await browser.close()

    response.contentType("application/pdf")
    return response.send(pdf)
  }
}
