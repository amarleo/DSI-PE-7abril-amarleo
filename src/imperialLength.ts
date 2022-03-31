export class ImperialLength {
  constructor(private length: number = 0) {
  }

  getLength(): number {
    return Math.round(this.length);
  }

  toFt(): number {
    return Math.round(this.length / 12);
  }

  toYd(): number {
    return Math.round(this.length / 36);
  }

  toMillas(): number {
    return Math.round(this.length / 63360);
  }
}
