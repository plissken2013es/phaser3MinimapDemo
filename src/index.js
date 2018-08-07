import "phaser";

import { BootScene } from "./scenes/boot-scene";
import { BoardControllerScene } from "./scenes/board-controller-scene";
import { BoardScene } from "./scenes/board-scene";
import { MinimapScene } from "./scenes/minimap-scene";

const config = {
    type: Phaser.AUTO,
    width: 320,
    height: 180,
    parent: "game-container",
    pixelArt: true,
    backgroundColor: "#1d212d",
    resolution: 2,
    pixelArt: true,
    roundPixels: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scene: [BootScene, BoardControllerScene, BoardScene, MinimapScene]
};

const game = new Phaser.Game(config);