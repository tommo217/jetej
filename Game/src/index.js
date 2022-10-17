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

    let dir;
    if (y_diff < x_diff) {
        dir = (hb1.y1 < hb2.y1) ? -1 : 1;
        y_diff *= dir;
        hb1.move(0, y_diff * mass_effect1);
        hb2.move(0, -y_diff * mass_effect2);
        hb1.vy = (hb1.vy * dir > 0) ? hb1.vy + y_diff * mass_effect1 * hb1.kb : -hb1.vy * hb1.kb;
        hb2.vy = (hb2.vy * dir < 0) ? hb2.vy - y_diff * mass_effect2 * hb2.kb : -hb2.vy * hb2.kb;
    } else {
        dir = (hb1.x1 < hb2.x1) ? -1 : 1;
        x_diff *= dir;
        hb1.move(x_diff * mass_effect1, 0);
        hb2.move(-x_diff * mass_effect2, 0);
        hb1.vx = (hb1.vx * dir > 0) ? hb1.vx + x_diff * mass_effect1 * hb1.kb : -hb1.vx * hb1.kb;
        hb2.vx = (hb2.vx * dir < 0) ? hb2.vx - x_diff * mass_effect2 * hb2.kb : -hb2.vx * hb2.kb;
    }
}


/*

----------------------------Rendering--------------------------

 */

let ratio = canvas.getBoundingClientRect().width / 500;

window.addEventListener("resize", () => {
    ratio = canvas.getBoundingClientRect().width / 500;
    GameObjectList.forEach(item => {
        item.sprite.objElement.style.height = `${item.sprite.height * ratio}px`;
        item.sprite.objElement.style.width = `${item.sprite.width * ratio}px`;
    })
})


// this class is used to store code used for rendering things to html
class Sprite {
    constructor(sprite_url, width, height, id) {
        this.sprite_url = sprite_url;
        this.width = width;
        this.height = height;

        this.objElement = document.createElement("div");
        this.objElement.id = id;

        this.objElement.style.height = `${height * ratio}px`;
        this.objElement.style.width = `${width * ratio}px`;
        this.objElement.style.backgroundImage = `url(${sprite_url})`;
        this.objElement.style.backgroundSize = "cover";
        this.objElement.style.backgroundRepeat = "no-repeat";
        this.objElement.style.backgroundPosition = "center";
        this.objElement.style.position = "absolute";
        canvas.appendChild(this.objElement);

        this.updateSpritePosition(0, 0);
    }

    // updates the top left position of the sprite's object element
    updateSpritePosition(x, y) {       
        this.objElement.style.left = x * ratio + "px";
        this.objElement.style.top = y * ratio + "px";
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

----------------------------Main--------------------------

 */

const errorMessage = document.querySelector(".error-message");

let isGameOn = true;

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

class GameObject {
    constructor(name, sprite_url, x, y, size_x, size_y, mass, vx, vy, bounce, hardBodyCollision) {
        // these two should be statics, but I don't think that works properly in .js
        this.objname = name; // by convention this should be equal to the name of the class
        const id = uuidv4();
        this.sprite = new Sprite(sprite_url, size_x, size_y, id);
        this.id = id;
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

/*

----------------------------Displayed Game Variables--------------------------

 */

const topBar = document.querySelector(".top-bar");

const gameVariables = {
    score: null,
    health: null,
    time: null
}

const capitalize = (str) => {
    return str.replace(str[0], str[0].toUpperCase())
}

const checkParameters = (variableName, value) => {
    const validVariableNames = Object.keys(gameVariables);
    if (!validVariableNames.includes(variableName)) {
        displayError(`${variableName} is not a valid property`);
        return false;
    }
    if (typeof value !== "number") {
        displayError(`The value must be a number`);
        return false;
    }
    return true;
}

const initializeVariable = (variableName, value = 0) => {
    if (!checkParameters(variableName, value)) return;
    if (gameVariables[variableName] !== null) return;

    gameVariables[variableName] = value;
    const variableSpan = document.createElement("span");
    const valueToDisplay = variableName === "time" ? formatTime(value) : value;
    variableSpan.textContent = `${capitalize(variableName)}: ${valueToDisplay}`;
    topBar.append(variableSpan);    
}

const formatTime = (timeInSecond) => {
    const minutes = Math.floor(timeInSecond / 60);
    const seconds = timeInSecond % 60;
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

const updateVariableTo = (variableName, value) => {
    if (!checkParameters(variableName, value)) return;
    if (gameVariables[variableName] === null) return;

    gameVariables[variableName] = value;
    const varaibleElements = Array.from(topBar.children);
    const elementToUpdate = varaibleElements.find(el => el.textContent.split(":")[0] === capitalize(variableName));
    const valueToDisplay = variableName === "time" ? formatTime(value) : value;
    elementToUpdate.textContent = `${capitalize(variableName)}: ${valueToDisplay}`;
}

const updateVariableBy = (variableName, changeAmount) => {
    updateVariableTo(variableName, gameVariables[variableName] + changeAmount);
}    

// Tests to be deleted
// initializeVariable("score", 0)
// updateVariableTo("score", 5);

// initializeVariable("health", 2)
// updateVariableBy("health", -1)

// initializeVariable("time", 200)


/*

---------------------------------Input Watching-------------------------

 */


let keyMap = new Map();

// keyControl() is originally copied from https://github.com/danielszabo88/mocorgo by user danielszabo88
// modified by Edmond to use maps instead

function handleKeyDown(e) {
    keyMap.set(e.code, true);
}

function handleKeyUp(e) {
    keyMap.set(e.code, false);
}

function keyControl() {
    canvas.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("keyup", handleKeyUp);
}

keyControl();

function isPressed(keycode) {
    let state = keyMap.get(keycode);
    if (state === undefined) {
        keyMap.set(keycode, false);
        state = false;
    }
    return state;
}


/*

---------------------------------Basic Controls-------------------------

 */


function basicControls(go, speed_x=go.speed_x, speed_y=go.speed_y) {
    let LEFT = isPressed("ArrowLeft") || isPressed("KeyA");
    let RIGHT = isPressed("ArrowRight") || isPressed("KeyD");
    let UP = isPressed("ArrowUp") || isPressed("KeyW");
    let DOWN = isPressed("ArrowDown") || isPressed("KeyS");

    if (LEFT !== RIGHT) {
        if (LEFT === true) {
            go.hb.vx = -speed_x;
        } else if (RIGHT === true) {
            go.hb.vx = speed_x;
        }
    } else {
        go.hb.vx = 0;
    }
    if (UP !== DOWN) {
        if (UP === true) {
            go.hb.vy = -speed_y
        } else if (DOWN === true) {
            go.hb.vy = speed_y
        }
    } else {
        go.hb.vy = 0;
    }
}

function directionControls(go) {
    let LEFT = isPressed("ArrowLeft") || isPressed("KeyA");
    let RIGHT = isPressed("ArrowRight") || isPressed("KeyD");
    let UP = isPressed("ArrowUp") || isPressed("KeyW");
    let DOWN = isPressed("ArrowDown") || isPressed("KeyS");

    const speedx = go.speed_x || 0;
    const speedy = go.soeed_y || 0;
    // TOFIX: hacky way of maintainting minimum speed
    const velocity = Math.max(Math.sqrt(speedx*speedx + speedy*speedy), 15); 

    if (LEFT | RIGHT | UP | DOWN)  {
        if (LEFT && go.speed_x!=0) { go.hb.vy = 0; go.hb.vx = -velocity; }
        if (RIGHT && go.speed_x!=0) { go.hb.vy = 0; go.hb.vx = velocity; }
        if (UP && go.speed_y!=0) { go.hb.vx = 0; go.hb.vy = -velocity }
        if (DOWN && go.speed_y!=0) { go.hb.vx = 0; go.hb.vy = velocity }
    }
}


/*

------------------------------------------Image Upload---------------------------------

 */

const fileInput = document.querySelector('#add-image');
const imageContainer = document.querySelector('.images');
let imageList = [
  {name: "circle", source: "images/circle.png"},
  {name: "hexagon", source: "images/hexagon.png"},
  {name: "square", source: "images/square.png"},
  {name: "triangle", source: "images/triangle.png"},
  {name: "background", source: "images/background.jpg"},
  {name: "transparent", source: "images/transparent.png"},
];

const displayError = (message) => {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hide");
    errorMessage.classList.remove("fade-out");
    setTimeout(() => {
        errorMessage.classList.add("fade-out");
    }, 3000)
    setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.classList.add("hide");
    }, 4000)
}

const getImage = (name) => {
    const foundImage = imageList.find(image => image.name === name);
    return foundImage?.source;
}

const updateImages = () => {
  imageContainer.textContent = "";
  imageList.forEach(image => {
    const {name, source} = image;
    const imageDiv = createImage(name, source);
    imageContainer.appendChild(imageDiv)
  })
}

const removeImage = (e) => {
  const imageDiv = e.target.closest(".image");
  const imageName = imageDiv.querySelector("p").textContent;
  imageList = imageList.filter(image => image.name !== imageName);
  updateImages();
}

const applyBackground = (name) => {
    const source = getImage(name);
    if (source) {
        canvas.style.backgroundImage = `url(${source})`;
    } else {
        canvas.style.backgroundColor = name;
    }
}

const createImage = (imageName, imageSource) => {
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");

  const closeIcon = document.createElement("div");
  closeIcon.classList.add("close-icon");
  closeIcon.textContent = "x";
  closeIcon.addEventListener("click", removeImage)

  const imageElement = document.createElement("img");
  imageElement.src = imageSource;
  imageElement.alt = imageName;

  const imageLabel = document.createElement("p");
  imageLabel.classList.add("image-label");
  imageLabel.textContent = imageName;

  imageDiv.append(closeIcon, imageElement, imageLabel);
  return imageDiv;
};

const handleImageChange = (e) => {
  const imageFile = e.target.files[0];
  const imageName = imageFile.name.split(".")[0].split(" ")[0];
  const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
  if (!imageFile || !ALLOWED_TYPES.includes(imageFile.type)) {
    displayError('Please upload a png, jpeg or jpg file')
    return;
  }
  if (imageList.some(image => image.name === imageName)) {
    displayError('Images should have unique names')
    return;
  }
  let reader = new FileReader();
  reader.readAsDataURL(imageFile);
  reader.onloadend = () => {
    const imagePreview = reader.result;
    imageList.push({name: imageName, source: imagePreview})
    const imageDiv = createImage(imageName, imagePreview);
    imageContainer.appendChild(imageDiv)
  };
};

fileInput.addEventListener('change', handleImageChange);

updateImages();
// applyBackground("background");

/*

------------------------------------------Game Over---------------------------------

 */

const createModal = () => {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    canvas.appendChild(overlay);

    const modal = document.createElement("div");
    modal.classList.add("modal");
    canvas.appendChild(modal);

    const gameOverDiv = document.createElement("div");
    gameOverDiv.classList.add("game-over");
    gameOverDiv.textContent = "game over"
    modal.appendChild(gameOverDiv);

    return modal;
}

const endGame = (win) => {
    const message = win ? "You win!" : "You lose!"

    return () => {
        isGameOn = false;

        const modal = createModal();
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result-message");
        resultDiv.textContent = message;
        modal.appendChild(resultDiv);
    }
}

const winGame = endGame(true);
const loseGame = endGame(false);

/*

------------------------------------------Game Loop---------------------------------

 */

// all objects will be created here
const GameObjectList = [];
const collisionList = [];
const deleteList = [];
const eventMap = new Map();

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

// TODO maybe one day optimize this?
function callCollisionEvents() {
    collisionList.forEach((collision) => {
        let key = collision.go1.objname + "|" + collision.go2.objname;
        let altKey = collision.go2.objname + "|" + collision.go1.objname;
        if (eventMap.has(key)) {
            eventMap.get(key)(collision.go1, collision.go2);
        } else if (eventMap.has(altKey)) {
            eventMap.get(altKey)(collision.go2, collision.go1);
        }
    });
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

function iterateDeleteList() {
    deleteList.forEach((delGo) => {
        const objectElements = Array.from(canvas.children);
        const elementToDelete = objectElements.find(el => el.id === delGo.id);
        elementToDelete.remove();
        let i = GameObjectList.findIndex(go => go.id === delGo.id);
        if (i !== -1) {
            GameObjectList.splice(i, 1);
        }
    })

    deleteList.splice(0, deleteList.length);
}

function deleteGO(go) {
    deleteList.push(go);
}

function clearGO() {
    const objectElements = Array.from(canvas.children);
    objectElements.forEach(el => {
        if (!el.classList.contains("top-bar")) {
            el.remove();
        }
    })
    GameObjectList.splice(0, GameObjectList.length);
    deleteList.splice(0, deleteList.length);
}

function spawn(className, x, y) {
    // MDN docs suggested this alternative to eval
    // src: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
    const fn = Function(`"use strict"; return new ${className}(${x}, ${y})`);
    let go = fn();
    GameObjectList.push(go);
}

function gameLoop() {
    updateTimers();

    iterateDeleteList();
    runAllObjectUpdates();

    applyVelocityToAllHitboxes();
    createCollisionList();
    callCollisionEvents();
    applyCollisionToAllCollidingHitboxes();

    updateAllVisualElements();
    if (isGameOn) {
        clearGO();
    }
    requestAnimationFrame(gameLoop);
}


/*

------------------------------------------Example Generated Code--------------------------------

 */

// class defs

// // TODO delete this class for release, this is a pseudo class for mimicking the compiler output and testing
// class Block extends GameObject {
//     constructor(x, y) {
//         super("Block",
//             "../rsrc/black_rectangle.png",
//             x, y, 50, 50, 2, 0, 0, 0, true);
//     }
// }

// // TODO delete this class for release, this is a pseudo class for mimicking the compiler output and testing
// class Player extends GameObject {
//     constructor(x, y) {
//         super("Player",
//             getImage("circle"),
//             x, y, 50, 50, 1, 0, 0, 0, true);
//         this.speed_x = 150; //150units/s
//         this.speed_y = 150;
//     }

//     update() {
//         basicControls(this); 
//     }
// }

// // TODO this is an example of an event collision function, delete for release
// eventMap.set("Player|Block", (object1, object2) => {
//     console.log(object1.objname, object2.objname);
// });

// // TODO example spawning objects, delete for release
// GameObjectList.push(new Player(10, 10), new Block(200, 200), new Block(300, 300));
// spawn(Block, 150, 150); 

// // start game loop
// gameLoop();


/*

-------------------------------Call Compiler & Run Generated Code--------------------------------

 */

function resetGame() {
    // reset timers
    time_now = Date.now();

    // reset isGameOn
    isGameOn = true;

    // clear engine stuff
    //eventMap.clear();
    //clearGO();
}

let game_script;
function reloadScript(jsString) {
    if (game_script) {
        document.body.removeChild(game_script);
    }

    game_script = document.createElement('script')
    game_script.id = "game-script"
    game_script.type = "text/javascript";

    game_script.text = jsString;
    document.body.appendChild(game_script);
}

function compile() {
    const input = window.monacoEditor.getValue();
    const output = Compiler.compile(input);

    // TODO: better error code
    if (output.parseError) {
        window.alert(`Parse Error: \n ${output.parseError}`);
    } else if(output.compileError) {
        console.log(output.compileError);
        window.alert(`Compiler Error: \n ${output.compileError}`);
    }
    else {
        console.log(output.result);
        resetGame()
        reloadScript(output.result);
    }
}

runButton.addEventListener("click", compile);

gameLoop();