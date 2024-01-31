/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pngtree-abstract-dark-blue-gaming-background-design-image_505148 (1)",
        "./Stage/costumes/pngtree-abstract-dark-blue-gaming-background-design-image_505148 (1).svg",
        { x: 322.07207000000017, y: 263.51351499999987 }
      )
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.speed = 50.5;
    this.vars.score = 177;
    this.vars.spacing = 1.3;
    this.vars.x = 0;
    this.vars.y = 0;
    this.vars.size = 250;
    this.vars.yourNumber = 177;
    this.vars.record = 1035;
    this.vars.scroll = 364;
    this.vars.scrolx = -1.6700000000000013;
  }

  *whenGreenFlagClicked() {
    this.costume =
      "pngtree-abstract-dark-blue-gaming-background-design-image_505148 (1)";
  }
}
