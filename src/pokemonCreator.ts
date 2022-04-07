import { Pokemon } from './pokemon';

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
    const pokemon = this.factoryMethod();
    return `Se ha creado el pokemon llamado ${pokemon.getName()}` +
    ` que es de tipo ${pokemon.getType()}`;
  }
}
