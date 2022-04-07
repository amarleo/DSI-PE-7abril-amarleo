import 'mocha';
import {expect} from 'chai';
import {WaterPokemon} from '../src/waterPokemon';

const Gyarados = new WaterPokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);

describe('Pokemon class tests', () => {
  describe('Pokemon Attributes must be accessibles', () => {
    it('Example 1: Gyarados', () => {
      expect(Gyarados.name).to.be.eql('Gyarados');
      expect(Gyarados.height).to.be.eql(6.5);
      expect(Gyarados.weight).to.be.eql(230);
      expect(Gyarados.type).to.be.eql('Water');
      expect(Gyarados.attack).to.be.eql(65);
      expect(Gyarados.defense).to.be.eql(60);
      expect(Gyarados.speed).to.be.eql(110);
      expect(Gyarados.hp).to.be.eql(500);
    });
  });
  describe('Pokemon Class getters', () => {
    it('getName method', () => {
      expect(Gyarados.getName()).to.be.eql('Gyarados');
    });
    it('getHeight method', () => {
      expect(Gyarados.getHeight()).to.be.eql(6.5);
    });
    it('getWeight method', () => {
      expect(Gyarados.getWeight()).to.be.eql(230);
    });
    it('getType method', () => {
      expect(Gyarados.getType()).to.be.eql('Water');
    });
    it('getAttack method', () => {
      expect(Gyarados.getAttack()).to.be.eql(65);
    });
    it('getDefense method', () => {
      expect(Gyarados.getDefense()).to.be.eql(60);
    });
    it('getSpeed method', () => {
      expect(Gyarados.getSpeed()).to.be.eql(110);
    });
    it('getHp method', () => {
      expect(Gyarados.getHp()).to.be.eql(500);
    });
  });
});
