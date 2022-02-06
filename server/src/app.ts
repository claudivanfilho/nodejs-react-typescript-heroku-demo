import express from "express";
import { resolve } from "path";

import routes from "./routes/index.routes";

// Create the express application
const app = express();

// Declare the path to frontend's static assets
console.log(process.env.NODE_ENV);
app.use(express.static(resolve("..", "front", "build")));
app.use(routes);

app.get("*", (_, response) => {
  // response.send("ok");
  response.sendFile(resolve("..", "front", "build", "index.html"));
});

export default app;
