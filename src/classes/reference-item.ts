import {timeout} from "../decorators";

export abstract class ReferenceItem {
  private _publisher: string;
  static department: string = 'Department1';
  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }

  abstract printCitation(): void;

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  @timeout(2000)
  printItem(): void {
    console.log(`${this.title} was published in ${this.year} in ${ReferenceItem.department}`);
  }
}
