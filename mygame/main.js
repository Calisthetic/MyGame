let map = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    color: '#f5f5f5',
    border: '#f1f1f1'
}

let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let bots = [];
let bot = {
    id: 1,
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
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

renderMap(map);
renderCube(spawnCube(map, cube));
renderBots(bots);
renderBuffs(buffs);

let tik = setInterval(() => timeTik(), 1000);