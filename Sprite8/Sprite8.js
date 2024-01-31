/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 100.16159999999999,
        y: 28.974140000000006
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Yl" }, this.whenIReceiveYl),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "Quit" }, this.whenIReceiveQuit)
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
          this.broadcast("Now");
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
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

  *whenIReceiveQuit() {
    this.visible = false;
  }
}
