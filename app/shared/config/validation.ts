import Ajv from "ajv/dist/jtd"; // validate data type from client
import addFormats from "ajv-formats";
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
export default ajv;
