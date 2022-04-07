import { Pokemon } from './pokemon';
import { WaterPokemonCreator } from './waterPokemonCreator';

export abstract class pokemonCreator {
  public abstract factoryMethod(): Pokemon;

  public print(): string {
    const pokemon: Pokemon = this.factoryMethod();
    return `Se ha creado el pokemon llamado ${pokemon.getName()}`;
  }
}

function clientCode(pokemon: pokemonCreator) {
  console.log(pokemon.print());
}

clientCode(new WaterPokemonCreator('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500));