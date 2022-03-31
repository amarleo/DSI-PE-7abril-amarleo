import 'mocha';
import {expect} from 'chai';
import {MetricalLength} from '../src/metricalLength';

const example1 = new MetricalLength(35, 'km');
const example2 = new MetricalLength(400, 'cm');
describe('MetricalLength Class Tests', () => {
  it('getLength getter', () => {
    expect(example1.getLength()).to.be.eql(35);
    expect(example2.getLength()).to.be.eql(400);
  });
  it('getUnit getter', () => {
    expect(example1.getUnit()).to.be.eql('km');
    expect(example2.getUnit()).to.be.eql('cm');
  });
});
