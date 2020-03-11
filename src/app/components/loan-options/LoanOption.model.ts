export class LoanOption {
  constructor(name: string, description?: string) {
    this.name = name;
    // this.description = description ?? '';
    this.description = description;
  }
  public name: string;
  public description: string;
}
