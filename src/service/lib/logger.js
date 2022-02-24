'use strict';

const pino = require(`pino`);
const {ENV} = require(`../config`);

const LOG_FILE = `./logs/api.log`;
const isDevMode = process.env.NODE_ENV === ENV.DEVELOPMENT;
const defaultLogLevel = isDevMode ? `info` : `error`;
const logDestination = isDevMode ? process.stdout : pino.destination(LOG_FILE);

const logger = pino(
    {
      name: `base-logger`,
      level: process.env.LOG_LEVEL || defaultLogLevel,
      prettyPrint: isDevMode,
    },
    logDestination
);

module.exports = {
  logger,
  getLogger(options = {}) {
    return logger.child(options);
  }
};
