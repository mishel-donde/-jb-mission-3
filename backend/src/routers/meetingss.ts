import { Router } from "express";
import {
  addMeeting,
  getMeetingsByTeam,
  remove,
} from "../controllers/Meeting/controllers";
import {
  deleteMeetingValidator,
  newMeetingValidator,
} from "../controllers/Meeting/validator";
import validation from "../middlewares/validation";
import paramsValidation from "../middlewares/params-validation";

const meetingsRouter = Router();

meetingsRouter.get("/:id", getMeetingsByTeam);
meetingsRouter.post("/", validation(newMeetingValidator), addMeeting);
meetingsRouter.delete("/:id", paramsValidation(deleteMeetingValidator), remove);

export default meetingsRouter;
