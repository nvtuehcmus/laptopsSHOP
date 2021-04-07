// type: https://ajv.js.org/json-type-definition.html#type-form
// format: https://github.com/ajv-validator/ajv-formats
export const SAMPLE_REQUEST = {
  optionalProperties: {
    bar: { type: "string" },
  },
  properties: {
    foo: { type: "int32" },
  },
};
export const SAMPLE_REQUEST_2 = {
  properties: {
    bar: { type: "string" },
    foo: { type: "int32" },
  },
};

export const USER_LOGIN = {
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", format: "password" },
  },
};
