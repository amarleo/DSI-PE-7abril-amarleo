type imperialUnit = 'plg' | 'ft' | 'yd' | 'milla';

export class ImperialLength {
  constructor(private length: number = 0, private unit: imperialUnit) {
  }

  getLength(): number {
    return this.length;
  }
  getUnit(): string {
    return this.unit;
  }
}
