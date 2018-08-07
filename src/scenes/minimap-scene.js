export class MinimapScene extends Phaser.Scene {
    constructor() {
        super({ key: "MinimapScene" });
    }
    
    create(maxiMap) { 
        this.maxiMap = maxiMap;
        var graphics = this.add.graphics();
        graphics.lineStyle(2, 0xcccccc, 0.8);
        graphics.beginPath();
        graphics.moveTo(4, 4);
        graphics.lineTo(66, 4);
        graphics.lineTo(66, 56);
        graphics.lineTo(4, 56);
        graphics.closePath();
        graphics.strokePath();

        this.selection = this.add.image(5, 5, "minimap_highlight").setOrigin(0).setScale(0.5);
        this.selection.alpha = 0.8;
        this.selection.setInteractive({
            useHandCursor: true,
            draggable: true
        });

        this.input.setDraggable(this.selection);
        this.input.on("drag", function(pointer, obj, dragX, dragY) {
            var cam = this.maxiMap.cameras.main;
            var x = Phaser.Math.Clamp(dragX*10, 0, 640);
            var y = Phaser.Math.Clamp(dragY*10, 0, 540);
            cam.setScroll(x, y);
        }, this);
    }
        
    panSelectionTo(pos) {
        if (!pos || pos.x == undefined || pos.y == undefined) {
            console.warn("selection target pos not set!");
            return;
        }
        this.selection.setPosition(pos.x, pos.y);
    }

    zoomSelectionTo(scaleTo) {
        if (!scaleTo) {
            console.warn("selection target scale not set!");
            return;
        }
        this.selection.setScale(0.5 / scaleTo);
    }
}
