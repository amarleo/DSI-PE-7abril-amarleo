/**
 * Metrical Length Class
 */
export class MetricalLength {
  constructor(private length: number = 0) {
  }

  /**
   * gets the length data
   * @returns number on cm
   */
  getLength(): number {
    return this.length;
  }

  /**
   * gets the meters
   * @returns transform cm into m
   */
  toM(): number {
    return this.length / 100;
  }

  /**
   * gets the kilometers
   * @returns transform cm into km
   */
  toKm(): number {
    return this.length / 1000;
  }
}
