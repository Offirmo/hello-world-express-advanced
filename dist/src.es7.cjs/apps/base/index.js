"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loggers_types_and_stubs_1 = require("@offirmo/loggers-types-and-stubs");
const defaultDependencies = {
    logger: loggers_types_and_stubs_1.serverLoggerToConsole,
};
function factory(dependencies = {}) {
    const { logger } = Object.assign({}, defaultDependencies, dependencies);
    logger.debug('Hello from base app!');
    const app = express.Router();
    app.get('/', (req, res) => {
        res.send('hello');
    });
    return app;
}
exports.factory = factory;
//# sourceMappingURL=index.js.map