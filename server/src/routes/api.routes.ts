import { Router } from "express";
import getT9ExpansionsOfNumber from "../services/phoneword.service";

const apiRouter = Router();

apiRouter.get("/phoneword", (req, res) => {
  if (!req.query.number || isNaN(Number(req.query.number))) {
    res.status(500).json({ message: "Invalid query string {number}" });
  } else {
    res.send(getT9ExpansionsOfNumber(`${req.query.number}`));
  }
});

export default apiRouter;
