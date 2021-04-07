import express from "express";
type RequestBody = {
  bar: string;
  foo: number;
};
export const postSampleRequest = async (
  req: express.Request<any, any, RequestBody>,
  res: express.Response
) => {
  return res.send({ data: req.body, error: 0 });
};
