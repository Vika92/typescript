// Task 02
// import {
//   getAllBooks,
//   getBookTitlesByCategory,
//   logFirstAvailable,
//   logBookTitles,
//   getBookAuthorByIndex,
//   calcTotalPages
// } from './functions';
// import {Category} from "./enums";
//
//
// Task 02.01
// const books = getAllBooks();
// logFirstAvailable(books);
// const bookTitles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(bookTitles);
// console.log(getBookAuthorByIndex(0));
// console.log(calcTotalPages());

// Task 03
// import {
//   getAllBooks,
//   getBookByID,
//   createCustomerID,
//   createCustomer,
//   getBookTitlesByCategory,
//   logFirstAvailable, сheckoutBooks, getTitles, bookTitleTransform
// } from "./functions";
// import {Category} from "./enums";
// // Task 03.01
// getAllBooks()
//   .filter(({ category }) => category === Category.JavaScript)
//   .forEach(({ title }) => console.log(title));
// console.log(getBookByID(1));
// // Task 03.02
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string =
//   (name: string, id: number) => `${name} ${id}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Vasya', 25));
// // Task 03.03
// createCustomer('Vasya');
// createCustomer('Vasya', 25);
// createCustomer('Vasya', 25, 'Kharkiv');
// getBookTitlesByCategory();
// logFirstAvailable();
// const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);
// // Task 03.04
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);
// // Task 03.05
// console.log(bookTitleTransform('title'));
// bookTitleTransform(1);

// Task 04
// import {Category} from "./enums";
// import {getBookProp, printBook} from "./functions";
// import {Author, Book, Logger, Librarian, Logger} from "./interfaces";
// // Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged: reason => console.log(`Damaged: ${reason}`),
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');
// // Task 04.02
// let logDamage: Logger;
// let logger = data => console.log(data);
// logDamage: Logger = logger;
// logDamage('data');
// // Task 04.03
// const favoriteAuthor: Author = {
//   name: 'Vasya',
//   email: 'vasya@gmail.com',
//   numBooksPublished: 1,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Vasya',
//     email: 'vasya@gmail.com',
//     department: 'Literature',
//     assistCustomer: custName => console.log(custName),
// };
// // Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };
// console.log(offer?.book?.magazine);
// // Task 04.05
// console.log(getBookProp(myBook, 'title'));
// console.log(getBookProp(myBook, 'markDamaged'));


// Task 05
// import {ReferenceItem} from "./classes/reference-item";
// import RefBook from "./classes/encyclopedia";
// import {Librarian, Logger} from "./interfaces";
// import {UniversityLibrarian} from "./classes/university-librarian";
// import {BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook} from "./types";

// Task 05.01
// const ref = new ReferenceItem('Title', 2010);
// ref.printItem();
// ref.publisher = 'Publisher';
// console.log(ref.publisher);
// Task 05.02
// const refBook: RefBook = new RefBook('Title2', 2015, 1);
// refBook.printItem();
// console.log(116, refBook);
// // Task 05.03
// refBook.printCitation();
// // Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Oleg';
// favoriteLibrarian.assistCustomer('Vova');
// // Task 05.05
// const personBook: PersonBook = {
//   name: 'Vasya',
//   email: 'vasya@ppam.com',
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
// };

// Task 06
// see NamespaceDemo
// Task 06.05
import('./classes').then(data => {
  const render = new data.Render();
  console.log(render);
});

// Task 07
// import {Category} from "./enums";
// import {createCustomer, purge} from "./functions";
// import {Shelf} from "./classes";
// // Task 07.01
// const inventory = [
//   { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//   { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//   { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//   { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// console.log(purge(inventory));
// console.log(purge([1, 2, 3, 4, 5]));
// // Task 07.02
// const bookShelf = new Shelf();
// inventory.forEach(element => bookShelf.add(element));
// console.log(bookShelf);
// const magazines = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf = new Shelf();
// magazines.forEach(element => magazineShelf.add(element));
// console.log(magazineShelf);
// // Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// // Task 07.04
// const booksRequired: BookRequiredFields = {
//   title: 'title',
//   id: 1,
//   pages: 1,
//   author: 'string',
//   available: true,
//   category: Category.JavaScript,
//   markDamaged: () => {},
// };
// const updatedBook: UpdatedBook = {
//   title: 'title',
// };
// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);


// Task 08
// import Shelf1 from "./shelf";
// import {Book} from "./interfaces";
// import {BookRequiredFields} from "./types";
// import {UniversityLibrarian} from "./classes";


// const bookShelf: Shelf1<Book> = new Shelf1<Book>();
// books.forEach(book => bookShelf.add(book));
// bookShelf.printTitles();

// const book: BookRequiredFields = {
//     id: 1,
//     title: 'title',
//     author: 'unknown',
//     available: false,
//     category: 1,
//     pages: 1
// };

// const params: Parameters<CreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

//task 08.02
// const flibrarian = new UniversityLibrarian();
// flibrarian.name = 'Anna';
// flibrarian['printLibrarian']();

//task 08.03
// const flibrarian = new UniversityLibrarian();
// flibrarian.assistFaculty = null;
// flibrarian.teachCommunity = null;

//task 08.04

//Task 08.06
// import {UniversityLibrarian} from "./classes";
//
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);


// Task 09
// import { Category } from "./enums";
// import {getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults} from './functions';
//
// // Task 09.01
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.CSS, logCategorySearch);
// // Task 09.02
// getBooksByCategoryPromise(Category.JavaScript)
//   .then(data => data.length)
//   .then(data => console.log(data))
//   .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.CSS)
//   .then(data => data.length)
//   .then(data => console.log(data))
//   .catch(reason => console.log(reason));
// // Task 09.03
// logSearchResults(Category.JavaScript).catch(err => console.log(err));
