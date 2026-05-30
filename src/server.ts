import app from "./app";
import { db } from "./config/db";

const PORT = process.env.PORT || 8000;

async function startServer() {
  try {
    await db.connect();
    console.log("Connected to the database successfully");

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (e) {
    console.log("Error connecting to the database:", e);
  }
}

startServer();
