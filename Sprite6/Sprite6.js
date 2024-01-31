/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 290.48070897897895,
        y: 187.69069444444517
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.scroll = 10;
    this.stage.vars.scrolx = 0.1;
    this.goto(0, 0);
    this.moveBehind();
    this.moveAhead(1);
    this.effects.ghost = 50;
    while (true) {
      for (let i = 0; i < 10; i++) {
        yield* this.wait(this.toNumber(this.stage.vars.scrolx));
        this.y += this.toNumber(this.stage.vars.scroll);
        yield;
      }
      this.goto(0, 0);
      yield;
    }
  }
}
