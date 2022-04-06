/**
 * Imperial Length Class
 */
 export class ImperialLength {
  constructor(private length: number = 0) {
  }

  /**
   * gets length in plgs
   * @returns pulgs
   */
  getLength(): number {
    return Math.round(this.length);
  }

  /**
   * get number of feets
   * @returns number of feets
   */
  toFt(): number {
    return Math.round(this.length / 12);
  }

  /**
   * plg into Yd method
   * @returns number of yds
   */
  toYd(): number {
    return Math.round(this.length / 36);
  }

  /**
   * plg into millas method
   * @returns number of millas
   */
  toMillas(): number {
    return Math.round(this.length / 63360);
  }
}