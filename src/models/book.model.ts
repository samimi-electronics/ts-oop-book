import IBook from '../interfaces/book.interface'

export default class BookModel {
  private name: string
  private author: string

  constructor() {
    this.name = ''
    this.author = ''
  }

  getName() {
    return this.name
  }

  setName(name: string) {
    this.name = name
  }

  getAuthor() {
    return this.author
  }

  setAuthor(author: string) {
    this.author = author
  }

  details(): IBook {
    return { name: this.name, author: this.author }
  }
}