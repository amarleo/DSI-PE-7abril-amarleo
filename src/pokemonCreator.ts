import { Pokemon } from './pokemon';

abstract class pokemonCreator {
  public abstract factoryMethod(): Pokemon;

  public print(): string {
    const pokemon = this.factoryMethod();
    return `Se ha creado el pokemon llamado ${pokemon.getName()}`;
  }
}

function clientCode(pokemon: pokemonCreator) {
  console.log(pokemon.print());
}
