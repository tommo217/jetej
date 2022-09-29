/*
Extremely rudimentry game engine for CPSC 410 DSL project #1
Authors:
Jingxuan
Edmond
Tom
Jack
Jacqueline
 */


/*

-----------------------Physics---------------------------

 */

// template for hitbox type
// x1 < x2
// y1 < y2
// mass > 0 || mass === -1
// when mass === -1, it will act as infinite mass and will not be moved during a collision
// the position of the corresponding object is always equal to x1, y1
// (vx, vy) = velocity in units/s
// bounce = bounce coefficient, should be in range(0,1). This tells the physics how much to bounce the hitbox when it
//  collides with another hitbox
class HitboxAABB {
    constructor(x1, y1, x2, y2, mass, vx, vy, bounce) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.mass = mass;
        this.vx = vx;
        this.vy = vy;
        this.kb = bounce;
    }

    move(delta_x, delta_y) {
        this.x1 += delta_x;
        this.x2 += delta_x;
        this.y1 += delta_y;
        this.y2 += delta_y;
    }

    applyVelocity(time) {
        this.x1 += this.vx * time;
        this.x2 += this.vx * time;
        this.y1 += this.vy * time;
        this.y2 += this.vy * time;
    }
}

class Collision {
    constructor(go1, go2) {
        this.go1 = go1;
        this.go2 = go2;
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
        hb1.vy *= -1 * mass_effect1 * hb1.kb;
        hb2.vy *= -1 * mass_effect2 * hb2.kb;
    } else {
        x_diff *= (hb1.x1 < hb2.x1) ? -1 : 1;
        hb1.move(x_diff * mass_effect1, 0);
        hb2.move(-x_diff * mass_effect2, 0);
        hb1.vx *= -1 * mass_effect1 * hb1.kb;
        hb2.vx *= -1 * mass_effect2 * hb2.kb;
    }
}

//testing code for the simple AABB physics
/*
let hb1 = new HitboxAABB(0, 0, 1, 1, 1, 0, 0, 0);
let hb2 = new HitboxAABB(0.5, 0.5, 2, 2, 3, 0, 0, 0);
let hb3 = new HitboxAABB(1.5, 1.5, 2.5, 2.5, -1, 0, 0, 0);
let hb4 = new HitboxAABB(0.5, 0.5, 2, 2, 3, 0, 0, 0);
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


/*

----------------------------Rendering--------------------------

 */


// this class is used to store code used for rendering things to html
class Sprite {
    constructor(sprite_url, width, height) {
        this.sprite_url = sprite_url;
        this.width = width;
        this.height = height;

        this.objElement = document.createElement("div");

        this.objElement.style.height = `${width}px`;
        this.objElement.style.width = `${height}px`;
        this.objElement.style.backgroundImage = `url(${sprite_url})`;
        this.objElement.style.backgroundSize = "contain";
        this.objElement.style.backgroundRepeat = "no-repeat";
        this.objElement.style.backgroundPosition = "center";
        this.objElement.style.position = "absolute";
        canvas.appendChild(this.objElement);

        this.updateSpritePosition(0, 0);
    }

    // updates the top left position of the sprite's object element
    updateSpritePosition(x, y) {
        this.objElement.style.left = x + "px";
        this.objElement.style.top = y + "px";
    }
}


/*

----------------------------Helpers--------------------------

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

/*

----------------------------Main--------------------------

 */


// TODO put this in a class maybe? Or not, this is fine too
let LEFT = false;
let RIGHT = false;
let UP = false;
let DOWN = false;

const canvas = document.querySelector(".game-frame");

class GameObject {
    constructor(name, sprite_url, x, y, size_x, size_y, mass, vx, vy, bounce, hardBodyCollision) {
        // these two should be statics, but I don't think that works properly in .js
        this.name = name; // by convention this should be equal to the name of the class
        this.sprite = new Sprite(sprite_url, size_x, size_y);
        this.hb = new HitboxAABB(x, y, x + size_x, y + size_y, mass, vx, vy, bounce);
        this.hardBodyCollision = hardBodyCollision;

        this.updateSpritePos();
    }

    updateSpritePos() {
        this.sprite.updateSpritePosition(this.hb.x1, this.hb.y1);
    }

    update() {
        // empty func, here for overloading
    }
}

// TODO delete this class for release, this is a pseudo class for mimicking the compiler output and testing
class Block extends GameObject {
    constructor(x, y) {
        super("Block",
            "../rsrc/black_rectangle.png",
            x, y, 90, 90, 2, 0, 0, 0, true);
    }
}

// TODO delete this class for release, this is a pseudo class for mimicking the compiler output and testing
class Player extends GameObject {
    constructor(x, y) {
        super("Player",
              "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png",
              x, y, 90, 90, 1, 0, 0, 0, true);
        this.speed_x = 150; //150units/s
        this.speed_y = 150;
    }

    update() {
        // TODO make this more abstract?
        if (LEFT !== RIGHT) {
            if (LEFT === true) {
                this.hb.vx = -this.speed_x;
            } else if (RIGHT === true) {
                this.hb.vx = this.speed_x;
            }
        } else {
            this.hb.vx = 0;
        }
        if (UP !== DOWN) {
            if (UP === true) {
                this.hb.vy = -this.speed_y
            } else if (DOWN === true) {
                this.hb.vy = this.speed_y
            }
        } else {
            this.hb.vy = 0;
        }
    }
}

/*
class Player extends HitboxAABB {
    name;
    image;
    keyControl;
    playerEl;

    constructor(name, x1, y1, x2, y2, mass, vx, vy, bounce) {
        super(x1, y1, x2, y2, mass, vx, vy, bounce);
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
*/

/*

---------------------------------Input Watching-------------------------

 */

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

/*

------------------------------------------Game Loop---------------------------------

 */

// all objects will be created here
const GameObjectList = [];
const collisionList = [];

// timers
let time_now = Date.now();
let time_last_frame = Date.now();
let time_elapsed = 0;

function updateTimers() {
    time_last_frame = time_now;
    time_now = Date.now();
    time_elapsed = (time_now - time_last_frame) * 0.001;
}

function applyVelocityToAllHitboxes() {
    GameObjectList.forEach(go => go.hb.applyVelocity(time_elapsed));
}

function runAllObjectUpdates() {
    GameObjectList.forEach(go => go.update());
}

function createCollisionList() {
    collisionList.splice(0, collisionList.length);

    for (let i = 0; i < GameObjectList.length - 1; i++) {
        for (let j = i + 1; j < GameObjectList.length; j++) {
            if (isCollidingAABB(GameObjectList[i].hb, GameObjectList[j].hb)) {
                collisionList.push(new Collision(GameObjectList[i], GameObjectList[j]));
            }
        }
    }
}

function applyCollisionToAllCollidingHitboxes() {
    collisionList.forEach((collision) => {
        if (collision.go1.hardBodyCollision && collision.go2.hardBodyCollision === true) {
            applyHardBodyCollisionMovementAABB(collision.go1.hb, collision.go2.hb);
        }
    });
}

function updateAllVisualElements() {
    GameObjectList.forEach(go => go.updateSpritePos());
}

function gameLoop() {
    updateTimers();

    runAllObjectUpdates();

    applyVelocityToAllHitboxes();
    createCollisionList();
    // TODO call collision events for all colliding objects
    applyCollisionToAllCollidingHitboxes();

    updateAllVisualElements();
    requestAnimationFrame(gameLoop);
}


/*

------------------------------------------Start Game--------------------------------

 */

GameObjectList.push(new Player(10, 10), new Block(200, 200), new Block(300, 300));
gameLoop();
/*
const player = new Player("Mario", 10, 10, 100, 100, 1, 0, 0, 0);
player.drawRect("https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png");

function mainLoop() {
    player.updatePosition(3);
    player.renderPlayer();

    requestAnimationFrame(mainLoop);
}
*/