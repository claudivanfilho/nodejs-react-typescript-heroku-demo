import { Router } from "express";
import { resolve } from "path";

import apiRouter from "./api.routes";

const routes = Router();

routes.use("/api", apiRouter);

// routes.get("*", (_, response) => {
//   response.sendFile(resolve("..", "front/build", "index.html"));
// });

export default routes;
