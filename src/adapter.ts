import {ImperialLength} from './imperialLength';
import {MetricalLength} from './metricalLength';

export class Adapter extends ImperialLength {
  constructor(private service: MetricalLength) {
    super();
  }
  getData(): number {
    return this.service.getLength() * 2.54;
  }
}

const metrical = new MetricalLength(25);

function clientCode(data: number) {
  console.log(data);
}


const adapter = new Adapter(metrical);
clientCode(adapter.getData());
