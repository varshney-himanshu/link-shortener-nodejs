import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";
import apiRoutes from "./routes/api.routes";
import redirectRouter from "./routes/redirect.routes";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api", apiRoutes);
app.use("/", redirectRouter);

app.use(errorMiddleware);

export default app;
