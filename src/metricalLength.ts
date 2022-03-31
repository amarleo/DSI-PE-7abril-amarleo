export class MetricalLength {
  constructor(private length: number = 0) {
  }

  getLength(): number {
    return this.length;
  }

  toM(): number {
    return this.length / 100;
  }

  toKm(): number {
    return this.length / 1000;
  }
}
