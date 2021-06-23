import "reflect-metadata";
import express, { request } from "express";
import "./database";
import {router} from "./routes";

const app = express();

app.use(express.json())

app.use(router);

//http://localhost:5000
app.listen(5000, () => console.log("Server is running"));