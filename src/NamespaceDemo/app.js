/// <reference_path="utility-functions.ts" />
var maxBooks = Utility.maxBookAllowed(15);
console.log(4, maxBooks);
var util = Utility.Fees;
var result = util.calculateLateFee(10);
console.log(result);
//     abstract class ReferenceItem {
//  //title: string;
//  //year: number;
//
//  // constructor(newTitle: string, newYear: number) {
//  //  this.title = newTitle;
//  // }
//  abstract printCitation(): void;
//
//  private _publisher: string;
//
//     //  this.year = newYear;
//  static department: string = 'Literature';
//
//  constructor(public title: string, protected year: number) {}
//     printItem() {
//   console.log(`${this.title} was published in ${this.year} at ${ReferenceItem.department}`);
//  }
//
//  get publisher(): string {
//   return this._publisher.toUpperCase();
//  }
//
//  set publisher(newPublisher: string) {
//   this._publisher = newPublisher;
//  }
// }
//
// class Encyclopedia extends ReferenceItem {
//  constructor(title: string, year: number, public edition: number) {
//   super(title, year);
//  }
//  printItem() {
//   super.printItem();
//   console.log(`Edition: ${this.edition}`);
//  }
//  printCitation() {
//   console.log(`${this.title} – ${this.year}`);
//  }
// }
// const refBook = new Encyclopedia('dfgvdf', 2019, 5);
// refBook.printCitation();
//
//
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Vasya');
