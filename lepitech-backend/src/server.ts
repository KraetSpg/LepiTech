import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { SoftwareController } from "./controllers/softwarecontroller";

// configures dotenv to work in your application
dotenv.config();
const app = express();
const PORT = process.env.EXPRESS_PORT;

const softwareController: SoftwareController = new SoftwareController;

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Backend for LepiTech");
}); 

app.get("/software", (request: Request, response: Response) => { 
  softwareController.getSoftware().then((software) => {
    response.status(200).send(software);
  })
}); 

app.listen(PORT, () => { 
  console.log("Server running at http://localhost:" + PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});