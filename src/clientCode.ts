import { WaterPokemonCreator } from './waterPokemonCreator';
import { pokemonCreator } from './pokemonCreator';

/**
 * Client Code. It takes a pokemon creator type and execute print method
 * @param pokemon Pokemon Creator type
 */
 function clientCode(pokemon: pokemonCreator) {
  console.log(pokemon.print());
}

clientCode(new WaterPokemonCreator('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500));
