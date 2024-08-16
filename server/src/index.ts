import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://<username>:<password>@fintracker.wl0fh.mongodb.net/";

mongoose
.connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB !!"))
.catch((err: Error) => console.error(err));

app.listen(port, () =>
    console.log(`Server running on port ${port}`)
);