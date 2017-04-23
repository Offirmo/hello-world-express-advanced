"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const client1_1 = require("../apps/client1");
const defaultDependencies = {
    logger: console,
};
function factory(dependencies = {}) {
    const { logger } = Object.assign({}, defaultDependencies, dependencies);
    logger.log('Hello from a route!');
    const router = express.Router();
    router.use('/', client1_1.factory({ logger }));
    return router;
}
exports.factory = factory;
//# sourceMappingURL=index.js.map