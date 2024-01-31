/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 14.249999999999972,
        y: 13.666666666666686
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 97.44037500000002,
        y: 91.09720999999999
      })
    ];

    this.sounds = [
      new Sound("Ping Pong Hit", "./Sprite2/sounds/Ping Pong Hit.wav"),
      new Sound("Ping Pong Hit2", "./Sprite2/sounds/Ping Pong Hit2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Now" }, this.whenIReceiveNow),
      new Trigger(Trigger.BROADCAST, { name: "Quit" }, this.whenIReceiveQuit)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    while (!!this.touching(this.sprites["Sprite3"].andClones())) {
      this.move(this.toNumber(this.stage.vars.speed));
      yield;
    }
    this.costume = "costume2";
    this.goto(0, 0);
    this.broadcast("Yl");
    while (!(this.costumeNumber === 1)) {
      this.direction = 90;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = true;
    this.costume = "costume1";
    this.moveAhead();
    this.stage.vars.score = 0;
    this.stage.vars.speed = 5;
    this.goto(0, 0);
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        yield* this.startSound(this.random(1, 2));
        if (!(this.compare(this.stage.vars.speed, 50) > 0)) {
          this.stage.vars.speed += 0.5;
        }
        this.stage.vars.score++;
        this.stage.vars.scroll += 2;
        this.stage.vars.scrolx -= 0.01;
        this.direction =
          this.sprites["Sprite1"].direction + this.random(-40, 40);
        this.move(this.toNumber(this.stage.vars.speed));
        while (!!this.touching(this.sprites["Sprite1"].andClones())) {
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (!this.touching(this.sprites["Sprite3"].andClones())) {
        this.stage.vars.speed = 5;
        this.stage.vars.scroll = 10;
        this.stage.vars.scrolx = 0.1;
        for (let i = 0; i < 10; i++) {
          this.stage.vars.score = 0;
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveNow() {
    this.costume = "costume1";
    while (!!this.touching(this.sprites["Sprite3"].andClones())) {
      this.move(this.toNumber(this.stage.vars.speed));
      yield;
    }
    this.costume = "costume2";
    this.goto(0, 0);
    this.broadcast("Yl");
    while (!(this.costumeNumber === 1)) {
      this.direction = 90;
      yield;
    }
  }

  *whenIReceiveQuit() {
    this.visible = false;
  }
}
