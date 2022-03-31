export class MetricalLength {
  constructor(private length: number = 0, private unit: string = '') {
  }

  getLength(): number {
    return this.length;
  }
  getUnit(): string {
    return this.unit;
  }
}
