

export default class InnohubTest {

  constructor() {

  }

  /**
   * 
   * @param {string} input string which goings to reverse
   * @returns {string} string reversed
   */
  reverse(input = '') {
    let output = [];
    for (let i = input.length; i >= 0; i--) {
      output.push(input[i]);
    }
    output = output.join('');
    return output;
  }

  /**
 * 
 * @param {*} obj
 * @param {string} obj.input string which goings to reverse
 * @returns {boolean} done
 */
  reverseSameObject(obj) {
    let output = [];
    for (let i = obj.input.length; i >= 0; i--) {
      output.push(obj.input[i]);
    }
    output = output.join('');
    obj.input = output;
    return true;
  }

  /**
   * 
   * @param {*} obj 
   */
  fold(obj) {
    obj.result = 0;
    const recursive = (item, key) => {
      if (Array.isArray(item) || (typeof item !== 'number' && typeof item !== 'object')) {
        throw new Error(`${key} (${JSON.stringify(item)}) is not a number`);
      }
      if (typeof item === 'object') {
        return Object.keys(item)
          .forEach(i => recursive(item[i], i));
      }
      switch (key) {
        case 'bar':
        case 'result':
          break;
        default:
          obj.result += item;
          break;
      }
    };
    recursive(obj);
    return true;
  }

  plusIndex(n) {
    let output = 0;
    for (let i = 1; i <= n; i++) {
      output += i;
    }
    return output;
  }

}
