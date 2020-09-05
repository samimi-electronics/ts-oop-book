"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const db_service_1 = require("./db.service");
const book_model_1 = __importDefault(require("../models/book.model"));
const shortid = __importStar(require("shortid"));
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
class BookService {
    constructor() {
        this.book = new book_model_1.default();
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            this.book.setName(book.name);
            this.book.setAuthor(book.author);
            try {
                const db = db_service_1.dbclient.db('book_db');
                const collection = db.collection('books');
                const doc = { _id: shortid.generate(), name: this.book.getName(), author: this.book.getAuthor() };
                return (yield collection.insertOne(doc)).ops[0];
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getOneByID(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = db_service_1.dbclient.db('book_db');
                const collection = db.collection('books');
                return yield collection.findOne({ _id });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getAll() {
    }
    delete() {
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map