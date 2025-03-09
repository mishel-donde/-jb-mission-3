import { Sequelize } from "sequelize-typescript";
import config from "config";
import DevelopmentTeams from "../models/Teams";
import Meetings from "../models/Meetings";

const logging = config.get<boolean>("sequelize.logging") ? console.log : false;

const sequelize = new Sequelize({
  models: [DevelopmentTeams, Meetings],
  dialect: "mysql",
  ...config.get("db"),
  logging,
});

export default sequelize;
