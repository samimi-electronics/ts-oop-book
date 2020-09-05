"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor() {
        this.name = '';
        this.author = '';
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }
    details() {
        return { name: this.name, author: this.author };
    }
}
exports.default = BookModel;
//# sourceMappingURL=book.model.js.map