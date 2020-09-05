import { dbclient } from './services/db.service';
import BookService from './services/book.service';
import express, { Request, Response } from 'express'
import cors from 'cors'
import IBook from './interfaces/book.interface';

const app = express()
app.use(cors())
app.use(express.json())

app.get('/:id', async (req: Request, res: Response) => {
  const bookID: string = req.params.id
  const bookService: BookService = new BookService()
  try {
    const _book = await bookService.getOneByID(bookID)
    res.json({ status: 200, book: _book })
  } catch (err) {
    console.log(err)
    res.status(400).json({ status: 400, message: 'No book found' })
  }
})

app.delete('/:id', async (req: Request, res: Response) => {
  const bookID: string = req.params.id
  const bookService: BookService = new BookService()
  try {
    await bookService.deleteByID(bookID)
    res.json({ status: 200, message: 'Book Deleted' })
  } catch (err) {
    res.status(400).json({ status: 400, message: 'Book not found' })
  }
})

app.get('/', async (req: Request, res: Response) => {
  const bookService: BookService = new BookService()
  try {
    const books: IBook[] = await bookService.getAll()
    res.json({ status: 200, books })
  } catch (err) {
    console.log(err)
    res.status(400).json({ status: 500, message: 'Error finding books' })
  }
})

app.post('/', async (req: Request, res: Response) => {
  const bookInformation: IBook = { name: req.body.name, author: req.body.author }
  const bookService: BookService = new BookService()
  try {
    const createdBook = await bookService.create(bookInformation)
    res.status(201).json({ status: 201, userID: createdBook._id })
  } catch (err) {
    res.status(400).json({ status: 400, message: 'User not created' })
  }
})

dbclient.connect()
  .then(() => {
    console.log('Connected to DB')
    app.listen(3000, (): void => console.log('Server started'))
  })
  .catch(err => console.log(err))

