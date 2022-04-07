import { Pokemon } from './pokemon';
import { WaterPokemonCreator } from './waterPokemonCreator';

/**
 * Pokemon Creator abstract class
 */
export abstract class pokemonCreator {
  /**
   * Factory abstract method
   */
  public abstract factoryMethod(): Pokemon;

  /**
   * print Method
   * @returns prints pokemon name
   */
  public print(): string {
    const pokemon: Pokemon = this.factoryMethod();
    return `Se ha creado el pokemon llamado ${pokemon.getName()}`;
  }
}

/**
 * Client Code. It takes a pokemon creator type and execute print method
 * @param pokemon Pokemon Creator type
 */
function clientCode(pokemon: pokemonCreator) {
  console.log(pokemon.print());
}

clientCode(new WaterPokemonCreator('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500));