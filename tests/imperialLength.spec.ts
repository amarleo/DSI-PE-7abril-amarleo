import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from '../src/imperialLength';

const example1 = new ImperialLength(35);
const example2 = new ImperialLength(400);
const example3 = new ImperialLength(63360);

describe('ImperialLength Class Tests', () => {
  it('getLength getter', () => {
    expect(example1.getLength()).to.be.eql(35);
    expect(example2.getLength()).to.be.eql(400);
  });
  it('toFt  method', () => {
    expect(example1.toFt()).to.be.eql(3);
    expect(example2.toFt()).to.be.eql(33);
  });
  it('toYd method', () => {
    expect(example3.toYd()).to.be.eql(1760);
  });
  it('toMillas method', () => {
    expect(example3.toMillas()).to.be.eql(1);
  });
});
