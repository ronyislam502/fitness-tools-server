"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors";
const app = (0, express_1.default)();
// app.use(express.json());
// app.use(cors());
// app.use("/api/v1/students", StudentRouters);
const getController = (req, res) => {
  res.send("First Project");
};
app.get("/", getController);
// console.log(process.cwd());
exports.default = app;
