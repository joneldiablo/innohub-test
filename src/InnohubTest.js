
import express from "express";
import Knex from "knex";
import { Model } from 'objection';

// own libriry
import AbstractController from "abstract-controller";
import allModels from "./api/model/innohub-test";

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

  apiRest() {
    const PORT = 4000;
    let app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Initialize knex.
    const knex = Knex({
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'innohub-test'
      }
    });
    Model.knex(knex);
    // Right way: create every controller
    Object.keys(allModels).forEach(modelName => {
      let ModelElement = allModels[modelName];
      let controller = new AbstractController(ModelElement);
      let { tableName } = ModelElement;
      console.log(tableName);
      app.get('/' + tableName, (req, res, next) => { controller.get(req, res, next) });
      app.get(`/${tableName}/:ID`, (req, res, next) => { controller.getByID(req, res, next) });
      app.post('/' + tableName, (req, res, next) => { controller.set(req, res, next) });
      app.patch('/' + tableName, (req, res, next) => { controller.update(req, res, next) });
      app.delete('/' + tableName, (req, res, next) => { controller.delete(req, res, next) });
    });

    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
  }
}
