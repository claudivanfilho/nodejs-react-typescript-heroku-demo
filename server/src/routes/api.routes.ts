import { Router } from "express";
import getT9ExpansionsOfNumber from "../services/phoneword.service";

const apiRouter = Router();

apiRouter.get("/phoneword", (req, res) => {
  if (!req.query.number || isNaN(Number(req.query.number))) {
    res.status(400).json({ message: "Invalid query string {number}" });
  } else {
    res.json(getT9ExpansionsOfNumber(req.query.number as string));
  }
});

export default apiRouter;
