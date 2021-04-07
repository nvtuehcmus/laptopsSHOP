import "../shared/bootstrap";
import express from "express";
import typeValidation from "../shared/middleware/typeValidation";
import bodyParser from "body-parser";
import { cors } from "./config/cors";
import { postSampleRequest } from "./controler/postSampleRequest";
import { SAMPLE_REQUEST_2 } from "../shared/types/schemas";
const app = express();

app.all("*", cors);
app.get("/health", (req: express.Request, res: express.Response) =>
  res.send("ok")
);
app.post(
  "/",
  bodyParser.json(),
  typeValidation(global.validator.compile(SAMPLE_REQUEST_2)),
  postSampleRequest
);

app.listen(process.env.PORT, () => {
  console.log("app running on ", process.env.PORT);
});
