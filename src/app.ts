// import express, { Application, Request, Response } from "express";
// const app: Application = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Welcome to the Express App!");
// });

// export default app;

import express from "express";
import bookRoutes from "./app/routes/bookRoutes";
import borrowRoutes from "./app/routes/borrowRoutes";

const app = express();

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

// Error handler fallback
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: err.message || err,
    });
  }
);

export default app;
