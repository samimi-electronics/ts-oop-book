"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbclient = void 0;
const db_conf_1 = require("./../config/db.conf");
const mongodb_1 = require("mongodb");
exports.dbclient = new mongodb_1.MongoClient(db_conf_1.dbConf.uri, { useNewUrlParser: true, useUnifiedTopology: true });
//# sourceMappingURL=db.service.js.map