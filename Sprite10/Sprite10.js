/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite10/costumes/costume1.svg", {
        x: 665.5645,
        y: 384.9568875
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.visible = true;
      this.moveAhead();
      this.effects.ghost = 100;
      yield;
    }
  }
}
