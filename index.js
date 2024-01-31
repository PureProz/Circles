import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Engine from "./Engine/Engine.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 72.05862575810079,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Sprite2: new Sprite2({
    x: -33.48352353274526,
    y: -10.841591105911778,
    direction: 110.96398653486582,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite4: new Sprite4({
    x: 36,
    y: 28,
    direction: 53.31027716752419,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Engine: new Engine({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 11,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite5: new Sprite5({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: 1448,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Sprite7: new Sprite7({
    x: -150,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Sprite8: new Sprite8({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100.33333333333339,
    visible: false,
    layerOrder: 8
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100.49999999999997,
    visible: false,
    layerOrder: 9
  }),
  Sprite10: new Sprite10({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
