import {Librarian} from "../interfaces";
import {logger, logMethod, logParameter, sealed, writable, format} from "../decorators";

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Librarian {
  department: string;
  @format()
  name: string;
  email: string;
  constructor() {}

  @logMethod
  assistCustomer(@logParameter custName: string) {
    console.log(`${this.name} is assisting ${custName}`);
  }
  @writable(true)
  assistFaculty() {
      console.log('Assisting faculty');
  }
  @writable(false)
  teachCommunity() {
      console.log('Teaching community');
  }
}
