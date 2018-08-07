export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: "BootScene" });
    }
    
    preload() {
        this.load
            .setBaseURL("./")
        
            .image("board", "assets/board_640x540.png")
            .image("minimap_highlight", "assets/minimap_highlight.png")

            .spritesheet("zoomIcon", "assets/zoom_icon_spritesheet.png", {
                frameWidth: 18,
                frameHeight: 18
            });
    }
    
    create() {
        this.scene.start("BoardControllerScene");
    }
}