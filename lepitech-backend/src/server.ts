import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { SoftwareController } from "./controllers/softwarecontroller";
import { DevicesController } from "./controllers/DevicesCotroller";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173", // Vite frontend URL
  methods: "GET,POST",            // Allow only specific methods if needed
  optionsSuccessStatus: 200 
};


dotenv.config();
const app = express();
const PORT = process.env.EXPRESS_PORT;
app.use(express.json());
app.use(cors(corsOptions));

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
app.post("/software", async (request: Request, response: Response) => {
  try {
    const { softwareids } = request.body as { softwareids?: unknown };

    if (!Array.isArray(softwareids) || softwareids.length === 0) {
      response.status(400).send({ error: "softwareids must be a non-empty array" });
      return;
    }

    const invalidIds = softwareids.some((id) => !Number.isInteger(id) || id <= 0);
    if (invalidIds) {
      response.status(400).send({ error: "softwareids must contain only positive integer IDs" });
      return;
    }

    const requirements = await softwareController.getAggregatedRequirements(softwareids as number[]);

    if (!requirements) {
      response.status(404).send({ error: "No aggregated requirements found for provided softwareids" });
      return;
    }

    if (requirements.id == null) {
      response.status(500).send({ error: "Aggregated requirements id is missing" });
      return;
    }

    const fittingDevices = await devicesController.getDevicesForAggregatedSoftware(requirements.id);
    response.status(200).send({ requirements, devices: fittingDevices });
  } catch (error) {
    console.error("POST /software failed:", error);
    response.status(500).send({ error: "Internal server error while processing software selection" });
  }
}) 

app.listen(PORT, () => { 
  console.log("Server running at http://localhost:" + PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});