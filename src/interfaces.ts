interface Book {
  title: string;
  pages?: number;
  id: number;
  author: string;
  available: boolean;
  category: number;
  markDamaged?: DamageLogger;
}

interface LibMgrCallback {
  (err: Error, titles: string[]): void;
}

interface DamageLogger {
  (string): void
}

interface Person {
  name: string;
  email: string;
}
interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void
}

interface Magazine {
  title: string;
  publisher: string;
}

interface ShelfItem {
  title: string;
}

export { Book, Person, Author, LibMgrCallback, DamageLogger as Logger, Librarian, Magazine, ShelfItem };
