import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/imperialLength';

const example1 = new ImperialLength(35, 'yd');
const example2 = new ImperialLength(400, 'plg');
describe('ImperialLength Class Tests', () => {
  it('getLength getter', () => {
    expect(example1.getLength()).to.be.eql(35);
    expect(example2.getLength()).to.be.eql(400);
  });
  it('getUnit getter', () => {
    expect(example1.getUnit()).to.be.eql('yd');
    expect(example2.getUnit()).to.be.eql('plg');
  });
});
