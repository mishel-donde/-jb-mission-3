import { NextFunction, Request, Response } from "express";
import Meeting from "../../models/Meetings";
import { Sequelize } from "sequelize";

export async function getMeetingsByTeam(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const groupId = req.params.id;
    const meetings = await Meeting.findAll({
      where: { groupId },
    });
    res.json(meetings);
  } catch (error) {
    next(error);
  }
}

export async function addMeeting(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const newMeeting = await Meeting.create(req.body);
    res.status(201).json(newMeeting);
  } catch (error) {
    next(error);
  }
}

export async function remove(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { id } = req.params;
    await Meeting.destroy({ where: { id } });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}
