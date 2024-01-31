/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Engine extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Engine/costumes/1.svg", {
        x: 7.1666700000000105,
        y: 10.166659999999979
      }),
      new Costume("2", "./Engine/costumes/2.svg", {
        x: 7.166649999999947,
        y: 10.166649999999976
      }),
      new Costume("3", "./Engine/costumes/3.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("4", "./Engine/costumes/4.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("5", "./Engine/costumes/5.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("6", "./Engine/costumes/6.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("7", "./Engine/costumes/7.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("8", "./Engine/costumes/8.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("9", "./Engine/costumes/9.svg", {
        x: 7.166650000000004,
        y: 10.166649999999976
      }),
      new Costume("0", "./Engine/costumes/0.svg", {
        x: 7.166642181784084,
        y: 10.166649219219153
      }),
      new Costume("$", "./Engine/costumes/$.svg", {
        x: 5.3292994127083375,
        y: 12.85970999999995
      })
    ];

    this.sounds = [new Sound("Meow", "./Engine/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "refresh" },
        this.whenIReceiveRefresh
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];

    this.vars.xOffset = 0;
    this.vars.cloneCounter = 4;
    this.vars.refresh = 478458;
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      this.vars.xOffset =
        this.toNumber(this.stage.vars.x) -
        ((this.toString(this.stage.vars.yourNumber).length + 1) / 2 -
          this.toNumber(this.vars.cloneCounter)) *
          (this.toNumber(this.stage.vars.size) / 10);
      this.size = this.toNumber(this.stage.vars.size);
      this.goto(
        this.toNumber(this.stage.vars.x) +
          this.toNumber(this.stage.vars.spacing) *
            this.toNumber(this.vars.xOffset),
        this.toNumber(this.stage.vars.y)
      );
      this.costume = this.letterOf(
        this.stage.vars.yourNumber,
        this.vars.cloneCounter - 1
      );
      yield;
    }
  }

  *cloning() {
    this.vars.cloneCounter = 1;
    for (let i = 0; i < this.toString(this.stage.vars.yourNumber).length; i++) {
      this.createClone();
      this.vars.cloneCounter++;
    }
  }

  *whenIReceiveRefresh() {
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.moveAhead(1);
    this.visible = true;
    this.effects.brightness = 100;
    this.stage.vars.spacing = 1.3;
    this.stage.vars.x = 0;
    this.stage.vars.y = 0;
    this.stage.vars.size = 250;
    while (true) {
      this.stage.vars.yourNumber = this.stage.vars.score;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    yield* this.cloning();
    while (true) {
      if (this.compare(this.vars.refresh, this.stage.vars.yourNumber) === 0) {
        this.vars.refresh = this.stage.vars.yourNumber;
      } else {
        this.broadcast("refresh");
        yield* this.cloning();
      }
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      if (this.sprites["Sprite2"].costumeNumber === 2) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      yield;
    }
  }
}
