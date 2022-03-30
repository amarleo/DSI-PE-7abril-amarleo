import 'mocha';
import {expect} from 'chai';
import {index} from '../src/index';

describe('Index Class Tests', () => {
  it('Index method', () => {
    expect(index()).to.be.eql('prueba');
  });
});
