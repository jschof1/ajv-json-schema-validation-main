const Ajv = require('ajv');
const addFormats = require('ajv-formats');

//all errors - don't stop validating at first error -- validate everything

const ajvInstance = new Ajv({ allErrors: true });
addFormats(ajvInstance);

module.exports = ajvInstance;
