import {ImperialLength} from './imperialLength';
import {MetricalLength} from './metricalLength';

/**
 * Adaptr class
 */
export class Adapter extends ImperialLength {
  constructor(private service: MetricalLength) {
    super();
  }
  /**
   * Transform plg into cm
   * @returns cms
   */
  getData(): number {
    return this.service.getLength() * 2.54;
  }
}

// const metrical = new MetricalLength(25);

// function clientCode(data: number) {
//   console.log(data);
// }

// const adapter = new Adapter(metrical);
// clientCode(adapter.getData());
