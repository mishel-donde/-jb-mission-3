import { Router } from "express";
import { getAllTeams } from "../controllers/teams/controllers";

const teamsRouter = Router();

teamsRouter.get("/", getAllTeams);

export default teamsRouter;
