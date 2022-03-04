const ajvInstance = require('./ajv-instance');

const schema = {
  type: 'object',
  properties: {
    region:{type: 'string'},
    district:{type: 'string'},
    date:{type: 'string'},
    HEALTH_FACILITY_TYPE:{type: 'string'},
    HEALTH_FACILITY_OWNERSHIP:{type: 'string'},
    HEALTH_FACILITY_NAME :{type: 'string'},
    STAR_RATING:{type: 'string'},
  },
  required:  ['region','district','date','HEALTH_FACILITY_TYPE','HEALTH_FACILITY_OWNERSHIP','HEALTH_FACILITY_NAME' ,'STAR_RATING'],
};

module.exports = ajvInstance.compile(schema);

// https://json-schema.org/understanding-json-schema/reference/string.html#dates-and-times
// https://github.com/ajv-validator/ajv/issues/242
// https://github.com/ajv-validator/ajv/issues/65
// https://ajv.js.org/options.html

// https://ajv.js.org/guide/formats.html


    
