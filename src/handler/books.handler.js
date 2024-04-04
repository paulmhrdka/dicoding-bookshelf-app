import { nanoid } from 'nanoid';
import { books } from '../data/books.js';
import { HTTP_STATUS_CODE } from '../common/constants.js';

const addBookHandler = (req, h) => {
  const { title, tags, body } = req.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newBook = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'Success',
      message: 'Successfully to create book',
      data: {
        bookId: id,
      },
    });

    response.code(HTTP_STATUS_CODE.CREATED);
    return response;
  }

  const response = h.response({
    status: 'Failed',
    message: 'Failed to create book',
  });

  response.code(HTTP_STATUS_CODE.BAD_REQUEST);
  return response;
};

const getAllBookHandler = (_, h) => {
  const response = h.response({
    status: 'Success',
    message: 'Successfully to get all books',
    data: books,
  });

  response.code(HTTP_STATUS_CODE.OK);
  return response;
};

const findBookHandler = (req, h) => {
  const { id } = req.params;

  const book = books.find((n) => n.id === id);

  if (book) {
    const response = h.response({
      status: 'Success',
      message: 'Successfully to get book',
      data: book,
    });

    response.code(HTTP_STATUS_CODE.OK);
    return response;
  }

  const response = h.response({
    status: 'Failed',
    message: 'Book not found!',
    data: book,
  });

  response.code(HTTP_STATUS_CODE.NOT_FOUND);
  return response;
};

export { addBookHandler, getAllBookHandler, findBookHandler };
