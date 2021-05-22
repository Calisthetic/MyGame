let map = {
    x: 0,
    y: 0,
    maxW: window.innerWidth,
    maxH: window.innerHeight,
    width: 720,
    height: 560,
    color: '#f5f5f5',
}

let cube = {
    x: 0,
    y: 0,
    id: 'cube',
    width: 56,
    height: 56,
    min: 10,
    max: 300,
    trn: .25,
    step: 56,
    color: 'black',
    oldX: 0,
    oldY: 0,
    buffCount: 0,
    buffRecord: 0,
    buffPrize: 15,
    end: 1,
    endGo: 0,
    smaller: 0,
    one: 0,
    click: 0,
}

let bots = [];

let bot = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red'
}

// bots.push(spawnCube(map, bot));

let buffs = [];

let buff = {
    x: 0,
    y: 0,
    id: 1,
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red',
    countDie: 0,
}

let bar = {
    height: 100,
    color: 'f5f5f5',
    border: 7,
    trnstn: 0.25,
}
let restart = {
    id: 'restart',
}

buff.color = 'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) ' + (buff.width / 3 - 2) + 'px, rgb(255, 0, 0) ' + buff.width / 3 + 'px, rgb(255, 0, 0) ' + (buff.width / 2 - 2) + 'px, rgba(255, 255, 255, 0) ' + buff.width / 2 + 'px)';
map.x = (map.maxW - map.width) / 2;
map.y = (map.maxH - 20 - bar.height - map.height - bar.border * 2) / 2;

// buffs.push(spawnCube(map, buff));
renderBar();
renderMap(map);
renderCube(spawnCube(map, cube));
// renderBots(bots);
// renderBuffs(buffs);

let tike = setInterval(timeTike, 2000);
let smaller = setInterval(smallerCube, 250);
