const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for Scheduler daily event
* @returns {object} result Your return value
*/
module.exports = async () => {
  let result = {};

  result = await lib.airtable.records['@0.2.1'].create({
    table: `Scheduled Runs`,
    fields: {
      'Run Date': `${new Date().toISOString()}`,
      'Run Type': `Daily`
    }
  });

  return result;
};