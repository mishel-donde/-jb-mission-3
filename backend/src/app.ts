import express, { json } from "express";
import config from "config";
import sequelize from "./db/sequelize"; // ניהול החיבור למסד נתונים עם Sequelize
import errorLogger from "./middlewares/error/error-logger"; // Middleware לטיפול בשגיאות ויצירת לוגים
import errorResponder from "./middlewares/error/error-responder"; // Middleware לתגובה כשיש שגיאות
import notFound from "./middlewares/not-found"; // Middleware לטיפול במקרה של URL לא קיים
import cors from "cors"; // Middleware לניהול CORS
import teamsRouter from "./routers/teams"; // ניהול קריאות אל ה-router של הקבוצות
import meetingsRouter from "./routers/meetingss"; // ניהול קריאות אל ה-router של הפגישות

const port = config.get<string>("app.port");
const name = config.get<string>("app.name");
const force = config.get<boolean>("sequelize.sync.force");

const app = express();

(async () => {
  try {
    await sequelize.sync({ force });

    // middlewares
    app.use(cors());
    app.use(json());
    // Mounting Routers
    app.use("/teams", teamsRouter);
    app.use("/meetings", meetingsRouter);

    app.use(notFound);

    app.use(errorLogger);
    app.use(errorResponder);

    app.listen(port, () => console.log(`${name} started on port ${port}...`));
  } catch (error) {
    console.error("Error during initialization:", error);
    process.exit(1);
  }
})();
