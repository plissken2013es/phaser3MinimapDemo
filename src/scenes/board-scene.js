export class BoardScene extends Phaser.Scene {
    constructor() {
        super({ key: "BoardScene" });
    }
    
    create() {
        this.board = this.add.container();
        this.boardBg = this.add.image(0, 0, "board").setOrigin(0);
        this.board.setPosition(0, 0);
        this.board.add(this.boardBg);

        this.mainCam = this.cameras.main;
        var cfg = this.sys.game.config;
        this.mainCam.setViewport(0, 0, cfg.width, cfg.height);
        this.mainCam.setBounds(0, 0, this.boardBg.width, this.boardBg.height);

        this.minimapCam = this.cameras.add(5, 5, 64, 54, false, "minimap").setZoom(0.1);
        this.minimapCam.scrollX = 320;
        this.minimapCam.scrollY = 270;
        this.scene.launch("MinimapScene", this);
        this.minimapStroke = this.scene.get("MinimapScene");
        this.scene.bringToTop(this.minimapStroke);
    };
    
    update(time, delta) {
        var x = Phaser.Math.Clamp(this.mainCam.worldView.x/10, 0, 64);
        var y = Phaser.Math.Clamp(this.mainCam.worldView.y/10, 0, 54);
        this.minimapStroke.panSelectionTo({x: x+3, y: y+3});
        this.minimapStroke.zoomSelectionTo(this.mainCam.zoom);
    }

    panCameraTo(pos, cb, ctx) {
        if (!pos || pos.x == undefined || pos.y == undefined) {
            console.warn("camera pan target not set");
            return;
        }
        this.mainCam.pan(pos.x, pos.y, 600, "Sine.easeIn", false, function(cam, prog, sX, sY) {
            if (prog == 1) {
                if (cb && ctx) cb.apply(ctx);
            }
        }, this);
    }

    zoomCameraTo(scaleTo, cb, ctx) {
        if (!scaleTo) {
            console.warn("camera Zoom target not set");
            return;
        }

        this.mainCam.zoomTo(scaleTo, 600, "Sine.easeIn", false, function(cam, prog, sX, sY) {
            if (prog == 1) {
                if (cb && ctx) cb.apply(ctx);
            }
        }, this);
    }
}



