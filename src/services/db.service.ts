import { dbConf } from './../config/db.conf';
import { MongoClient } from 'mongodb';

export const dbclient = new MongoClient(dbConf.uri, { useNewUrlParser: true, useUnifiedTopology: true })