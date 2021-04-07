import express from "express";
import { ValidateFunction } from "ajv/lib/types/index";
export default (validate: ValidateFunction) => {
  return (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const valid = validate(req.body);
    if (valid) {
      return next();
    }
    return res.send({ data: null, error: validate.errors });
  };
};
