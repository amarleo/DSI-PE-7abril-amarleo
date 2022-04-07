/**
 * @param PokemonType All pokemon types avaiables on this program
 */
 type PokemonType = 'Water' | 'Fire' | 'Grass' | 'Electric';

/**
 * Pokemon Interface
 */
export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  getName(): string;
  getType(): PokemonType;
}