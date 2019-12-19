import {Librarian} from "../interfaces";

export class UniversityLibrarian implements Librarian {
  department: string;
  name: string;
  email: string;
  constructor() {}
  assistCustomer(custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }
}