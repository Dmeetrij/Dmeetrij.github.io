(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [
        {
            name: "240x300_tiswell_feb25_atlas_P_",
            frames: [[0, 0, 268, 238], [270, 0, 221, 211], [270, 213, 216, 46], [68, 240, 62, 62], [0, 240, 66, 66]]
        }
    ];
// symbols:
    (lib.bg = function () {
        this.initialize(img.bg);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 280, 351);
    (lib.blur2 = function () {
        this.spriteSheet = ss["240x300_tiswell_feb25_atlas_P_"];
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    (lib.kids2 = function () {
        this.spriteSheet = ss["240x300_tiswell_feb25_atlas_P_"];
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    (lib.logo = function () {
        this.spriteSheet = ss["240x300_tiswell_feb25_atlas_P_"];
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    (lib.pic1 = function () {
        this.spriteSheet = ss["240x300_tiswell_feb25_atlas_P_"];
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    (lib.pic2 = function () {
        this.spriteSheet = ss["240x300_tiswell_feb25_atlas_P_"];
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();

// helper functions:
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }

    (lib.t3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1 copy
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(-66.2, 18.8);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-136.5, 12, 140.6, 13.8), null);


    (lib.t2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("APYAyQgOgHgIgOQgIgMAAgRQAAgPAIgNQAIgOAOgIQAOgHASAAQARAAAOAHQAOAIAIAOQAIANAAAPQAAARgIAMQgIAOgOAHQgOAIgRAAQgSAAgOgIgAPmgfQgIAGgFAIQgEAIAAAJQAAAKAEAJQAFAHAIAFQAIAFAKAAQAKAAAIgFQAIgFAEgHQAFgJAAgKQAAgJgFgIQgEgIgIgGQgIgEgKAAQgKAAgIAEgAL1AyQgOgHgIgOQgIgMAAgRQAAgPAIgNQAIgOAOgIQAOgHARAAQASAAANAHQAOAIAIAOQAIANAAAPQAAARgIAMQgIAOgOAHQgNAIgSAAQgRAAgOgIgAMCgfQgIAGgEAIQgFAIAAAJQAAAKAFAJQAEAHAIAFQAIAFAKAAQAKAAAIgFQAIgFAFgHQAEgJAAgKQAAgJgEgIQgFgIgIgGQgIgEgKAAQgKAAgIAEgAIOAyQgOgHgIgNQgIgNAAgRQAAgQAIgNQAIgNAOgIQAOgHARAAQAOAAAMAFQAMAFAIAKIgRAPQgLgNgRAAQgKAAgIAEQgJAGgEAIQgFAIAAAJQAAAKAFAJQAEAHAJAFQAIAFAKAAQARAAALgOIARAQQgIAJgMAGQgMAFgOAAQgRAAgOgIgAg4AyQgOgHgIgOQgIgMAAgRQAAgPAIgNQAIgOAOgIQAOgHARAAQASAAAMAHQAOAIAIAOQAIANAAAPQAAARgIAMQgIAOgOAHQgMAIgSAAQgRAAgOgIgAgrgfQgIAGgEAIQgFAIAAAJQAAAKAFAJQAEAHAIAFQAIAFAKAAQAKAAAIgFQAHgFAFgHQAEgJAAgKQAAgJgEgIQgFgIgHgGQgIgEgKAAQgKAAgIAEgAjYA4IABgWIAFABQAJAAAEgMQADgKABgWIACguIBWAAIAABvIgaAAIAAhaIgmAAIgBAYQgBAWgDAPQgDAPgHAIQgHAIgNAAQgFAAgHgCgAk8AyQgOgHgIgOQgIgMAAgRQAAgPAIgNQAIgOAOgIQAOgHARAAQASAAANAHQAOAIAIAOQAIANAAAPQAAARgIAMQgIAOgOAHQgNAIgSAAQgRAAgOgIgAkvgfQgIAGgEAIQgFAIAAAJQAAAKAFAJQAEAHAIAFQAIAFAKAAQAKAAAIgFQAIgFAFgHQAEgJAAgKQAAgJgEgIQgFgIgIgGQgIgEgKAAQgKAAgIAEgAs+AyQgOgHgIgOQgIgMAAgRQAAgPAIgNQAIgOAOgIQAOgHARAAQASAAANAHQAOAIAIAOQAIANAAAPQAAARgIAMQgIAOgOAHQgNAIgSAAQgRAAgOgIgAsxgfQgIAGgEAIQgFAIAAAJQAAAKAFAJQAEAHAIAFQAIAFAKAAQAKAAAIgFQAIgFAFgHQAEgJAAgKQAAgJgEgIQgFgIgIgGQgIgEgKAAQgKAAgIAEgAwWAyQgOgHgIgNQgIgNAAgRQAAgQAIgNQAIgNAOgIQAOgHARAAQAPAAAMAFQALAFAIAKIgQAPQgMgNgQAAQgLAAgIAEQgIAGgFAIQgEAIAAAJQAAAKAEAJQAFAHAIAFQAIAFALAAQAQAAAMgOIAQAQQgIAJgLAGQgMAFgPAAQgRAAgOgIgANkA4IAAhvIBPAAIAAAVIg1AAIAABagAKzA4IgdgtIgSAAIAAAtIgaAAIAAhvIAaAAIAAAuIATAAIAdguIAbAAIgkA2IAmA5gAGNA4IAAhvIBVAAIAAAVIg7AAIAAAYIA0AAIAAAUIg0AAIAAAZIA9AAIAAAVgAFZA4IAAgoQgPAFgMAAQgXAAgMgLQgMgKAAgUIAAgjIAaAAIAAAgQAAAMAGAFQAGAGAMAAQAMAAAMgFIAAgyIAZAAIAABvgADiA4IAAhIIg1BIIgZAAIAAhvIAaAAIAABIIA1hIIAZAAIAABvgAA2A4IAAhvIBPAAIAAAVIg1AAIAABagAmfA4IAAhaIgkAAIAAgVIBhAAIAAAVIgkAAIAABagAngA4IgKgYIg0AAIgKAYIgbAAIAyhvIAaAAIAyBvgAoWAMIAkAAIgSgqgAppA4IAAhCIghA2IgMAAIghg1IAABBIgYAAIAAhvIAWAAIAqBEIAphEIAVAAIAABvgAuhA4IAAhaIgjAAIAAgVIBhAAIAAAVIgkAAIAABag");
        this.shape.setTransform(-28.9, 0.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-136.5, -5.6, 215.4, 11.6), null);


    (lib.t1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("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");
        this.shape.setTransform(-30.5, -18.6);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-135.5, -26.9, 210, 16.7), null);


    (lib.pic22 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.pic2();
        this.instance.parent = this;
        this.instance.setTransform(-31, -31);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.pic22, new cjs.Rectangle(-31, -31, 66, 66), null);


    (lib.pic11 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.pic1();
        this.instance.parent = this;
        this.instance.setTransform(-31, -31);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.pic11, new cjs.Rectangle(-31, -31, 62, 62), null);


    (lib.kids2_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.kids2();
        this.instance.parent = this;
        this.instance.setTransform(-110.5, -105.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.kids2_1, new cjs.Rectangle(-110.5, -105.5, 221, 211), null);


    (lib.fade = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#33C8BA").s().p("Egb4AgMMAAAhAXMA3xAAAMAAABAXg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = getMCSymbolPrototype(lib.fade, new cjs.Rectangle(-178.5, -206, 357, 412), null);


    (lib.bg_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.bg();
        this.instance.parent = this;
        this.instance.setTransform(-140, -176);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(-140, -176, 280, 351), null);


    (lib.text = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // t1
        this.instance = new lib.t1();
        this.instance.parent = this;
        this.instance.setTransform(-30.5, -7.1, 1, 1, 0, 0, 0, -30.5, -18.7);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({y: -18.7, alpha: 1}, 17, cjs.Ease.sineOut).wait(78));

        // t2
        this.instance_1 = new lib.t2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-28.9, 11.8, 1, 1, 0, 0, 0, -28.9, 0.2);
        this.instance_1.alpha = 0;
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off: false}, 0).to({
            y: 0.2,
            alpha: 1
        }, 17, cjs.Ease.sineOut).wait(72));

        // t3
        this.instance_2 = new lib.t3();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-66.2, 30.4, 1, 1, 0, 0, 0, -66.2, 18.8);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off: false}, 0).to({
            y: 18.8,
            alpha: 1
        }, 17, cjs.Ease.sineOut).wait(66));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-138.2, -35.7, 276.5, 71.4);


    (lib.pic2_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.pic22();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.88, 0.88);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1
        }, 27, cjs.Ease.sineInOut).to({scaleX: 0.88, scaleY: 0.88}, 28, cjs.Ease.sineInOut).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.3, -27.3, 58.1, 58.1);


    (lib.pic1_1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.pic11();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.88, 0.88);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1
        }, 27, cjs.Ease.sineInOut).to({scaleX: 0.88, scaleY: 0.88}, 28, cjs.Ease.sineInOut).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-27.3, -27.3, 54.6, 54.6);


// stage content:
    (lib._240x300_tiswell_feb25 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // fade
        this.instance = new lib.fade();
        this.instance.parent = this;
        this.instance.setTransform(142.5, 144);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha: 0}, 14).wait(151).to({alpha: 1}, 14).wait(1));

        // logo
        this.instance_1 = new lib.logo();
        this.instance_1.parent = this;
        this.instance_1.setTransform(13, 12);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180));

        // text
        this.instance_2 = new lib.text("synched", 0, false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(149.9, 92.1);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off: false}, 0).wait(174));

        // bubble1 copy
        this.instance_3 = new lib.pic2_1("single", 0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(110, 149, 0.293, 0.293);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off: false}, 0).to({
            scaleX: 1,
            scaleY: 1,
            mode: "synched"
        }, 23, cjs.Ease.backOut).wait(137));

        // bubble1
        this.instance_4 = new lib.pic1_1("single", 0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(37, 266, 0.293, 0.293);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off: false}, 0).to({
            scaleX: 1,
            scaleY: 1,
            mode: "synched"
        }, 20, cjs.Ease.backOut).wait(144));

        // kids2
        this.instance_5 = new lib.kids2_1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(220.1, 298.7, 0.93, 0.93, 0, 0, 0, 83.9, 68.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({
            scaleX: 1,
            scaleY: 1,
            x: 220.4,
            y: 299
        }, 179).wait(1));

        // blur
        this.instance_6 = new lib.blur2();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-13, -1);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180));

        // bg
        this.instance_7 = new lib.bg_1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(122.1, 153.1, 0.92, 0.92, 0, 0, 0, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({
            regX: 0,
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            x: 108,
            y: 140
        }, 179).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(84, 88, 357, 427.2);
// library properties:
    lib.properties = {
        id: '6BF60295C8B47B4EBC14D9F010723C17',
        width: 240,
        height: 300,
        fps: 30,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {src: "bg.jpg", id: "bg"},
            {src: "240x300_tiswell_feb25_atlas_P_.png", id: "240x300_tiswell_feb25_atlas_P_"}
        ],
        preloads: []
    };


// bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function () {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['6BF60295C8B47B4EBC14D9F010723C17'] = {
        getStage: function () {
            return exportRoot.getStage();
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;