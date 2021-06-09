



function setts() {
    map.height = map.mh - 50 - 150;
    map.width = map.mw - 50;
    map.x = 50 / 2 - map.border;
    map.y = 50 / 2 - map.border;
}

function renderMap() {
    document.getElementById(map.id).style.height = map.height + 'px';
    document.getElementById(map.id).style.width = map.width + 'px';
    document.getElementById(map.id).style.top = map.y + 'px';
    document.getElementById(map.id).style.left = map.x + 'px';
    document.getElementById(map.id).style.backgroundColor = map.color;
    document.getElementById(map.id).style.borderRadius = map.border + 'px';
    document.getElementById(map.id).style.boxShadow = '0px 1px 10px 5px rgba(34, 60, 80, 0.25)';
}

function createCar() {
    document.getElementById(car.id).style.height = car.height + 'px';
    document.getElementById(car.id).style.width = car.width + 'px';
    document.getElementById(car.id).style.top = car.y + 'px';
    document.getElementById(car.id).style.left = car.x + 'px';
    document.getElementById(car.id).style.backgroundColor = car.color;
    document.getElementById(car.id).style.transform = 'rotate(' + car.rotate + 'deg)';
    document.getElementById(car.id).style.boxShadow = '0px 0px 5px 0px rgba(34, 60, 80, 0.5)';
    document.getElementById(car.id).style.borderRadius = car.width / 4 + 'px ' + car.width / 4 + 'px ' + car.width / 10 + 'px ' + car.width / 10 + 'px';
    document.getElementById(car.id).style.transition = 'linear ' + car.trans + 's';
    //corp
    document.getElementById('corp').style.height = car.height / 2 - car.height / 10 + 'px';
    document.getElementById('corp').style.width = car.width - car.width / 5 + 'px';
    document.getElementById('corp').style.top = car.height * 2 / 5 + car.height / 20 + 'px';
    document.getElementById('corp').style.left =  car.width / 10 + 'px';
    document.getElementById('corp').style.borderRadius = 8 + 'px';
    document.getElementById('corp').style.backgroundColor = car.dcolor;
    document.getElementById('corp').style.transition = 'linear ' + car.trans + 's';
    //dulo
    document.getElementById('dulo').style.height = car.height * 2 / 3 + 'px';
    document.getElementById('dulo').style.width = car.width / 5 + 'px';
    document.getElementById('dulo').style.top = car.height / 10 - car.height / 5 + 'px';
    document.getElementById('dulo').style.left =  car.width / 5 * 2 + 'px';
    document.getElementById('dulo').style.borderRadius = 1 + 'px';
    document.getElementById('dulo').style.backgroundColor = car.dcolor;
    document.getElementById('dulo').style.transition = 'linear ' + car.trans + 's';
}

function createBot() {
    document.getElementById(bot.id).style.height = bot.height + 'px';
    document.getElementById(bot.id).style.width = bot.width + 'px';
    document.getElementById(bot.id).style.top = bot.y + 'px';
    document.getElementById(bot.id).style.left = bot.x + 'px';
    document.getElementById(bot.id).style.transition = 'linear 0.5s';
    document.getElementById('bot1').style.height = bot.height / 5 + 'px';
    document.getElementById('bot1').style.width = bot.width * 12 / 10 + 'px';
    document.getElementById('bot1').style.top = bot.height * 2 / 5 + 'px';
    document.getElementById('bot1').style.left = -bot.width / 10 + 'px';
    document.getElementById('bot1').style.backgroundColor = bot.colorDop;
    document.getElementById('bot1').style.borderRadius = bot.height / 25 * 2 + 'px';
    document.getElementById('bot2').style.height = bot.height * 12 / 10 + 'px';
    document.getElementById('bot2').style.width = bot.width / 5 + 'px';
    document.getElementById('bot2').style.top = -bot.height / 10 + 'px';
    document.getElementById('bot2').style.left = bot.width * 2 / 5 + 'px';
    document.getElementById('bot2').style.backgroundColor = bot.colorDop;
    document.getElementById('bot2').style.borderRadius = bot.height / 25 * 2 + 'px';
    document.getElementById('bot3').style.height = bot.height / 5 + 'px';
    document.getElementById('bot3').style.width = Math.sqrt(bot.width * bot.width * 2) - 15 + 'px';
    document.getElementById('bot3').style.top = 29 + 'px';
    document.getElementById('bot3').style.left = -8 + 'px';
    document.getElementById('bot3').style.backgroundColor = bot.colorDop;
    document.getElementById('bot3').style.borderRadius = bot.height / 25 * 2 + 'px';
    document.getElementById('bot3').style.transform = 'rotate(45deg)';
    document.getElementById('bot3').style.opacity = 0;
    document.getElementById('bot3').style.transition = 'linear 0.5s';
    document.getElementById('bot4').style.height = bot.height / 5 + 'px';
    document.getElementById('bot4').style.width = Math.sqrt(bot.width * bot.width * 2) - 15 + 'px';
    document.getElementById('bot4').style.top = 28 + 'px';
    document.getElementById('bot4').style.left = -7 + 'px';
    document.getElementById('bot4').style.backgroundColor = bot.colorDop;
    document.getElementById('bot4').style.borderRadius = bot.height / 25 * 2 + 'px';
    document.getElementById('bot4').style.transform = 'rotate(135deg)';
    document.getElementById('bot4').style.opacity = 0;
    document.getElementById('bot4').style.transition = 'linear 0.5s';
    document.getElementById('botCenter').style.height = bot.height + 'px';
    document.getElementById('botCenter').style.width = bot.width + 'px';
    document.getElementById('botCenter').style.borderRadius = bot.height / 2 + 'px';
    document.getElementById('botCenter').style.background = bot.color;
    document.getElementById('botCenter').style.boxShadow = '0px 0px 10px 2px rgba(34, 60, 80, 0.5)';
}

function renderPatrons() {
    if (parton.count === 4) {
        if (parton.t1 !== 0) {
            if ((parton.x1 < 0) || (parton.x1 + bot.width / 5 > map.width) || (parton.y1 < 0) || (parton.y1 + bot.width / 5 > map.height)) {
                clearInterval(parton.t1);
                if (document.getElementById('patron1')) {
                    document.getElementById('patron1').remove(); 
                    parton.t1 = 0;
                }
            }
            else if ((parton.x1 < car.width + car.x && parton.x1 > car.x) || (parton.x1 + bot.width / 4 > car.x && parton.x1 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y1 > car.y && parton.y1 < car.y + bot.width) || (parton.y1 + bot.width / 4 > car.y && parton.y1 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t1);
                    document.getElementById('patron1').remove();
                    parton.t1 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t2 !== 0) {
            if ((parton.x2 < 0) || (parton.x2 + bot.width / 5 > map.width) || (parton.y2 < 0) || (parton.y2 + bot.width / 5 > map.height)) {
                clearInterval(parton.t2);
                if (document.getElementById('patron2')) {
                    document.getElementById('patron2').remove();
                    parton.t2 = 0;
                }
            }
            else if ((parton.x2 < car.width + car.x && parton.x2 > car.x) || (parton.x2 + bot.width / 4 > car.x && parton.x2 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y2 > car.y && parton.y2 < car.y + bot.width) || (parton.y2 + bot.width / 4 > car.y && parton.y2 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t2);
                    document.getElementById('patron2').remove(); 
                    parton.t2 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t3 !== 0) {
            if ((parton.x3 < 0) || (parton.x3 + bot.width / 5 > map.width) || (parton.y3 < 0) || (parton.y3 + bot.width / 5 > map.height)) {
                clearInterval(parton.t3);
                if (document.getElementById('patron3')) {
                    document.getElementById('patron3').remove(); 
                    parton.t3 = 0;
                }
            }
            else if ((parton.x3 < car.width + car.x && parton.x3 > car.x) || (parton.x3 + bot.width / 4 > car.x && parton.x3 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y3 > car.y && parton.y3 < car.y + bot.width) || (parton.y3 + bot.width / 4 > car.y && parton.y3 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t3);
                    document.getElementById('patron3').remove(); 
                    parton.t3 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t4 !== 0) {
            if ((parton.x4 < 0) || (parton.x4 + bot.width / 5 > map.width) || (parton.y4 < 0) || (parton.y4 + bot.width / 5 > map.height)) {
                clearInterval(parton.t4);
                if (document.getElementById('patron4')) {
                    document.getElementById('patron4').remove(); 
                    parton.t4 = 0;
                }
            }
            else if ((parton.x4 < car.width + car.x && parton.x4 > car.x) || (parton.x4 + bot.width / 4 > car.x && parton.x4 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y4 > car.y && parton.y4 < car.y + bot.width) || (parton.y4 + bot.width / 4 > car.y && parton.y4 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t4);
                    document.getElementById('patron4').remove(); 
                    parton.t4 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
    }
    else if (parton.count === 8) {
        if (parton.t1 !== 0) {
            if ((parton.x1 < 0) || (parton.x1 + bot.width / 5 > map.width) || (parton.y1 < 0) || (parton.y1 + bot.width / 5 > map.height)) {
                clearInterval(parton.t1);
                document.getElementById('patron1').remove(); 
                parton.t1 = 0;
            }
            else if ((parton.x1 < car.width + car.x && parton.x1 > car.x) || (parton.x1 + bot.width / 4 > car.x && parton.x1 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y1 > car.y && parton.y1 < car.y + bot.width) || (parton.y1 + bot.width / 4 > car.y && parton.y1 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t1);
                    document.getElementById('patron1').remove(); 
                    parton.t1 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t2 !== 0) {
            if ((parton.x2 < 0) || (parton.x2 + bot.width / 5 > map.width) || (parton.y2 < 0) || (parton.y2 + bot.width / 5 > map.height)) {
                clearInterval(parton.t2);
                document.getElementById('patron2').remove(); 
                parton.t2 = 0;
            }
            else if ((parton.x2 < car.width + car.x && parton.x2 > car.x) || (parton.x2 + bot.width / 4 > car.x && parton.x2 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y2 > car.y && parton.y2 < car.y + bot.width) || (parton.y2 + bot.width / 4 > car.y && parton.y2 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t2);
                    document.getElementById('patron2').remove(); 
                    parton.t2 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t3 !== 0) {
            if ((parton.x3 < 0) || (parton.x3 + bot.width / 5 > map.width) || (parton.y3 < 0) || (parton.y3 + bot.width / 5 > map.height)) {
                clearInterval(parton.t3);
                document.getElementById('patron3').remove(); 
                parton.t3 = 0;
            }
            else if ((parton.x3 < car.width + car.x && parton.x3 > car.x) || (parton.x3 + bot.width / 4 > car.x && parton.x3 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y3 > car.y && parton.y3 < car.y + bot.width) || (parton.y3 + bot.width / 4 > car.y && parton.y3 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t3);
                    document.getElementById('patron3').remove(); 
                    parton.t3 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t4 !== 0) {
            if ((parton.x4 < 0) || (parton.x4 + bot.width / 5 > map.width) || (parton.y4 < 0) || (parton.y4 + bot.width / 5 > map.height)) {
                clearInterval(parton.t4);
                document.getElementById('patron4').remove(); 
                parton.t4 = 0;
            }
            else if ((parton.x4 < car.width + car.x && parton.x4 > car.x) || (parton.x4 + bot.width / 4 > car.x && parton.x4 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y4 > car.y && parton.y4 < car.y + bot.width) || (parton.y4 + bot.width / 4 > car.y && parton.y4 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t4);
                    document.getElementById('patron4').remove(); 
                    parton.t4 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t5 !== 0) {
            if ((parton.x5 < 0) || (parton.x5 + bot.width / 5 > map.width) || (parton.y5 < 0) || (parton.y5 + bot.width / 5 > map.height)) {
                clearInterval(parton.t5);
                document.getElementById('patron5').remove(); 
                parton.t5 = 0;
            }
            else if ((parton.x5 < car.width + car.x && parton.x5 > car.x) || (parton.x5 + bot.width / 4 > car.x && parton.x5 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y5 > car.y && parton.y5 < car.y + bot.width) || (parton.y5 + bot.width / 4 > car.y && parton.y5 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t5);
                    document.getElementById('patron5').remove(); 
                    parton.t5 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t6 !== 0) {
            if ((parton.x6 < 0) || (parton.x6 + bot.width / 5 > map.width) || (parton.y6 < 0) || (parton.y6 + bot.width / 5 > map.height)) {
                clearInterval(parton.t6);
                document.getElementById('patron6').remove(); 
                parton.t6 = 0;
            }
            else if ((parton.x6 < car.width + car.x && parton.x6 > car.x) || (parton.x6 + bot.width / 4 > car.x && parton.x6 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y6 > car.y && parton.y6 < car.y + bot.width) || (parton.y6 + bot.width / 4 > car.y && parton.y6 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t6);
                    document.getElementById('patron6').remove(); 
                    parton.t6 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t7 !== 0) {
            if ((parton.x7 < 0) || (parton.x7 + bot.width / 5 > map.width) || (parton.y7 < 0) || (parton.y7 + bot.width / 5 > map.height)) {
                clearInterval(parton.t7);
                document.getElementById('patron7').remove(); 
                parton.t7 = 0;
            }
            else if ((parton.x7 < car.width + car.x && parton.x7 > car.x) || (parton.x7 + bot.width / 4 > car.x && parton.x7 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y7 > car.y && parton.y7 < car.y + bot.width) || (parton.y7 + bot.width / 4 > car.y && parton.y7 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t7);
                    document.getElementById('patron7').remove(); 
                    parton.t7 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
        if (parton.t8 !== 0) {
            if ((parton.x8 < 0) || (parton.x8 + bot.width / 5 > map.width) || (parton.y8 < 0) || (parton.y8 + bot.width / 5 > map.height)) {
                clearInterval(parton.t8);
                document.getElementById('patron8').remove(); 
                parton.t8 = 0;
            }
            else if ((parton.x8 < car.width + car.x && parton.x8 > car.x) || (parton.x8 + bot.width / 4 > car.x && parton.x8 + bot.width / 4 < car.x + bot.width)) {
                if ((parton.y8 > car.y && parton.y8 < car.y + bot.width) || (parton.y8 + bot.width / 4 > car.y && parton.y8 + bot.width / 4 < car.y + bot.width)) {
                    clearInterval(parton.t8);
                    document.getElementById('patron8').remove(); 
                    parton.t8 = 0;
                    clearPatrons();
                    setTimeout(() => {const result = confirm('В вас попали, ещё разок?');}, 150);
                }
            }
        }
    }
}

function clearPatrons() {
    if (key.a === true) {
        key.a = false;
        clearInterval(timer.a);
        timer.a = 0;
    }
    if (key.d === true) {
        key.d = false;
        clearInterval(timer.d);
        timer.d = 0;
    }
    if (key.w === true) {
        key.w = false;
        clearInterval(timer.w);
        timer.w = 0;
    }
    if (key.s === true) {
        key.s = false;
        clearInterval(timer.s);
        timer.s = 0;
    }
    if (key.sp === true) {
        key.sp = false;
    }
    if (key.h === true) {
        key.h = false;
    }
    if (parton.t1 !== 0) {
        clearInterval(parton.t1);
        document.getElementById('patron1').remove(); 
        parton.t1 = 0;
    }
    if (car.tik !== 0) {
        clearInterval(car.tik);
        car.tik = 0;
        document.getElementById('patron').remove();
    }
    if (parton.t2 !== 0) {
        clearInterval(parton.t2);
        document.getElementById('patron2').remove(); 
        parton.t2 = 0;
    }
    if (parton.t3 !== 0) {
        clearInterval(parton.t3);
        document.getElementById('patron3').remove(); 
        parton.t3 = 0;
    }
    if (parton.t4 !== 0) {
        clearInterval(parton.t4);
        document.getElementById('patron4').remove(); 
        parton.t4 = 0;
    }
    if (parton.t5 !== 0) {
        clearInterval(parton.t5);
        document.getElementById('patron5').remove(); 
        parton.t5 = 0;
    }
    if (parton.t6 !== 0) {
        clearInterval(parton.t6);
        document.getElementById('patron6').remove(); 
        parton.t6 = 0;
    }
    if (parton.t7 !== 0) {
        clearInterval(parton.t7);
        document.getElementById('patron7').remove(); 
        parton.t7 = 0;
    }
    if (parton.t8 !== 0) {
        clearInterval(parton.t8);
        document.getElementById('patron8').remove(); 
        parton.t8 = 0;
    }
}
