var scene = 0;
console.log(scene)
var s;
var new_scene = function(dicide) {
    switch (scene) {
        case (0):
            if (dicide == 1) s = 1;
            if (dicide == 2) s = 1;
            console.log(s)
        case (1):
            if (dicide == 1) s = 2;
            if (dicide == 2) s = 3;
        case (2):
            if (dicide == 1) s = 4;
            if (dicide == 2) s = 5;
        case (3):
            if (dicide == 1) s = 6;
            if (dicide == 2) s = 7;
        case (4):
            if (dicide == 1) s = 8;
            if (dicide == 2) s = 5;
        case (7):
            if (dicide == 1) s = 8;
            if (dicide == 2) s = 2;
        case (8):
            if (dicide == 1) s = 0;
            if (dicide == 2) s = 0;
            console.log(s)
    };
    console.log(s)
    scene = s
        // document.getElementById("sceneimg").src = "scene" + scene + ".png";
};
console.log(new_scene(1))
