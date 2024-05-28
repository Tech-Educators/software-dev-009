```js
// there are 2 players
// each player has health, attack, defense
// each player can attack the other player
// when they attack, they remove the attack value from the opponents health
// and they themelves lose health equal the oponents defense value

/*
for example
JOE
HEALTH 6
ATT 3
DEF 2

TIM
HEALTH 9
ATT 2
DEF 4

JOE attacks TIM
TIM loses 3 HP
JOE loses 4 HP
*/

class Player {
  constructor(name, health, att, def) {
    this.name = name;
    this.health = health;
    this.att = att;
    this.def = def;
  }

  makeAttack(defender) {
    console.log(`${this.name} attacks ${defender.name}`);
    // remove the opponent health
    defender.health = defender.health - this.att;
    // remove our own health
    this.health = this.health - defender.def;
  }
}

const tim = new Player("Tim", 9, 2, 4);
const joe = new Player("Joe", 6, 3, 2);

console.log(tim);
console.log(joe);

// tim makes an attack
tim.makeAttack(joe);

console.log(tim);
console.log(joe);
```
