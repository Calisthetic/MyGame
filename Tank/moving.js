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
    id: 'tank',
    way: 0,
    rotate: 0,
    rSpeed: 5,
    x: 500,
    y: 500,
    step: 10,
    width: 40,
    height: 80,
    color: 'red',
    dcolor: 'darkgray',
    trans: 0.25,
    tik: 0,
}
let parton = {
    way: 0,
    speed: 1,
    count: 4,
    cx: 0,
    cy: 0,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    x4: 0,
    y4: 0,
    x5: 0,
    y5: 0,
    x6: 0,
    y6: 0,
    x7: 0,
    y7: 0,
    x8: 0,
    y8: 0,
    t1: 0,
    t2: 0,
    t3: 0,
    t4: 0,
    t5: 0,
    t6: 0,
    t7: 0,
    t8: 0,
    bx1: 0,
    by1: 0,
    bx2: 0,
    by2: 0,
    bx3: 0,
    by3: 0,
    bx4: 0,
    by4: 0,
    bx5: 0,
    by5: 0,
    bx6: 0,
    by6: 0,
    bx7: 0,
    by7: 0,
    bx8: 0,
    by8: 0,
}
let bot = {
    id: 'bot',
    center: 'botCenter',
    bot1: 'bot1',
    bot2: 'bot2',
    width: 70,
    height: 70,
    x: 100,
    y: 100,
    rotate: 0,
    rSpeed: 1,
    step: 50,
    color: 'radial-gradient(circle at 50% 50%, #ff3300, #ff3300 40%, #222222 50%)',
    colorDop: '#444444',
    way: 0,
    mTik: setInterval(() => {renderBot();}, 250),
    hTik: 0,
    hp: 0,
    result: 0,
}
let result = false;
let key = {
    e: 0,
    w: false,
    s: false,
    a: false,
    d: false,
    sp: false,
    h: false,
}
let timer = {
    w: 0,
    s: 0,
    a: 0,
    d: 0,
    sp: 0,
}

setts();
renderMap();
createCar();
renderCar();
createBot();

document.onkeydown = function(event) {
    key.e = (event || window.event).keyCode;
    if (key.e === 37 && key.a === false && key.d === false) {
        key.a = true;
        timer.a = setInterval(() => {
            car.rotate -= car.rSpeed;
            car.way -= car.rSpeed;
            renderWay();
            renderCar();
        }, 40);
    }
    else if (key.e === 39 && key.d === false && key.a === false) {
        key.d = true;
        timer.d = setInterval(() => {
            car.rotate += car.rSpeed;
            car.way += car.rSpeed;
            renderWay();
            renderCar();
        }, 40);
    }
    else if (key.e === 38 && key.w === false && key.s === false) {
        key.w = true;
        timer.w = setInterval(() => {
            if (car.way === 0) {car.y -= car.step}
            else if (car.way === 90) {car.x += car.step}
            else if (car.way === 180) {car.y += car.step}
            else if (car.way === 270) {car.x -= car.step}
            else if (car.way > 0 && car.way < 90) {
                car.x += car.step * (Math.sin(car.way * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y -= car.step * (Math.sin((90 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 90 && car.way < 180) {
                car.y += car.step * (Math.sin((car.way - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x += car.step * (Math.sin((180 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 180 && car.way < 270) {
                car.x -= car.step * (Math.sin((car.way - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y += car.step * (Math.sin((270 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 270 && car.way < 360) {
                car.y -= car.step * (Math.sin((car.way - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x -= car.step * (Math.sin((360 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            renderCar();
        }, 40);
    }
    else if (key.e === 40 && key.s === false && key.w === false) {
        key.s = true;
        timer.s = setInterval(() => {
            if (car.way === 0) {car.y += car.step}
            else if (car.way === 90) {car.x -= car.step}
            else if (car.way === 180) {car.y -= car.step}
            else if (car.way === 270) {car.x += car.step}
            else if (car.way > 0 && car.way < 90) {
                car.x -= car.step * (Math.sin(car.way * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y += car.step * (Math.sin((90 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 90 && car.way < 180) {
                car.y -= car.step * (Math.sin((car.way - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x -= car.step * (Math.sin((180 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 180 && car.way < 270) {
                car.x += car.step * (Math.sin((car.way - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.y -= car.step * (Math.sin((270 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 270 && car.way < 360) {
                car.y += car.step * (Math.sin((car.way - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                car.x += car.step * (Math.sin((360 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            renderCar();
        }, 40);
    }
    else if (key.e === 72 && key.h === false) {
        key.h = true;
        if (bot.rSpeed === 1) {
            bot.hTik = setInterval(() => {renderBot();}, 250);
            clearInterval(bot.mTik);
            setTimeout(() => {
                bot.mTik = 0;
            }, 250);
            bot.rSpeed = 3;
            parton.count = 8;
            document.getElementById('bot4').style.opacity = 1;
            document.getElementById('bot3').style.opacity = 1;
        }
        else if (bot.rSpeed === 3) {
            bot.mTik = setInterval(() => {renderBot();}, 250)
            bot.rSpeed = 1;
            clearInterval(bot.hTik);
            setTimeout(() => {
                bot.hTik = 0;
            }, 250);
            parton.count = 4;
            document.getElementById('bot4').style.opacity = 0;
            document.getElementById('bot3').style.opacity = 0;
            document.getElementById(bot.id).style.transform = 'rotate(0deg)';
        }
        renderCar();
    }
    else if (key.e === 32 && key.sp === false) { 
        key.sp = true;
        if (car.tik === 0) {
            document.getElementById('dulo').style.transition = 'cubic-bezier(0.755, 0.05, 0.855, 0.06) 0.25s';
            document.getElementById('dulo').style.top = - car.height / 40 + 'px';
            setTimeout(() => {document.getElementById('dulo').style.top = car.height / 10 - car.height / 5 + 'px';
            document.getElementById('dulo').style.transition = 'linear ' + car.trans + 's';}, 250);
            let y1 = 0;
            let x1 = 0;
            if (car.way === 0) {y1 -= car.step * 4}
            else if (car.way === 90) {x1 += car.step * 4}
            else if (car.way === 180) {y1 += car.step * 4}
            else if (car.way === 270) {x1 -= car.step * 4}
            else if (car.way > 0 && car.way < 90) {
                x1 += car.step * 4 * (Math.sin(car.way * Math.PI / 180)) / Math.sin(Math.PI / 2);
                y1 -= car.step * 4 * (Math.sin((90 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 90 && car.way < 180) {
                y1 += car.step * 4 * (Math.sin((car.way - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                x1 += car.step * 4 * (Math.sin((180 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 180 && car.way < 270) {
                x1 -= car.step * 4 * (Math.sin((car.way - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                y1 += car.step * 4 * (Math.sin((270 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            else if (car.way > 270 && car.way < 360) {
                y1 -= car.step * 4 * (Math.sin((car.way - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                x1 -= car.step * 4 * (Math.sin((360 - car.way) * Math.PI / 180)) / Math.sin(Math.PI / 2);
            }
            parton.px = car.x + car.width / 2 - car.width / 8 + 2 * x1;
            parton.py = car.y + car.height / 2 - car.width / 5 + 2 * y1;
            var pipka = document.getElementById('map');
            pipka.insertAdjacentHTML('beforeend', '<div id="patron"></div>');
            document.getElementById('patron').style.transform = 'rotate(' + car.rotate + 'deg)';
            document.getElementById('patron').style.height = car.width / 5 * 2 + 'px';
            document.getElementById('patron').style.width = car.width / 5 + 'px';
            document.getElementById('patron').style.position = 'absolute';
            document.getElementById('patron').style.top = parton.py + 'px';
            document.getElementById('patron').style.left = parton.px + 'px';
            document.getElementById('patron').style.borderRadius = '4px 4px 0 0';
            document.getElementById('patron').style.backgroundColor = 'yellow';
            document.getElementById('patron').style.transition = 'linear 0.1s';
            car.tik = setInterval(() => {
                parton.px += parton.speed * x1;
                parton.py += parton.speed * y1;
                document.getElementById('patron').style.top = parton.py + 'px';
                document.getElementById('patron').style.left = parton.px + 'px';
                renderPatron();
            }, 100);
        }
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
    }
    else if (key.e === 72 && key.h === true) {
        key.h = false;
    }
}

function renderWay() {
    if (car.way > 360) {car.way -= 360}
    else if (car.way < 0) {car.way += 360}
    if (bot.way > 360) {bot.way -= 360}
    else if (bot.way < 0) {bot.way += 360}
}

function renderCar() {
    if ((car.way >= 315 && car.way < 360) || (car.way >= 0 && car.way <= 45) || (car.way >= 135 && car.way <= 225)) {
        if ((car.way >= 340 && car.way < 360) || (car.way >= 0 && car.way <= 20) || (car.way >= 160 && car.way <= 200)) {
            if (car.x < 0) {car.x = 0}
            if (car.y < 0) {car.y = 0}
            if (car.y + car.height > map.height) {car.y = map.height - car.height}
            if (car.x + car.width > map.width) {car.x = map.width - car.width}
        }
        else {
            if (car.x - car.width / 4 < 0) {car.x = car.width / 4}
            if (car.y < 0) {car.y = 0}
            if (car.y + car.height > map.height) {car.y = map.height - car.height}
            if (car.x + car.width * 5 / 4 > map.width) {car.x = map.width - car.width * 5 / 4}
        }
    }
    else if ((car.way >= 45 && car.way <= 135) || (car.way <= 315 && car.way >= 225)) {
        if ((car.way >= 70 && car.way <= 110) || (car.way <= 290 && car.way >= 250)) {
            if (car.x - car.width / 2 < 0) {car.x = car.width / 2}
            if (car.y + car.width / 2 < 0) {car.y = -car.width / 2}
            if (car.y + car.width * 3 / 2 > map.height) {car.y = map.height - car.width * 3 / 2}
            if (car.x + car.width * 3 / 2 > map.width) {car.x = map.width - car.width * 3 / 2}
        }
        else {
            if (car.x - car.width / 2 < 0) {car.x = car.width / 2}
            if (car.y + car.width / 4 < 0) {car.y = -car.width / 4}
            if (car.y + car.width * 7 / 4 > map.height) {car.y = map.height - car.width * 7 / 4}
            if (car.x + car.width * 3 / 2 > map.width) {car.x = map.width - car.width * 3 / 2}
        }
    }
    document.getElementById(car.id).style.position = 'absolute';
    document.getElementById(car.id).style.top = car.y + 'px';
    document.getElementById(car.id).style.left = car.x + 'px';
    document.getElementById(car.id).style.width = car.width + 'px';
    document.getElementById(car.id).style.height = car.height + 'px';
    document.getElementById(car.id).style.backgroundColor = car.color;
    document.getElementById(car.id).style.transform = 'rotate(' + car.rotate + 'deg)';
    document.getElementById(car.id).style.transition = 'linear ' + car.trans + 's';
}

function renderPatron() {
    if ((parton.px < 0) || (parton.px + car.width / 5 * 2 > map.width) || (parton.py < 0) || (parton.py + car.width / 5 * 2 > map.height)) {
        clearInterval(car.tik);
        car.tik = 0;
        document.getElementById('patron').remove();
    }
    else if ((parton.px < bot.width + bot.x && parton.px > bot.x) || (parton.px + car.width / 5 * 2 > bot.x && parton.px + car.width / 5 * 2 < bot.x + car.width)) {
        if ((parton.py > bot.y && parton.py < bot.y + car.height) || (parton.py + car.height / 5 > bot.y && parton.py + car.height / 5 < bot.y + car.height)) {
            clearInterval(car.tik);
            car.tik = 0;
            document.getElementById('patron').remove();
            bot.hp += 1;
            if (bot.hp >= 3) {
                if (parton.count === 4) {
                    clearPatrons();
                    setTimeout(() => {result = confirm('Хорошая работа, не хотите победить более сильного врага?')}, 150);
                    bot.hp = 0;
                    setTimeout(() => {
                        if (result) {
                            if (bot.hTik === 0) {
                                bot.hTik = setInterval(() => {renderBot();}, 250);
                                clearInterval(bot.mTik);
                                bot.rSpeed = 3;
                                parton.count = 8;
                                document.getElementById('bot4').style.opacity = 1;
                                document.getElementById('bot3').style.opacity = 1;
                            }
                            else {
                                bot.mTik = setInterval(() => {renderBot();}, 250)
                                bot.rSpeed = 1;
                                clearInterval(bot.hTik);
                                bot.hTik = 0;
                                parton.count = 4;
                                document.getElementById('bot4').style.opacity = 0;
                                document.getElementById('bot3').style.opacity = 0;
                                document.getElementById(bot.id).style.transform = 'rotate(0deg)';
                            }
                        }
                    }, 200);
                }
                else if (bot.hp === 5) {
                    if (bot.result === 0) {
                        bot.result += 1;
                        clearPatrons();
                        setTimeout(() => {result = confirm('Кажется вам повезло...  Давайте повторим?');}, 150);
                    }
                    else if (bot.result === 1) {
                        bot.result += 1;
                        clearPatrons();
                        setTimeout(() => {result = confirm('Враг в шоке, он требует реванш. Согласиться?');}, 150);
                    }
                    else if (bot.result === 2) {
                        bot.result += 1;
                        clearPatrons();
                        setTimeout(() => {result = confirm('В чём Ваш секрет? Может ещё раз?');}, 150);
                    }
                    else if (bot.result === 3) {
                        bot.result += 1;
                        clearPatrons();
                        setTimeout(() => {result = confirm('Теперь Вы бог этой игры, враг признал своё поражение! Кнопка "H" переключает режим игры) Повторим?');}, 150);
                    }
                    else if (bot.result === 4) {
                        clearPatrons();
                        setTimeout(() => {result = confirm('Это было красиво!)');}, 150);
                    }
                    bot.hp = 0;
                }
            }
        }
    }
}

function renderBot() {
    let dst = Math.sqrt(bot.step**2 / 2);
    let biba = Math.round(Math.random() * 7);
    if ((biba === 0) || (biba === 4)) {
        if ((parton.t1 !== 0) || (parton.t2 !== 0) || (parton.t3 !== 0) || (parton.t4 !== 0) || (parton.t5 !== 0) || (parton.t6 !== 0) || (parton.t7 !== 0) || (parton.t8 !== 0)) {
            //console.log('No');
        }
        else {   
            //shot
            let k = 0;
            while (k < parton.count) {
                k += 1;
                if (!document.getElementById('patron' + k)) {
                    var pipka = document.getElementById('map');
                    pipka.insertAdjacentHTML('beforeend', '<div id="patron' + k + '"></div>');
                    document.getElementById('patron' + k).style.height = bot.width / 8 * 2 + 'px';
                    document.getElementById('patron' + k).style.width = bot.width / 8 + 'px';
                    document.getElementById('patron' + k).style.position = 'absolute';
                    document.getElementById('patron' + k).style.borderRadius = '10px 10px 0 0';
                    document.getElementById('patron' + k).style.backgroundColor = 'yellow';
                    document.getElementById('patron' + k).style.transition = 'linear 0.1s';
                }
            }
            if (parton.count === 8) {
                let bw = Math.round(bot.way / 90 - 0.5)
                let h = bot.way - 90 * bw;
                if (h >= 45) {h -= 45}
                let r1 = h;
                let r3 = h + 45 * 2;
                let r5 = h + 45 * 4;
                let r7 = h + 45 * 6;
                let r2 = h + 45 * 1;
                let r4 = h + 45 * 3;
                let r6 = h + 45 * 5;
                let r8 = h + 45 * 7;
                parton.by1 = -bot.step / 2 * (Math.sin((90 - r1) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx1 = bot.step / 2 * (Math.sin(r1 * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by2 = -bot.step / 2 * (Math.sin((90 - r2) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx2 = bot.step / 2 * (Math.sin(r2 * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by3 = bot.step / 2 * (Math.sin((r3 - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx3 = bot.step / 2 * (Math.sin((180 - r3) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by4 = bot.step / 2 * (Math.sin((r4 - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx4 = bot.step / 2 * (Math.sin((180 - r4) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by5 = bot.step / 2 * (Math.sin((270 - r5) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx5 = -bot.step / 2 * (Math.sin((r5 - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by6 = bot.step / 2 * (Math.sin((270 - r6) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx6 = -bot.step / 2 * (Math.sin((r6 - 180) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by7 = -bot.step / 2 * (Math.sin((r7 - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx7 = -bot.step / 2 * (Math.sin((360 - r7) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by8 = -bot.step / 2 * (Math.sin((r8 - 270) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx8 = -bot.step / 2 * (Math.sin((360 - r8) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.x1 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx1;
                parton.y1 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by1;
                parton.x2 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx2;
                parton.y2 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by2;
                parton.x3 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx3;
                parton.y3 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by3;
                parton.x4 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx4;
                parton.y4 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by4;
                parton.x5 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx5;
                parton.y5 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by5;
                parton.x6 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx6;
                parton.y6 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by6;
                parton.x7 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx7;
                parton.y7 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by7;
                parton.x8 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx8;
                parton.y8 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by8;
                document.getElementById('patron1').style.transform = 'rotate(' + r1 + 'deg)';
                document.getElementById('patron2').style.transform = 'rotate(' + r2 + 'deg)';
                document.getElementById('patron3').style.transform = 'rotate(' + r3 + 'deg)';
                document.getElementById('patron4').style.transform = 'rotate(' + r4 + 'deg)';
                document.getElementById('patron5').style.transform = 'rotate(' + r5 + 'deg)';
                document.getElementById('patron6').style.transform = 'rotate(' + r6 + 'deg)';
                document.getElementById('patron7').style.transform = 'rotate(' + r7 + 'deg)';
                document.getElementById('patron8').style.transform = 'rotate(' + r8 + 'deg)';
                document.getElementById('patron1').style.top = parton.y1 + 'px';
                document.getElementById('patron1').style.left = parton.x1 + 'px';
                document.getElementById('patron2').style.top = parton.y2 + 'px';
                document.getElementById('patron2').style.left = parton.x2 + 'px';
                document.getElementById('patron3').style.top = parton.y3 + 'px';
                document.getElementById('patron3').style.left = parton.x3 + 'px';
                document.getElementById('patron4').style.top = parton.y4 + 'px';
                document.getElementById('patron4').style.left = parton.x4 + 'px';
                document.getElementById('patron5').style.top = parton.y5 + 'px';
                document.getElementById('patron5').style.left = parton.x5 + 'px';
                document.getElementById('patron6').style.top = parton.y6 + 'px';
                document.getElementById('patron6').style.left = parton.x6 + 'px';
                document.getElementById('patron7').style.top = parton.y7 + 'px';
                document.getElementById('patron7').style.left = parton.x7 + 'px';
                document.getElementById('patron8').style.top = parton.y8 + 'px';
                document.getElementById('patron8').style.left = parton.x8 + 'px';
                parton.t1 = setInterval(() => {
                    parton.x1 = parton.x1 + parton.speed * parton.bx1;
                    parton.y1 = parton.y1 + parton.speed * parton.by1;
                    document.getElementById('patron1').style.top = parton.y1 + 'px';
                    document.getElementById('patron1').style.left = parton.x1 + 'px';
                    renderPatrons();
                }, 100);
                parton.t2 = setInterval(() => {
                    parton.x2 = parton.x2 + parton.speed * parton.bx2;
                    parton.y2 = parton.y2 + parton.speed * parton.by2;
                    document.getElementById('patron2').style.top = parton.y2 + 'px';
                    document.getElementById('patron2').style.left = parton.x2 + 'px';
                    renderPatrons();
                }, 100);
                parton.t3 = setInterval(() => {
                    parton.x3 = parton.x3 + parton.speed * parton.bx3;
                    parton.y3 = parton.y3 + parton.speed * parton.by3;
                    document.getElementById('patron3').style.top = parton.y3 + 'px';
                    document.getElementById('patron3').style.left = parton.x3 + 'px';
                    renderPatrons();
                }, 100);
                parton.t4 = setInterval(() => {
                    parton.x4 = parton.x4 + parton.speed * parton.bx4;
                    parton.y4 = parton.y4 + parton.speed * parton.by4;
                    document.getElementById('patron4').style.top = parton.y4 + 'px';
                    document.getElementById('patron4').style.left = parton.x4 + 'px';
                    renderPatrons();
                }, 100);
                parton.t5 = setInterval(() => {
                    parton.x5 = parton.x5 + parton.speed * parton.bx5;
                    parton.y5 = parton.y5 + parton.speed * parton.by5;
                    document.getElementById('patron5').style.top = parton.y5 + 'px';
                    document.getElementById('patron5').style.left = parton.x5 + 'px';
                    renderPatrons();
                }, 100);
                parton.t6 = setInterval(() => {
                    parton.x6 = parton.x6 + parton.speed * parton.bx6;
                    parton.y6 = parton.y6 + parton.speed * parton.by6;
                    document.getElementById('patron6').style.top = parton.y6 + 'px';
                    document.getElementById('patron6').style.left = parton.x6 + 'px';
                    renderPatrons();
                }, 100);
                parton.t7 = setInterval(() => {
                    parton.x7 = parton.x7 + parton.speed * parton.bx7;
                    parton.y7 = parton.y7 + parton.speed * parton.by7;
                    document.getElementById('patron7').style.top = parton.y7 + 'px';
                    document.getElementById('patron7').style.left = parton.x7 + 'px';
                    renderPatrons();
                }, 100);
                parton.t8 = setInterval(() => {
                    parton.x8 = parton.x8 + parton.speed * parton.bx8;
                    parton.y8 = parton.y8 + parton.speed * parton.by8;
                    document.getElementById('patron8').style.top = parton.y8 + 'px';
                    document.getElementById('patron8').style.left = parton.x8 + 'px';
                    renderPatrons();
                }, 100);
            }
            else {
                let bw = Math.round(bot.way / 90 - 0.5)
                let h = bot.way - 90 * bw;
                let r1 = h;
                let r2 = h + 45 * 2;
                let r3 = h + 45 * 4;
                let r4 = h + 45 * 6;
                parton.by1 = -bot.step / 2 * (Math.sin((90 - r1) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx1 = bot.step / 2 * (Math.sin(r1 * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by2 = -bot.step / 2 * (Math.sin((90 - r2) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx2 = bot.step / 2 * (Math.sin(r2 * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by3 = bot.step / 2 * (Math.sin((r3 - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx3 = bot.step / 2 * (Math.sin((180 - r3) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.by4 = bot.step / 2 * (Math.sin((r4 - 90) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.bx4 = bot.step / 2  * (Math.sin((180 - r4) * Math.PI / 180)) / Math.sin(Math.PI / 2);
                parton.x1 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx1;
                parton.y1 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by1;
                parton.x2 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx2;
                parton.y2 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by2;
                parton.x3 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx3;
                parton.y3 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by3;
                parton.x4 = bot.x + bot.width / 2 - bot.width / 20 + 2 * parton.bx4;
                parton.y4 = bot.y + bot.height / 2 - bot.width / 10 + 2 * parton.by4;
                document.getElementById('patron1').style.transform = 'rotate(' + r1 + 'deg)';
                document.getElementById('patron2').style.transform = 'rotate(' + r2 + 'deg)';
                document.getElementById('patron3').style.transform = 'rotate(' + r3 + 'deg)';
                document.getElementById('patron4').style.transform = 'rotate(' + r4 + 'deg)';
                document.getElementById('patron1').style.top = parton.y1 + 'px';
                document.getElementById('patron1').style.left = parton.x1 + 'px';
                document.getElementById('patron2').style.top = parton.y2 + 'px';
                document.getElementById('patron2').style.left = parton.x2 + 'px';
                document.getElementById('patron3').style.top = parton.y3 + 'px';
                document.getElementById('patron3').style.left = parton.x3 + 'px';
                document.getElementById('patron4').style.top = parton.y4 + 'px';
                document.getElementById('patron4').style.left = parton.x4 + 'px';
                parton.t1 = setInterval(() => {
                    parton.x1 = parton.x1 + parton.speed * parton.bx1;
                    parton.y1 = parton.y1 + parton.speed * parton.by1;
                    document.getElementById('patron1').style.top = parton.y1 + 'px';
                    document.getElementById('patron1').style.left = parton.x1 + 'px';
                    renderPatrons();
                }, 100);
                parton.t2 = setInterval(() => {
                    parton.x2 = parton.x2 + parton.speed * parton.bx2;
                    parton.y2 = parton.y2 + parton.speed * parton.by2;
                    document.getElementById('patron2').style.top = parton.y2 + 'px';
                    document.getElementById('patron2').style.left = parton.x2 + 'px';
                    renderPatrons();
                }, 100);
                parton.t3 = setInterval(() => {
                    parton.x3 = parton.x3 + parton.speed * parton.bx3;
                    parton.y3 = parton.y3 + parton.speed * parton.by3;
                    document.getElementById('patron3').style.top = parton.y3 + 'px';
                    document.getElementById('patron3').style.left = parton.x3 + 'px';
                    renderPatrons();
                }, 100);
                parton.t4 = setInterval(() => {
                    parton.x4 = parton.x4 + parton.speed * parton.bx4;
                    parton.y4 = parton.y4 + parton.speed * parton.by4;
                    document.getElementById('patron4').style.top = parton.y4 + 'px';
                    document.getElementById('patron4').style.left = parton.x4 + 'px';
                    renderPatrons();
                }, 100);
            }
        }
    }
    //moves
    if (biba === 0) {
        if (bot.y === 0) {bot.y += bot.step;}
        else if (bot.y - bot.step < 0) {bot.y = 0;}
        else {bot.y -= bot.step;}
    }
    else if (biba === 1) {
        if ((bot.y === 0) || (bot.y - dst < 0)) {
            if (bot.y === 0) {bot.y += bot.step;}
            else if (bot.y - dst < 0) {bot.y = 0;}
        }
        else {bot.y -= dst;}
        if ((bot.x + dst + bot.width > map.width) || (bot.x === map.width - bot.width)) {
            if (bot.x + dst + bot.width > map.width) {bot.x = map.width - bot.width;}
            else if (bot.x === map.width - bot.width) {bot.x -= bot.step;}
        }
        else {bot.x += dst;}
    }
    else if (biba === 2) {
        if (bot.x === map.width - bot.width) {bot.x -= bot.step;}
        else if (bot.x + bot.width + bot.step > map.width) {bot.x = map.width - bot.width;}
        else {bot.x += bot.step;}
    }
    else if (biba === 3) {
        if ((bot.y === map.height - bot.height) || (bot.y + bot.height + dst > map.height)) {
            if (bot.y === 0) {bot.y += bot.step;}
            else if (bot.y - dst < 0) {bot.y = 0;}
        }
        else {bot.y += dst;}
        if ((bot.x + dst + bot.width > map.width) || (bot.x === map.width - bot.width)) {
            if (bot.x + dst + bot.width > map.width) {bot.x = map.width - bot.width;}
            else if (bot.x === map.width - bot.width) {bot.x -= bot.step;}
        }
        else {bot.x += dst;}
    }
    else if (biba === 4) {
        if (bot.y === map.height - bot.height) {bot.y -= bot.step;}
        else if (bot.y + bot.step + bot.height > map.height) {bot.y = map.height - bot.height;}
        else {bot.y += bot.step;}
    }
    else if (biba === 5) {
        if ((bot.y === map.height - bot.height) || (bot.y + bot.height + dst > map.height)) {
            if (bot.y === 0) {bot.y += bot.step;}
            else if (bot.y - dst < 0) {bot.y = 0;}
        }
        else {bot.y += dst;}
        if ((bot.x - dst < 0) || (bot.x === 0)) {
            if (bot.x - dst < 0) {bot.x === 0;}
            else if (bot.x === 0) {bot.x += bot.step;}
        }
        else {bot.x -= dst;}
    }
    else if (biba === 6) {
        if (bot.x === 0) {bot.x += bot.step;}
        else if (bot.x - bot.step < 0) {bot.x = 0;}
        else {bot.x -= bot.step;}
    }
    else if (biba === 7) {
        if ((bot.y === 0) || (bot.y - dst < 0)) {
            if (bot.y === 0) {bot.y += bot.step;}
            else if (bot.y - dst < 0) {bot.y = 0;}
        }
        else {bot.y -= dst;}
        if ((bot.x - dst < 0) || (bot.x === 0)) {
            if (bot.x - dst < 0) {bot.x === 0;}
            else if (bot.x === 0) {bot.x += bot.step;}
        }
        else {bot.x -= dst;}
    }
    document.getElementById(bot.id).style.top = bot.y + 'px';
    document.getElementById(bot.id).style.left = bot.x + 'px';
    bot.rotate += 15 * bot.rSpeed;
    bot.way += 15 * bot.rSpeed;
    renderWay();
    document.getElementById(bot.id).style.transform = 'rotate(' + bot.rotate + 'deg)';
}
