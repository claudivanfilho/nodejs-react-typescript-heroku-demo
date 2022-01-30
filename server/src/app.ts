import express from "express";
import { resolve } from "path";

import apiRouter from "./routes/api.routes";
import routes from "./routes/index.routes";

// Create the express application
const app = express();

// Declare the path to frontend's static assets
app.use(express.static(resolve("..", "front/build")));
app.use(routes);

app.get("/s", (_, response) => {
  // response.send("ok");
  response.sendFile(resolve("..", "front/build", "index.html"));
});

export default app;
