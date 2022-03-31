import 'mocha';
import {expect} from 'chai';
import {Adapter} from '../src/adapter';
import {MetricalLength} from '../src/metricalLength';

const metrical = new MetricalLength(25);
const adapter = new Adapter(metrical);

describe('MetricalLength Class Tests', () => {
  it('getLength getter', () => {
    expect(adapter.getData()).to.be.eql(63.5);
  });
});
