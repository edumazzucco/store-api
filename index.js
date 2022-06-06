import express from "express";
import cors from "cors";
import winston from "winston";
import clientsRouter from "./clients.route";
import suppliersRouter from "./suppliers.route";
import salesRouter from "./sales.route";
import productsRouter from "./products.route";
import res from "express/lib/response";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "info",
  format: combine(label({ label: "app" }), timestamp(), myFormat),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/client", clientsRouter);
app.use("/product", productsRouter);
app.use("/supplier", suppliersRouter);
app.use("/sale", salesRouter);
app.use((err, req, res) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
