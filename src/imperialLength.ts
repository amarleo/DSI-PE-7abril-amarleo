export class ImperialLength {
  constructor(private length: number = 0, private unit: string = '') {
  }

  getLength(): number {
    return this.length;
  }
  getUnit(): string {
    return this.unit;
  }
}
