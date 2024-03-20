import os from "os";

const interfaces = os.networkInterfaces()

const devices: {
  [key: string]:{
    ips:{
      name: string;
      ip: string
    }[]
  } 
} = {}

for (const interfaceName in interfaces) {
  const networkInterface = interfaces[interfaceName]
  if(networkInterface){
    for (const item of networkInterface) {
      if (!item.internal) {
        const device = devices[item.mac] || { ips: [] }
        if (item.family === "IPv6") {
          device.ips.push({
            name: "IPv6",
            ip: `[${item.address}]`,
          });
        } else {
          device.ips.push({
            name: "IPv4",
            ip: `${item.address}`,
          });
        }
        devices[item.mac] = device
      }
    }
  }
}

export default devices
