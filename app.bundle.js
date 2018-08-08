webpackJsonp([0],{

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootScene = exports.BootScene = function (_Phaser$Scene) {
    _inherits(BootScene, _Phaser$Scene);

    function BootScene() {
        _classCallCheck(this, BootScene);

        return _possibleConstructorReturn(this, (BootScene.__proto__ || Object.getPrototypeOf(BootScene)).call(this, { key: "BootScene" }));
    }

    _createClass(BootScene, [{
        key: "preload",
        value: function preload() {
            this.load.setBaseURL("./").image("board", "assets/board_640x540.png").image("minimap_highlight", "assets/minimap_highlight.png").spritesheet("zoomIcon", "assets/zoom_icon_spritesheet.png", {
                frameWidth: 18,
                frameHeight: 18
            });
        }
    }, {
        key: "create",
        value: function create() {
            this.scene.start("BoardControllerScene");
        }
    }]);

    return BootScene;
}(Phaser.Scene);

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardControllerScene = exports.BoardControllerScene = function (_Phaser$Scene) {
    _inherits(BoardControllerScene, _Phaser$Scene);

    function BoardControllerScene() {
        _classCallCheck(this, BoardControllerScene);

        return _possibleConstructorReturn(this, (BoardControllerScene.__proto__ || Object.getPrototypeOf(BoardControllerScene)).call(this, { key: "BoardControllerScene" }));
    }

    _createClass(BoardControllerScene, [{
        key: "create",
        value: function create() {
            this.scene.launch("BoardScene");
            this.boardScene = this.scene.get("BoardScene");
            this.scene.bringToTop(this);

            this.addZoomIcon();
        }
    }, {
        key: "addZoomIcon",
        value: function addZoomIcon() {
            this.zoomIcon = this.add.sprite(this.sys.game.config.width - 27, 9, "zoomIcon").setInteractive({ cursor: "pointer" }).setOrigin(0).setFrame(1);

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
    }]);

    return BoardControllerScene;
}(Phaser.Scene);

/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardScene = exports.BoardScene = function (_Phaser$Scene) {
    _inherits(BoardScene, _Phaser$Scene);

    function BoardScene() {
        _classCallCheck(this, BoardScene);

        return _possibleConstructorReturn(this, (BoardScene.__proto__ || Object.getPrototypeOf(BoardScene)).call(this, { key: "BoardScene" }));
    }

    _createClass(BoardScene, [{
        key: "create",
        value: function create() {
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
        }
    }, {
        key: "update",
        value: function update(time, delta) {
            var x = Phaser.Math.Clamp(this.mainCam.worldView.x / 10, 0, 64);
            var y = Phaser.Math.Clamp(this.mainCam.worldView.y / 10, 0, 54);
            this.minimapStroke.panSelectionTo({ x: x + 3, y: y + 3 });
            this.minimapStroke.zoomSelectionTo(this.mainCam.zoom);
        }
    }, {
        key: "panCameraTo",
        value: function panCameraTo(pos, cb, ctx) {
            if (!pos || pos.x == undefined || pos.y == undefined) {
                console.warn("camera pan target not set");
                return;
            }
            this.mainCam.pan(pos.x, pos.y, 600, "Sine.easeIn", false, function (cam, prog, sX, sY) {
                if (prog == 1) {
                    if (cb && ctx) cb.apply(ctx);
                }
            }, this);
        }
    }, {
        key: "zoomCameraTo",
        value: function zoomCameraTo(scaleTo, cb, ctx) {
            if (!scaleTo) {
                console.warn("camera Zoom target not set");
                return;
            }

            this.mainCam.zoomTo(scaleTo, 600, "Sine.easeIn", false, function (cam, prog, sX, sY) {
                if (prog == 1) {
                    if (cb && ctx) cb.apply(ctx);
                }
            }, this);
        }
    }]);

    return BoardScene;
}(Phaser.Scene);

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MinimapScene = exports.MinimapScene = function (_Phaser$Scene) {
    _inherits(MinimapScene, _Phaser$Scene);

    function MinimapScene() {
        _classCallCheck(this, MinimapScene);

        return _possibleConstructorReturn(this, (MinimapScene.__proto__ || Object.getPrototypeOf(MinimapScene)).call(this, { key: "MinimapScene" }));
    }

    _createClass(MinimapScene, [{
        key: "create",
        value: function create(maxiMap) {
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
            this.input.on("drag", function (pointer, obj, dragX, dragY) {
                var cam = this.maxiMap.cameras.main;
                var x = Phaser.Math.Clamp(dragX * 10, 0, 640);
                var y = Phaser.Math.Clamp(dragY * 10, 0, 540);
                cam.setScroll(x, y);
            }, this);
        }
    }, {
        key: "panSelectionTo",
        value: function panSelectionTo(pos) {
            if (!pos || pos.x == undefined || pos.y == undefined) {
                console.warn("selection target pos not set!");
                return;
            }
            this.selection.setPosition(pos.x, pos.y);
        }
    }, {
        key: "zoomSelectionTo",
        value: function zoomSelectionTo(scaleTo) {
            if (!scaleTo) {
                console.warn("selection target scale not set!");
                return;
            }
            this.selection.setScale(0.5 / scaleTo);
        }
    }]);

    return MinimapScene;
}(Phaser.Scene);

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config;

__webpack_require__(210);

var _bootScene = __webpack_require__(1075);

var _boardControllerScene = __webpack_require__(1076);

var _boardScene = __webpack_require__(1077);

var _minimapScene = __webpack_require__(1078);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = (_config = {
    type: Phaser.AUTO,
    width: 320,
    height: 180,
    parent: "game-container",
    pixelArt: true,
    backgroundColor: "#1d212d",
    resolution: 2
}, _defineProperty(_config, "pixelArt", true), _defineProperty(_config, "roundPixels", true), _defineProperty(_config, "physics", {
    default: "arcade",
    arcade: {
        gravity: { y: 0 },
        debug: true
    }
}), _defineProperty(_config, "scene", [_bootScene.BootScene, _boardControllerScene.BoardControllerScene, _boardScene.BoardScene, _minimapScene.MinimapScene]), _config);

var game = new Phaser.Game(config);

/***/ })

},[434]);