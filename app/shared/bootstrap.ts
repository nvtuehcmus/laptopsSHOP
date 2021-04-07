import Ajv from "ajv";
import dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV ? `.${process.env.NODE_ENV}.env` : ".env",
});
import { MongoClient } from "mongodb";
import db from "./config/db";
import validator from "./config/validation";
declare global {
  namespace NodeJS {
    interface Global {
      db: MongoClient;
      validator: Ajv;
    }
  }
}
global.db = db;
global.validator = validator;
