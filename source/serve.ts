import App from "./app/app"
import macs from "./mac/ip"

import "dotenv/config"

const app = new App()
export const port = process.env.PORT || 3333

if(typeof port === "string"){
  parseInt(port)
}

try {
  for(const mac in macs){
    for(const host of macs[mac].ips){
      app.serve({
        port: port as number,
        host: host.ip,
        callback: () => {
          console.log(`${
            JSON.stringify({
              ip_version: host.name,
              web: `http://${host.ip}:${port}`,
              api: `http://${host.ip}:${port}/api`,
              pdf: `http://${host.ip}:${port}/pdf`,
              mac
            }, null, 2)
          }`)
        }
      })
    }
  }
} catch (error) {
  console.log(error)
} finally {
  console.log("\n==== API INTRANET RUNNING ====\n")
}