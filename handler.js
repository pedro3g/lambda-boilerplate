require('dotenv/config');
const handler = require('./dist').default;
const { event, context } = require('./lambda.config');
const callback = require('./lib/callback');

const localMode = process.argv.includes('--local');

if (localMode) {
  handler(event, context, callback);
}

exports.handler = handler;
