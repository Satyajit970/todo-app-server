import express, { Application } from "express";
import indexRouter from "./route/index";
import { sequelize } from "./models";

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const startServer = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("MySQL connected");

        await sequelize.sync(); // ❗ removed force:true

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("DB error:", error);
    }
};

startServer();