import { Random, RandomRange, RandomZeroTo } from "../utils/Data.js";

export class Pokemon {
  //Crítico 6,5
  constructor(
    id,
    name,
    type1,
    type2,
    total,
    hp,
    attack,
    defense,
    spAtk,
    spDef,
    speed,
    generation,
    legendary,
    mega,
    enemy,
    shiny,
    moveSet,
    lvl
  ) {
    this.id = parseInt(id);
    this.name = name;
    this.type1 = type1;
    this.type2 = type2 || null; // Type 2 is optional
    this.total = total;
    this.hp = hp;
    this.totalHp = hp;
    this.attack = attack;
    this.defense = defense;
    this.spAtk = spAtk;
    this.spDef = spDef;
    this.speed = speed;
    this.generation = generation;
    this.legendary = legendary;
    this.mega = mega;
    this.enemy = enemy;
    this.shiny = shiny;
    this.moveSet = moveSet;
    this.lvl = lvl;
  }

  //Genera estadísticas aleatorias del pokemon
  setRandomStats(){
    this.shiny = Random() < 0.002;
    this.lvl = RandomRange(80,90) + 10;
  }

  hasSecondType(){
    return this.type2 != null;
  }

  // Método para mostrar estadísticas completas
  getStats() {
    return {
      ID: this.id,
      Name: this.name,
      Type1: this.type1,
      Type2: this.type2,
      Total: this.total,
      HP: this.hp,
      Attack: this.attack,
      Defense: this.defense,
      SpAtk: this.spAtk,
      SpDef: this.spDef,
      Speed: this.speed,
      Generation: this.generation,
      Legendary: this.legendary,
      Shiny: this.shiny,
      Mega: this.mega,
      MoveSet: this.moveSet,
      Lvl: this.lvl
    };
  }

  static copy(pokemon){
    return new Pokemon(pokemon.id,
        pokemon.name,
        pokemon.type1,
        pokemon.type2,
        pokemon.total,
        pokemon.hp,
        pokemon.attack,
        pokemon.defense,
        pokemon.spAtk,
        pokemon.spDef,
        pokemon.speed,
        pokemon.generation,
        pokemon.legendary,
        pokemon.mega,
        pokemon.enemy,
        pokemon.shiny,
        pokemon.moveSet,
        pokemon.lvl);
  }
}