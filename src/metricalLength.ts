type metricalUnit = 'cm' | 'm' | 'km';

export class MetricalLength {
  constructor(private length: number = 0, private unit: metricalUnit) {
  }

  getLength(): number {
    return this.length;
  }
  getUnit(): string {
    return this.unit;
  }
}
