/*
Extremely rudimentry game engine for CPSC 410 DSL project #1
Authors:
Jingxuan
Edmond
Tom
Jack
Jacqueline
 */

// template for hitbox type
// x1 < x2
// y1 < y2
// mass > 0 || mass === -1
// when mass === -1, it will act as infinite mass and will not be moved during a collision
// the position of the corresponding object is always equal to x1, y1
class HitboxAABB {
    constructor(x1, y1, x2, y2, mass) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.mass = mass;
    }

    move(delta_x, delta_y) {
        this.x1 += delta_x;
        this.x2 += delta_x;
        this.y1 += delta_y;
        this.y2 += delta_y;
    }
}

function isCollidingAABB(hb1, hb2) {
    return hb1.x1 < hb2.x2 && hb1.x2 > hb2.x1 && hb1.y1 < hb2.y2 && hb1.y2 > hb2.y1;
}

// assumes isCollidingAABB(hb1, hb2) is true
function applyHardBodyCollisionMovementAABB(hb1, hb2) {
    let x_diff = Math.min(Math.abs(hb1.x1 - hb2.x2), Math.abs(hb1.x2 - hb2.x1));
    let y_diff = Math.min(Math.abs(hb1.y1 - hb2.y2), Math.abs(hb1.y2 - hb2.y1));

    let mass_effect1 = (hb1.mass === -1) ? 0 : 1;
    let mass_effect2 = (hb2.mass === -1) ? 0 : 1;
    mass_effect1 *= (hb2.mass === -1) ? 1: (hb2.mass / Math.max(hb1.mass + hb2.mass, 0.01));
    mass_effect2 *= (hb1.mass === -1) ? 1 : (hb1.mass / Math.max(hb1.mass + hb2.mass, 0.01));

    if (y_diff < x_diff) {
        y_diff *= (hb1.y1 < hb2.y1) ? -1 : 1;
        hb1.move(0, y_diff * mass_effect1);
        hb2.move(0, -y_diff * mass_effect2);
    } else {
        x_diff *= (hb1.x1 < hb2.x1) ? -1 : 1;
        hb1.move(x_diff * mass_effect1, 0);
        hb2.move(-x_diff * mass_effect2, 0);
    }
}

//testing code for the simple AABB physics
/*
let hb1 = new HitboxAABB(0, 0, 1, 1, 1);
let hb2 = new HitboxAABB(0.5, 0.5, 2, 2, 3);
let hb3 = new HitboxAABB(1.5, 1.5, 2.5, 2.5, -1);
let hb4 = new HitboxAABB(0.5, 0.5, 2, 2, 3);
//true
console.log(isCollidingAABB(hb1, hb2));
console.log(isCollidingAABB(hb2, hb1));
//false
console.log(isCollidingAABB(hb1, hb3));
console.log(isCollidingAABB(hb3, hb1));
//true
console.log(isCollidingAABB(hb2, hb3));
console.log(isCollidingAABB(hb3, hb2));

console.log(hb1, hb2);
applyHardBodyCollisionMovementAABB(hb1, hb2);
console.log(hb1, hb2, isCollidingAABB(hb1, hb2));

console.log(hb4, hb3);
applyHardBodyCollisionMovementAABB(hb4, hb3);
console.log(hb4, hb3, isCollidingAABB(hb3, hb4));
*/


function random_end(end) {
    return Math.floor(Math.random() * end);
}

function random_range(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

function random(arg1, arg2) {
    if (typeof arg2 !== "undefined") {
        return random_range(arg1, arg2);
    } else {
        return random_end(arg1);
    }
}

/*
// for testing random funcs
for (let i = 0; i < 10; i++) {
    console.log(random(10));
}

for (let i = 0; i < 10; i++) {
    console.log(random(10, 100));
}
*/

let LEFT, UP, RIGHT, DOWN;

const canvas = document.querySelector(".game-frame");

class Player extends HitboxAABB {
    name;
    image;
    keyControl;
    playerEl;

    constructor(name, x1, y1, x2, y2, mass) {
        super(x1, y1, x2, y2, mass);
        this.name = name;
        this.playerEl = document.createElement("div");
    }

    drawRect(img) {
        this.image = img;
        this.playerEl.classList.add("agent");
        this.playerEl.style.height = `${this.y2 - this.y1}px`;
        this.playerEl.style.width = `${this.x2 - this.x1}px`;
        this.playerEl.style.backgroundImage = `url(${img})`;
        this.playerEl.style.backgroundSize = "contain";
        this.playerEl.style.backgroundRepeat = "no-repeat";
        this.playerEl.style.backgroundPosition = "center";
        canvas.appendChild(this.playerEl);
        this.playerEl.style.position = "absolute";
        this.playerEl.style.left = this.x1 + "px";
        this.playerEl.style.top = this.y1 + "px";
        requestAnimationFrame(mainLoop);
    }

    updatePosition(speed) {
        if (LEFT && this.x1 > 0) {
            this.move(-speed, 0);
        }
        if (UP && this.y1 > 0) {
            this.move(0, -speed);
        }
        if (RIGHT && this.x2 < canvas.getBoundingClientRect().width - 5) {
            this.move(speed, 0);
        }
        if (DOWN && this.y2 < canvas.getBoundingClientRect().height - 5) {
            this.move(0, speed);
        }
    }

    renderPlayer() {
        console.log({ x1: this.x1, y1: this.y1 });
        this.playerEl.style.left = this.x1 + "px";
        this.playerEl.style.top = this.y1 + "px";
    }
}

// keyControl() is copied from https://github.com/danielszabo88/mocorgo by user danielszabo88
function keyControl() {
    canvas.addEventListener("keydown", function (e) {
        if (e.keyCode === 37) {
            LEFT = true;
        }
        if (e.keyCode === 38) {
            UP = true;
        }
        if (e.keyCode === 39) {
            RIGHT = true;
        }
        if (e.keyCode === 40) {
            DOWN = true;
        }
    });

    canvas.addEventListener("keyup", function (e) {
        if (e.keyCode === 37) {
            LEFT = false;
        }
        if (e.keyCode === 38) {
            UP = false;
        }
        if (e.keyCode === 39) {
            RIGHT = false;
        }
        if (e.keyCode === 40) {
            DOWN = false;
        }
    });
}

keyControl();
const player = new Player("Mario", 10, 10, 100, 100, 1);
player.drawRect(
  "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
);

function mainLoop() {
    player.updatePosition(3);
    player.renderPlayer();

    requestAnimationFrame(mainLoop);
}