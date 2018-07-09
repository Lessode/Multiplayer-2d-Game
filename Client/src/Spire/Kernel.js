"use strict";

import {Character} from './Character';
import {CharacterAdapter} from './Adapter/CharacterAdapter';
import {Player} from './Player';

export class Kernel {
  constructor(app, gameEngine) {
    this._app = app;
    this._gameEngine = gameEngine;
  }

  boot() {
    let positionX = (this.app.renderer.width / 2),
    positionY = (this.app.renderer.height / 2),
    anchorX = 0.5,
    anchorY = 0.5,
    character = new Character(positionX, positionY, anchorX, anchorY),
    player = new Player();

    this.appendGameToDom();
    this.createCharacter(character);
    player.appendPlayersToMap();
  }

  get app() {
    return this._app;
  }

  get gameEngine() {
    return this._gameEngine;
  }

  appendGameToDom() {
    document.body.appendChild(this.app.view);
  }

  gameLoop() {
    requestAnimationFrame(gameLoop);
  }

  createCharacter(character) {
    this.gameEngine.loader.add('character', 'assets/sprites/player.gif').load((loader, resources) => {
      let gameEnginePlayerFrame = new this.gameEngine.Rectangle(1, 1, 36, 44),
      gameEnginePlayer = new this.gameEngine.Sprite(resources.character.texture);

       // Setup the position of the player
      gameEnginePlayer.x = character.position.x;
      gameEnginePlayer.y = character.position.y;

      // Rotate around the center
      gameEnginePlayer.anchor.x = character.anchor.x;
      gameEnginePlayer.anchor.y = character.anchor.y;

      // This creates a texture from a 'player.gif' image.
      resources.character.texture.frame = gameEnginePlayerFrame;

      let characterAdapter = new CharacterAdapter(
        character,
        gameEnginePlayer,
        this.gameEngine
      );

      // Add the player to the scene we are building.
      this.app.stage.addChild(characterAdapter.player);

      characterAdapter.addMovement();
    });
  }
}
