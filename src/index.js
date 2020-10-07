const Colors = require('colors');
const moment = require('moment');

/**
 * @return this
 */
const newLine = () => {
  console.log('');
  return this;
};

/**
 * @param msg
 * @return this
 */
const info = (msg) => {
  console.log(
    Colors.bold(Colors.blue('[Info]')),
    Colors.cyan(moment().format('DD/MM/YYYY-HH:mm:ss')),
    Colors.bold(Colors.white(`* ${msg}`)),
  );
  return this;
};

/**
 * @param msg
 * @return this
 */
const ok = (msg) => {
  console.log(
    Colors.bold(Colors.green('[Success]')),
    Colors.cyan(moment().format('DD/MM/YYYY-HH:mm:ss')),
    Colors.bold(Colors.white(`* ${msg}`)),
  );
  return this;
};

/**
 * @param msg
 * @return this
 */
const war = (msg) => {
  console.log(
    Colors.bold(Colors.yellow('[Alerta]')),
    Colors.cyan(moment().format('DD/MM/YYYY-HH:mm:ss')),
    Colors.bold(Colors.white(`* ${msg}`)),
  );
  return this;
};

/**
 * @param msg
 * @return this
 */
const err = (msg) => {
  console.log(
    Colors.bold(Colors.red('[Error]')),
    Colors.cyan(moment().format('DD/MM/YYYY-HH:mm:ss')),
    Colors.bold(Colors.white(`* ${msg}`)),
  );
};

/**
 * @param msg
 * @return this
 */
const log = (msg) => {
  console.log(
    Colors.bold(Colors.grey('[Log]')),
    Colors.cyan(moment().format('DD/MM/YYYY-HH:mm:ss')),
    Colors.bold(Colors.white(`* ${msg}`)),
  );
};

const Log = {
  newLine,
  info,
  war,
  err,
  log,
  ok,
}

module.exports = Log;
