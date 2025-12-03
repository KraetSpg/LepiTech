import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { SoftwareController } from "./controllers/softwarecontroller";
import { DevicesController } from "./controllers/DevicesCotroller";

dotenv.config();
const app = express();
const PORT = process.env.EXPRESS_PORT;
app.use(express.json());

const softwareController: SoftwareController = new SoftwareController;
const devicesController: DevicesController = new DevicesController;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Backend for LepiTech");
}); 

app.get("/software", (request: Request, response: Response) => { 
  softwareController.getSoftware().then((software) => {
    response.status(200).send(software);
  })
});

// Send Requirements and Fitting Devices
app.post("/software", (request: Request, response: Response) => {
  softwareController.getAggregatedRequirements(request.body.softwareids).then((requirements) => {
    if (!requirements) {
      response.status(500).send("Couldn't get aggregated Results");
    }
      devicesController.getDevicesForAggregatedSoftware(requirements!.id).then((fittingDevices) => {
        response.status(200).send({requirements: requirements, devices: fittingDevices});
      })
  })
}) 

app.listen(PORT, () => { 
  console.log("Server running at http://localhost:" + PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});