let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#999999',
    c: 0,
    id: 'map',
}

let img = {k: 0}

let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    widthMin: 10,
    heightMin: 10,
    widthMax: 300,
    heightMax: 300,
    trnstn: .25,
    color: 'white',
    c: 0,
    //action
    step: 20,
    //size change
    sStep: 50,
    //shadow
    shadowWidth: 0,
    shadowMinus: 0,
    shadowMargin: 0,
    shadowColor: 0,
    //border-radius
    borderMin: 0,
    borderStep: 10,
    //borders
    borderWidth: 0,
    borderColor: 'black',
    //don,t change
    borderRadius: 0,
    b: 0,
    borderMax: 0,
    rotate: 0,
    r: 0,
    sizeStep: 0,
    password: 10,
    k: 0,
}
let cubeDop = {
    x: 0,
    y: 0,
    height: 30,
    width: 30,
    color: 'white',
    // color: 'linear-gradient(to right, salmon, red, orange, yellow, lime, cyan, blue, purple, MediumOrchid)',
    borderRadius: 15,
    //counter
    k: 0,
    //rgb color
    c1: 0,
    //rainbow count
    t: 0,
    //for V
    v: 0,
    trnstn: 2.2,
    speed: 100,
};

let bots = [];
let bot = {
    id: 1,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    trnstn: .25,
    step: 20,
    color: 'yellow'
};
bots.push(bot);

let buffs = [];
let buff = {
    id: 2,
    x: 200,
    y: 200,
    width: 56,
    height: 56,
    trnstn: .25,
    color: 'purple'
};
buffs.push(buff);

let paint = {
    k: 0,
    x: 0,
    y: 0,
}

renderMargin();
renderMap(map);
renderCube(spawnCube(map, cube));
renderBots(bots);
renderBuffs(buffs);

let tik = setInterval(() => timeTik(), 250);
let testTik = setInterval(() => renderCDs(), cubeDop.speed);