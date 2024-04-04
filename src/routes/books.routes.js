import {
  addBookHandler,
  findBookHandler,
  getAllBookHandler,
} from '../handler/books.handler.js';

export const bookRoutes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: findBookHandler,
  },
];
