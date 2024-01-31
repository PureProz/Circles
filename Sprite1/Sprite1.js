/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Paddle", "./Sprite1/costumes/Paddle.svg", {
        x: 158.57485703710813,
        y: 52.21265186734911
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Aimbot" },
        this.whenIReceiveAimbot
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      this.direction = this.direction - 180;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(0, 0);
    while (true) {
      if (this.compare(this.stage.vars.score, this.stage.vars.record) > 0) {
        this.stage.vars.record = this.stage.vars.score;
      }
      yield;
    }
  }

  *whenIReceiveAimbot() {
    while (true) {
      while (true) {
        while (true) {
          while (true) {
            while (true) {
              while (true) {
                this.direction = this.radToScratch(
                  Math.atan2(
                    this.sprites["Sprite2"].y - this.y,
                    this.sprites["Sprite2"].x - this.x
                  )
                );
                this.direction = this.direction - 180;
                yield;
              }
              yield;
            }
            yield;
          }
          yield;
        }
        yield;
      }
      yield;
    }
  }
}
