import Phaser from "phaser";
import BootScene from "./scenes/boot-scene";
import PlayScene from "./scenes/play-scene";

// foomador
function launch(containerId: string) {
    return new Phaser.Game({
        type: Phaser.AUTO,
        parent: containerId,
        physics: {
            default: "arcade",
            arcade: {
                gravity: { y: 300 },
                debug: false,
            },
        },
        scene: [BootScene, PlayScene],
        scale: {
            mode: Phaser.Scale.ScaleModes.RESIZE,
        }
    });
}

export { launch };
