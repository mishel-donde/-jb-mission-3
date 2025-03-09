import { NextFunction, Request, Response } from "express";
import Team from "../../models/Teams";

export async function getAllTeams(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (e) {
    next(e);
  }
}

export async function getTeamById(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const teamId = req.params.id;
    const team = await Team.findOne({
      where: { id: teamId },
    });
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ error: "Team not found" });
    }
  } catch (e) {
    next(e);
  }
}

export async function addTeam(
  req: Request<
    {},
    {},
    {
      name: string;
      description: string;
    }
  >,
  res: Response,
  next: NextFunction
) {
  try {
    const newTeam = await Team.create(req.body);
    res.json(newTeam);
  } catch (e) {
    next(e);
  }
}

export async function removeTeam(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    await Team.destroy({ where: { id } });
    res.json({ success: true });
  } catch (e) {
    next(e);
  }
}
