export class BoardControllerScene extends Phaser.Scene {
    constructor() {
        super({ key: "BoardControllerScene" });
    }

    create() {
        this.scene.launch("BoardScene");
        this.boardScene = this.scene.get("BoardScene");
        this.scene.bringToTop(this);

        this.addZoomIcon();
    }
    
    addZoomIcon() {
        this.zoomIcon = this.add.sprite(this.sys.game.config.width - 27, 9, "zoomIcon")
                            .setInteractive({ cursor: "pointer" })
                            .setOrigin(0)
                            .setFrame(1);

        this.zoomIcon.on("pointerover", function () {
            this.alpha = 0.8;
        });
        this.zoomIcon.on("pointerout", function () {
            this.alpha = 1;
        });
        this.zoomIcon.on("pointerdown", function () {
            this.zoomIcon.setFrame(this.zoomIcon.frame.name == 0 ? 1 : 0);
            var scaleTo = this.zoomIcon.frame.name == 1 ? 1 : 0.5;
            this.boardScene.zoomCameraTo(scaleTo, null, this);
        }, this);
    }
}


