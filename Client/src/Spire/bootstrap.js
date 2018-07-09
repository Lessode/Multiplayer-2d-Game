"use strict";

import {Kernel} from './Kernel';
import * as PIXI from 'pixi.js';

function initialize() {
  let kernel = new Kernel(new PIXI.Application(), PIXI);
  kernel.boot();
}

if (window.document.readyState == 'loading') {
    window.document.addEventListener("DOMContentLoaded", (event) => {
        initialize();
    });
} else {
    initialize();
}
