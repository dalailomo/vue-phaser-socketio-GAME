import { Scene } from "phaser";

const EVENT = {
    gameEmitsClickedBomb: 'game-emits:clicked-bomb'
}

export const PLAY_SCENE_EVENT = EVENT;

export default class PlayScene extends Scene {
    private setSky() {
        const sky = this.add.image(400, 200, "sky");
        sky.setScale(4);
    }

    private setBomb(x: number, y: number, id: string) {
        const bomb = this.add.image(x, y, "bomb").setInteractive();

        bomb.on('pointerdown', () => {
            this.game.events.emit(EVENT.gameEmitsClickedBomb, id);
        });
    }

    constructor() {
        super({ key: "PlayScene" });
    }

    create() {
        this.setSky();
        this.setBomb(100, 100, 'A');
        this.setBomb(400, 400, 'B');
    }

    update() {}
}
