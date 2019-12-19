import {sealed, logger, writable, format} from "./decorators";

// @logger
// @sealed('UniversityLibrarian')
// export class UniversityLibrarian {
//   @format() name: string;
//   email: string;
//   department: string;
//     assistCustomer: (custName: string) => void = (custName) => {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
//
//     @writable(true)
//     assistFaculty() {
//         console.log('Assisting faculty');
//     }
//
//     @writable(false)
//     teachCommunity() {
//         console.log('Teaching community');
//     }
// }
