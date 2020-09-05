import { dbclient } from './db.service';
import BookModel from '../models/book.model';
import * as shortid from 'shortid';
import IBook from '../interfaces/book.interface';

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@')

export class BookService {
  private book: BookModel = new BookModel()
  private db = dbclient.db('book_db')
  private collection = this.db.collection('books')

  constructor() { }

  public async create(book: IBook) {
    this.book.setName(book.name)
    this.book.setAuthor(book.author)
    try {
      const doc = { _id: shortid.generate(), name: this.book.getName(), author: this.book.getAuthor() }
      return (await this.collection.insertOne(doc)).ops[0]
    } catch (err) {
      return err
    }
  }

  public async getOneByID(id: string) {
    const query = { _id: id }
    try {
      return await this.collection.findOne(query)
    } catch (err) {
      return err
    }
  }

  public async getAll() {
    const books: Array<IBook> = []
    try {
      const cursor = this.collection.find({})
      await cursor.forEach(book => books.push(book))
      return books
    } catch (err) {
      return err
    }
  }

  public async deleteByID(id: string) {
    const query = { _id: id }
    try {
      return this.collection.deleteOne(query)
    } catch (err) {
      return err
    }
  }

}