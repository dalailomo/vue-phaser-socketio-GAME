import { Scene } from "phaser";

export default class BootScene extends Scene {
    constructor() {
        super({ key: "BootScene" });
    }

    preload() {
        this.load.image("sky", '/assets/game/sky.png');
        this.load.image("bomb", '/assets/game/bomb.png');
    }

    create() {
        this.scene.start("PlayScene");
    }
}
