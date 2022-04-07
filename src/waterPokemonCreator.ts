import { Pokemon } from "./pokemon";
import { pokemonCreator } from "./pokemonCreator";
import { WaterPokemon } from './waterPokemon';

type PokemonType = 'Water';

/**
 * Water Pokemon Creator class
 */
export class WaterPokemonCreator extends pokemonCreator {
  name: string;
  height: number;
  weight: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  constructor(name: string, height: number, weight: number, type: PokemonType,
    attack: number, defense: number, speed: number, hp: number) {
    super();
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.hp = hp;
  }

  /**
   * factory method
   * @returns new Water Pokemon
   */
  public factoryMethod(): Pokemon {
    return new WaterPokemon(this.name, this.height, this.weight, this.type, this.attack, this.defense, this.speed, this.hp);
  }
}