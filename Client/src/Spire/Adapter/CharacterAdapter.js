"use strict";

import {Helper} from './../Helper';

export class CharacterAdapter {
  constructor(character, player, gameEngine) {
    this._character = character;
    this._player = player;
    this._gameEngine = gameEngine;
  }

  get character() {
    return this._character;
  }

  get player() {
    return this._player;
  }

  get gameEngine() {
    return this._gameEngine;
  }

  addMovement() {
    let left = Helper.keyboard(37),
    up = Helper.keyboard(38),
    right = Helper.keyboard(39),
    down = Helper.keyboard(40);

    up.press = () => {
      this.player.y -= 4;
      this.playMovementAnimation("up");
    };

    left.press = () => {
      this.player.x -= 4;
      this.playMovementAnimation("left");
    };

    right.press = () => {
      this.player.x += 4;
      this.playMovementAnimation("right");
    };

    down.press = () => {
      this.player.y += 4;
      this.playMovementAnimation("down");
    };
  }

  playMovementAnimation(direction) {
    let playerFrame = {};
    switch(direction) {
      case "up":
        playerFrame = new this.gameEngine.Rectangle(1, 146, 36, 42);
      break;
      case "left":
        playerFrame = new this.gameEngine.Rectangle(1, 50, 36, 42);
      break;
      case "right":
        playerFrame = new this.gameEngine.Rectangle(1, 98, 36, 42);
      break;
      case "down":
        playerFrame = new this.gameEngine.Rectangle(1, 1, 36, 42);
      break;
      default:
        playerFrame = new this.gameEngine.Rectangle(1, 1, 36, 44);
      break;
    }

    this.player.texture.frame = playerFrame;
  }
}
