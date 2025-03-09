import Joi from "joi";

export const newMeetingValidator = Joi.object({
  id: Joi.string().uuid().required(),
  groupId: Joi.string().uuid().required(),
  startDatetime: Joi.date().iso().required(),
  endDatetime: Joi.date().iso().required(),
  meetingDescription: Joi.string().max(1000).required(),
  meetingRoom: Joi.string().max(255).required(),
  createdAt: Joi.date().iso().required(),
  updatedAt: Joi.date().iso().required(),
});

export const getMeetingsByGroupValidator = Joi.object({
  id: Joi.string().uuid().required(),
});

export const deleteMeetingValidator = Joi.object({
  id: Joi.string().uuid().required(),
});
