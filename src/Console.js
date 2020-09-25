import Colors from 'colors';
import moment from 'moment';

class Console {
  /**
   * @return this
   */
  newLine () {
    console.log("");
    return this;
  }

  /**
   * @param msg
   * @return this
   */
  info (msg) {
    console.log(
      Colors.bold(Colors.blue('[Info]')),
      Colors.cyan(moment.utc().format('DD/MM/YYYY-HH:mm:ss')),
      Colors.bold(Colors.white(`* ${msg}`)),
    );
    return this;
  }

  /**
   * @param msg
   * @return this
   */
  ok (msg) {
    console.log(
      Colors.bold(Colors.green('[Success]')),
      Colors.cyan(moment.utc().format('DD/MM/YYYY-HH:mm:ss')),
      Colors.bold(Colors.white(`* ${msg}`)),
    );
    return this;
  }

  /**
   * @param msg
   * @return this
   */
  war (msg) {
    console.log(
      Colors.bold(Colors.yellow('[Alerta]')),
      Colors.cyan(moment.utc().format('DD/MM/YYYY-HH:mm:ss')),
      Colors.bold(Colors.white(`* ${msg}`)),
    );
    return this;
  }

  /**
   * @param msg
   * @return this
   */
  err (msg) {
    console.log(
      Colors.bold(Colors.red('[Error]')),
      Colors.cyan(moment.utc().format('DD/MM/YYYY-HH:mm:ss')),
      Colors.bold(Colors.white(`* ${msg}`)),
    );
    return this;
  }

  /**
   * @param msg
   * @return this
   */
  log (msg) {
    console.log(
      Colors.bold(Colors.grey('[Log]')),
      Colors.cyan(moment.utc().format('DD/MM/YYYY-HH:mm:ss')),
      Colors.bold(Colors.white(`* ${msg}`)),
    );
    return this;
  }
}

export default new Console();
