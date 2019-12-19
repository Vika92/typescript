import {Category} from "./enums";
import {Book, LibMgrCallback} from "./interfaces";
import {BookOrUndefined, BookProperties} from "./types";

function getAllBooks(): readonly Book[] {
  const books: readonly Book[] = <const>[
    {
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript,
      id: 1,
    },
    {
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript,
      id: 2,
    },
    {
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS,
      id: 3,
    },
    {
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript,
      id: 4
    }
  ];
  return books;
}

function logFirstAvailable(books: readonly any[] = getAllBooks()) {
  console.log(books.length);
  const availableBook = books.find(({ available }) => available);
  console.log(availableBook.title);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
  return getAllBooks()
    .filter(book => book.category === category)
    .map(({ title }) => title)
}

function logBookTitles(titles: string[]): void {
  console.log(titles);
}

function getBookAuthorByIndex(index: number): [string, string] {
  const { title, author } = getAllBooks()[index];
  return [title, author];

}

function calcTotalPages(): BigInt {
  const libraries =	<const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
  ];
  return libraries.reduce((totalPages, { books }) => totalPages += BigInt(books), BigInt(0));
}

function getBookByID(id: number): BookOrUndefined {
  return getAllBooks().find(book => book.id === id)
}

function createCustomerID(name: string, id: number): string {
  return `${name} ${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(name);
  if(age) {
    console.log(age);
  }
  if(city) {
    console.log(city);
  }
}

function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  console.log(customer);
  const titles = [];
  bookIDs.forEach(id => {
    const { available: isBookAvailable, title } = getBookByID(id) || {};
    if(isBookAvailable) {
      titles.push(title);
    }
  });
  return titles;
}

function getTitles(author: string): object[];
function getTitles(available: boolean): object[];
function getTitles(id: number, available: boolean): object[];

function getTitles(param1, param2?) {
  const books = getAllBooks();
  if(typeof param1 ==='string') {
    return books.filter(({ author }) => author === param1);
  }
  if(typeof param1 ==='boolean') {
    return books.filter(({ available }) => available === param1);
  }
  if(typeof param1 ==='number' && typeof param2 === 'boolean') {
    return books.filter(({ id, available }) => id === param1 && available === param2);
  }
  return [];
}

function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

function bookTitleTransform(title: any) {
  assertStringValue(title);
  return [...title].reverse().join();
}

function getBooksByCategory(category: Category, callback: LibMgrCallback) {
  setTimeout(() => {
    try {
      const bookTitles = getBookTitlesByCategory(category);
      if (bookTitles.length > 0) {
        callback(null, bookTitles);
      } else {
        throw new Error('No books found');
      }
    } catch(err) {
      callback(err, null);
    }
  }, 2000)
}

function logCategorySearch(err: Error, titles: string[]) {
  if(err) {
    console.log(`Error message: ${err.message}`);
  } else {
    console.log(titles);
  }
}

function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p: Promise<string[]> = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const bookTitles = getBookTitlesByCategory(category);
        if (bookTitles.length > 0) {
          resolve(bookTitles);
        } else {
          reject('No books found');
        }
      },
      2000)
  });
  return p;
}

async function logSearchResults(category: Category): Promise<any> {
  const bookTitles = await getBooksByCategoryPromise(category);
  console.log(bookTitles);
}

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

function getBookProp(book: Book, property: BookProperties): any {
  return book[property];
}

function purge<T>(inventory: T[]): T[] {
  return inventory.slice(2);
}

export {
  getAllBooks,
  logFirstAvailable,
  getBookTitlesByCategory,
  logBookTitles,
  getBookAuthorByIndex,
  calcTotalPages,
  getBookByID,
  createCustomerID,
  createCustomer,
  сheckoutBooks,
  getTitles,
  bookTitleTransform,
  getBooksByCategory,
  logCategorySearch,
  getBooksByCategoryPromise,
  logSearchResults,
  printBook,
  getBookProp,
  purge,
};
