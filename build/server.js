"use strict";
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
const db_service_1 = require("./services/db.service");
const book_service_1 = require("./services/book.service");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookID = req.params.id;
    const bookService = new book_service_1.BookService();
    try {
        const _book = yield bookService.getOneByID(bookID);
        res.json({ status: 200, book: _book });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ status: 400, message: 'No book found' });
    }
}));
app.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookID = req.params.id;
    const bookService = new book_service_1.BookService();
    try {
        yield bookService.deleteByID(bookID);
        res.json({ status: 200, message: 'Book Deleted' });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: 'Book not found' });
    }
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookService = new book_service_1.BookService();
    try {
        const books = yield bookService.getAll();
        res.json({ status: 200, books });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ status: 500, message: 'Error finding books' });
    }
}));
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookInformation = { name: req.body.name, author: req.body.author };
    const bookService = new book_service_1.BookService();
    try {
        const createdBook = yield bookService.create(bookInformation);
        res.status(201).json({ status: 201, userID: createdBook._id });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: 'User not created' });
    }
}));
db_service_1.dbclient.connect()
    .then(() => {
    console.log('Connected to DB');
    app.listen(3000, () => console.log('Server started'));
})
    .catch(err => console.log(err));
//# sourceMappingURL=server.js.map