"use strict";

import {Position} from './ValueObject/Position';
import {Anchor} from './ValueObject/Anchor';

export class Character {
  constructor(positionX, positionY, anchorX, anchorY) {
    this._position = new Position(positionX, positionY);
    this._anchor = new Anchor(anchorX, anchorY);
  }

  get position() {
    return this._position;
  }

  get anchor() {
    return this._anchor;
  }
}
