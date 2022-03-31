import {ImperialLength} from './imperialLength';
import {MetricalLength} from './metricalLength';

export class Adapter extends ImperialLength {
  constructor(private service: MetricalLength) {
    super();
  }
  getData(): string {
    return `${this.service.getLength()}`;
  }
}
