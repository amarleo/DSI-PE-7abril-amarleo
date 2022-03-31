import 'mocha';
import {expect} from 'chai';
import {MetricalLength} from '../src/metricalLength';

const example1 = new MetricalLength(35);
const example2 = new MetricalLength(400);
describe('MetricalLength Class Tests', () => {
  it('getLength getter', () => {
    expect(example1.getLength()).to.be.eql(35);
    expect(example2.getLength()).to.be.eql(400);
  });
  it('toM method', () => {
    expect(example1.toM()).to.be.eql(0.35);
    expect(example2.toM()).to.be.eql(4);
  });
  it('toKm method', () => {
    expect(example1.toKm()).to.be.eql(0.035);
    expect(example2.toKm()).to.be.eql(0.4);
  });
});
