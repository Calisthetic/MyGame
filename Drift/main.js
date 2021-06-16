let map = {
    id: 'map',
    color: 'lime',
    height: 0,
    width: 0,
    mw: window.innerWidth,
    mh: window.innerHeight,
    x: 0,
    y: 0,
    border: 5,
}
let car = {
    id: 'car',
    way: 0,
    rotate: 0,
    rSpeed: 5,
    x: 500,
    y: 500,
    speed: 10,
    speedNow: 0,
    turbo: 1.5,
    drift: 32,
    width: 20,
    height: 40,
    color: 'red',
    trans: 0.1,
    tik: 0,
    w: 0,
    s: 0,
}
let turbo = {
    height: 0,
    width: 10,
    y: 0,
    x: 0,
}
let key = {
    side: 0,
    e: 0,
    w: false,
    s: false,
    a: false,
    d: false,
    sh: false,
    sp: false,
}
let timer = {
    w: 0,
    s: 0,
    a: 0,
    d: 0,
    sh: 0,
    sp: 0,
}
let tim = setInterval(() => {renderWay(); renderCar();}, 40);

setts();
renderMap();
createCar();
renderCar();

function setts() {
    map.height = map.mh - 100;
    map.width = map.mw - 110;
    map.x = 50;
    map.y = 50;
    turbo.height = map.height;
    car.speedNow = car.speed;
}

document.onkeydown = function(event) {
    key.e = (event || window.event).keyCode;
    if (key.e === 37 && key.a === false) {
        key.a = true;
        if (key.d === true) {key.d = false;}
        timer.a = setInterval(() => {
            if ((key.w === true && key.a === true) || (key.s === true && key.a === true)) {
                car.rotate -= car.rSpeed;
                car.way -= car.rSpeed;
            }
        }, 40);
        if (key.sp === true) {
            renderDrift();
        }
    }
    else if (key.e === 39 && key.d === false) {
        key.d = true;
        if (key.a === true) {key.a = false;}
        timer.d = setInterval(() => {
            if ((key.w === true && key.d === true) || (key.s === true && key.d === true)) {
                car.rotate += car.rSpeed;
                car.way += car.rSpeed;
            }
        }, 40);
        if (key.sp === true) {
            renderDrift();
        }
    }
    else if (key.e === 38 && key.w === false && key.s === false) {
        key.w = true;
        timer.w = setInterval(() => {
            if (car.way === 0) {car.y -= car.speedNow}
            else if (car.way > 0 && car.way < 90) {
                car.x += car.speedNow * (Math.sin(car.way * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y -= car.speedNow * (Math.sin((90 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way === 90) {car.x += car.speedNow}
            else if (car.way > 90 && car.way < 180) {
                car.y += car.speedNow * (Math.sin((car.way - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x += car.speedNow * (Math.sin((180 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way === 180) {car.y += car.speedNow}
            else if (car.way > 180 && car.way < 270) {
                car.x -= car.speedNow * (Math.sin((car.way - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y += car.speedNow * (Math.sin((270 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way === 270) {car.x -= car.speedNow}
            else if (car.way > 270 && car.way < 360) {
                car.y -= car.speedNow * (Math.sin((car.way - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x -= car.speedNow * (Math.sin((360 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
        }, 40);
    }
    else if (key.e === 40 && key.s === false && key.w === false) {
        key.s = true;
        timer.s = setInterval(() => {
            if (car.way === 0) {car.y += car.speedNow}
            else if (car.way > 0 && car.way < 90) {
                car.x -= car.speedNow * (Math.sin(car.way * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y += car.speedNow * (Math.sin((90 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way === 90) {car.x -= car.speedNow}
            else if (car.way > 90 && car.way < 180) {
                car.y -= car.speedNow * (Math.sin((car.way - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x -= car.speedNow * (Math.sin((180 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way === 180) {car.y -= car.speedNow}
            else if (car.way > 180 && car.way < 270) {
                car.x += car.speedNow * (Math.sin((car.way - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y -= car.speedNow * (Math.sin((270 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way === 270) {car.x += car.speedNow}
            else if (car.way > 270 && car.way < 360) {
                car.y += car.speedNow * (Math.sin((car.way - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x += car.speedNow * (Math.sin((360 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
        }, 40);
    }
    else if (key.e === 32 && key.sp === false) { 
        key.sp = true;
        renderDrift();
        timer.sp = setInterval(() => {
            if (key.w === true) {
                if ((key.w === true) || (key.sh === true)) {
                    car.rotate += car.drift;
                    car.way += car.drift;
                }
                if (key.sh === false) {
                    if (turbo.height + map.height / 3 / 25 <= map.height) {
                        turbo.height += map.height / 9 / 25;
                        turbo.y -= map.height / 18 / 25;
                    }
                    else {turbo.height = map.height; turbo.y = 0;}
                    renderTurbo();
                }
            }
        }, 40);
    }
    else if (key.e === 16 && key.sh === false) {
        key.sh = true;
        timer.sh = setInterval(() => {
            if (turbo.height - map.height / 3 / 25 > 0) {
                turbo.height -= map.height / 3 / 25;
                turbo.y += map.height / 3 / 25 / 2;
                car.speedNow = car.speed * car.turbo;
            }
            else {car.speedNow = car.speed}
            renderTurbo();
        }, 40);
    }
}

document.onkeyup = function(event) {
    key.e = (event || window.event).keyCode;
    if (key.e === 37 && key.a === true) {
        key.a = false;
        clearInterval(timer.a);
        timer.a = 0;
    }
    else if (key.e === 39 && key.d === true) {
        key.d = false;
        clearInterval(timer.d);
        timer.d = 0;
    }
    else if (key.e === 38 && key.w === true) {
        key.w = false;
        clearInterval(timer.w);
        timer.w = 0;
    }
    else if (key.e === 40 && key.s === true) {
        key.s = false;
        clearInterval(timer.s);
        timer.s = 0;
    }
    else if (key.e === 32 && key.sp === true) {
        key.sp = false;
        clearInterval(timer.sp);
        timer.sp = 0;
        if (key.side === 1) {car.rotate += 32;}
        else if (key.side === 2) {car.rotate -= 32;}
        key.side = 0;
        car.drift = 0;
    }
    else if (key.e === 16 && key.sh === true) {
        key.sh = false;
        clearInterval(timer.sh);
        timer.sh = 0;
        car.speedNow = car.speed;
    }
}



function renderWay() {
    if (car.way >= 360) {car.way = car.way - 360}
    else if (car.way < 0) {car.way = 360 + car.way}
}
function renderCar() {
    if ((car.way >= 315 && car.way < 360) || (car.way >= 0 && car.way <= 45) || (car.way >= 135 && car.way <= 225)) {
        if ((car.way >= 340 && car.way < 360) || (car.way >= 0 && car.way <= 20) || (car.way >= 160 && car.way <= 200)) {
            if (car.x < 0) {car.x = 0}
            else if (car.x + car.width > map.width) {car.x = map.width - car.width}
            if (car.y < 0) {car.y = 0}
            else if (car.y + car.height > map.height) {car.y = map.height - car.height}
        }
        else {
            if (car.x - car.width / 4 < 0) {car.x = car.width / 4}
            else if (car.x + car.width * 5 / 4 > map.width) {car.x = map.width - car.width * 5 / 4}
            if (car.y < 0) {car.y = 0}
            else if (car.y + car.height > map.height) {car.y = map.height - car.height}
        }
    }
    else if ((car.way >= 45 && car.way <= 135) || (car.way <= 315 && car.way >= 225)) {
        if ((car.way >= 70 && car.way <= 110) || (car.way <= 290 && car.way >= 250)) {
            if (car.x - car.width / 2 < 0) {car.x = car.width / 2}
            else if (car.x + car.width * 3 / 2 > map.width) {car.x = map.width - car.width * 3 / 2}
            if (car.y + car.width / 2 < 0) {car.y = -car.width / 2}
            else if (car.y + car.width * 3 / 2 > map.height) {car.y = map.height - car.width * 3 / 2}
        }
        else {
            if (car.x - car.width / 2 < 0) {car.x = car.width / 2}
            else if (car.x + car.width * 3 / 2 > map.width) {car.x = map.width - car.width * 3 / 2}
            if (car.y + car.width / 4 < 0) {car.y = -car.width / 4}
            else if (car.y + car.width * 7 / 4 > map.height) {car.y = map.height - car.width * 7 / 4}
        }
    }
    document.getElementById(car.id).style.top = car.y + 'px';
    document.getElementById(car.id).style.left = car.x + 'px';
    document.getElementById(car.id).style.width = car.width + 'px';
    document.getElementById(car.id).style.height = car.height + 'px';
    document.getElementById(car.id).style.backgroundColor = car.color;
    document.getElementById(car.id).style.transform = 'rotate(' + car.rotate + 'deg)';
}

function renderTurbo() {
    document.getElementById('turbo').style.height = turbo.height + 'px';
    document.getElementById('turbo').style.width = turbo.width + 'px';
    document.getElementById('turbo').style.top = turbo.y + 'px';
    document.getElementById('turbo').style.left = turbo.x + 'px';
}
function renderDrift() {
    if (key.side === 0) {
        if (key.a === true) {key.side = 1; car.rotate -= 32; car.drift = -2;}
        else if (key.d === true) {key.side = 2; car.rotate += 32; car.drift = 2;}
    }
    else {
        if (key.d === true) {car.rotate += 64; car.drift = 2; key.side = 2;}
        else if (key.a === true) {car.rotate -= 64; car.drift = -2; key.side = 1;}
    }
}


function renderMap() {
    document.getElementById(map.id).style.height = map.height + 'px';
    document.getElementById(map.id).style.width = map.width + 'px';
    document.getElementById(map.id).style.top = map.y + 'px';
    document.getElementById(map.id).style.left = map.x + 'px';
    document.getElementById(map.id).style.backgroundColor = map.color;
    document.getElementById(map.id).style.borderRadius = map.border + 'px ' + 0 + 'px ' + 0 + 'px ' + map.border + 'px ';
    document.getElementById(map.id).style.boxShadow = '0px 0px 10px 5px rgba(34, 60, 80, 0.25)';
    document.getElementById('turboBar').style.height = map.height + 'px';
    document.getElementById('turboBar').style.width = 10 + 'px';
    document.getElementById('turboBar').style.top = map.y + 'px';
    document.getElementById('turboBar').style.left = map.x + map.width + 'px';
    document.getElementById('turboBar').style.backgroundColor = 'grey';
    document.getElementById('turboBar').style.borderRadius = 0 + 'px ' + map.border + 'px ' + map.border + 'px ' + 0 + 'px ';
    document.getElementById('turboBar').style.boxShadow = '2px 0px 6px 3px rgba(34, 60, 80, 0.25)';
    document.getElementById('turbo').style.height = turbo.height + 'px';
    document.getElementById('turbo').style.width = turbo.width + 'px';
    document.getElementById('turbo').style.top = turbo.y + 'px';
    document.getElementById('turbo').style.left = turbo.x + 'px';
    document.getElementById('turbo').style.backgroundColor = 'aqua';
    document.getElementById('turbo').style.borderRadius = 0 + 'px ' + map.border + 'px ' + map.border + 'px ' + 0 + 'px ';
    document.getElementById('turbo').style.transition = 'ease ' + car.trans + 's';
}

function createCar() {
    document.getElementById(car.id).style.position = 'absolute';
    document.getElementById(car.id).style.height = car.height + 'px';
    document.getElementById(car.id).style.width = car.width + 'px';
    document.getElementById(car.id).style.top = car.y + 'px';
    document.getElementById(car.id).style.left = car.x + 'px';
    document.getElementById(car.id).style.boxShadow = '0px 0px 5px 0px rgba(34, 60, 80, 0.5)';
    document.getElementById(car.id).style.borderRadius = car.width / 4 + 'px ' + car.width / 4 + 'px ' + car.width / 10 + 'px ' + car.width / 10 + 'px';
    document.getElementById(car.id).style.transition = 'linear ' + car.trans + 's';
}