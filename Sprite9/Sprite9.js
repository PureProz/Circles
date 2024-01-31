/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 56.409695,
        y: -27.322509999999994
      }),
      new Costume("costume2", "./Sprite9/costumes/costume2.svg", {
        x: 376.8768768768766,
        y: 252.25225225225222
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Yl" }, this.whenIReceiveYl),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Now" }, this.whenIReceiveNow)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveYl() {
    this.size = 100;
    this.visible = true;
    while (true) {
      if (this.mouse.down && this.touching("mouse")) {
        while (!!this.mouse.down) {
          yield;
        }
        if (this.touching("mouse")) {
          this.broadcast("Quit");
          this.costume = "costume2";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "costume1";
    this.moveAhead();
    while (true) {
      while (true) {
        if (this.touching("mouse")) {
          this.size += (120 - this.size) / 6;
        } else {
          this.size += (100 - this.size) / 6;
        }
        yield;
      }
      yield;
    }
  }

  *whenIReceiveNow() {
    this.visible = false;
  }
}
