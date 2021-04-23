document.onkeydown = checkButton;

window.onmousedown = function(event){
    is_active = true;
    x = event.clientX;
    y = event.clientY;
    var primer = document.getElementById('map');
    primer.insertAdjacentHTML('beforeend', '<div style="height: 20px; width: 20px; background-color: black; position: absolute; top: ' + (y - 10) + 'px; left: ' + (x - 10) + 'px; border-radius: 10px"></div>');
}
window.onmouseup = function(event) {
    is_active = false;
}

//cubeIn click
cube.onclick = function() {
    setTimeout(alert("Click"), 1000);
}
function spawnImg() {
    if (img.k === 0) {
        var imgg = document.getElementById('bot_1');
        imgg.insertAdjacentHTML('beforeend', 
        '<img src="./images/gosha1.jpg" id="img" class="img" style="height: ' + bot.height + 'px; width: ' + bot.width + 'px; border-radius: ' + bot.height / 2 + 'px;">'
        );
        img.k = 1;
        renderBot(bot);
    }
    else {
        document.getElementById('img').style.opacity = 1;
        renderBot(bot);
    }
}

//keyboard
function checkButton(event) {
    //action
    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (cube.x - cube.step < map.x) {
            cube.x = map.x;
        }
        else {cube.x -= cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cube.x + (cube.borderWidth * 2) + cube.step + cube.width > map.width + map.x) {
            cube.x = map.x + map.width - cube.width - (cube.borderWidth * 2);
        }
        else {cube.x += cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (cube.y - cube.step < map.y) {
            cube.y = map.y;
        }
        else {cube.y -=cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cube.y + cube.height + (cube.borderWidth * 2) + cube.step > map.height + map.y) {
            cube.y = map.height + map.y - cube.height - (cube.borderWidth * 2);
        }
        else {cube.y += cube.step;}
        renderCube(cube);
    }
    // //size
    // if (event.keyCode === 65) {
    //     console.log("A");
    //     if (cube.width - cube.sStep > cube.widthMin) {
    //         cube.x +=cube.sizeStep;
    //         cube.width -=cube.sStep;
    //     }
    //     else {
    //         cube.x =cube.x + ((cube.width - cube.widthMin) / 2);
    //         cube.width = cube.widthMin;
    //     }
    //     renderCube(cube);
    //     cube.borderMax = cube.width / 2;
    // }
    // if (event.keyCode === 68) {
    //     console.log("D");
    //     if (cube.width + cube.sStep <= cube.widthMax) {
    //         //right
    //         if (cube.x + cube.sizeStep + cube.width > map.width + map.x) {
    //             cube.x = map.width + map.x - cube.sStep - cube.width;
    //             cube.width +=cube.sStep;
    //         }
    //         //left
    //         else if (cube.x - cube.sizeStep < 0 + map.x) {
    //             cube.width +=cube.sStep;
    //             cube.x = map.x;
    //         }
    //         else {
    //             cube.width +=cube.sStep;
    //             cube.x -=cube.sizeStep;
    //         }
    //     }
    //     //max
    //     else {
    //         cube.x = cube.x - ((cube.widthMax - cube.width) / 2);
    //         cube.width = cube.widthMax;
    //         //left
    //         if (cube.x < map.x) {
    //             cube.x = map.x;
    //         }
    //         //right
    //         else if (cube.x + cube.width > map.width + map.x) {
    //             cube.x = map.x + map.width - cube.width;
    //         }
    //     }
    //     renderCube(cube);
    //     cube.borderMax = cube.width / 2;
    // }
    // if (event.keyCode === 87) {
    //     console.log("W");
    //     if (cube.height + cube.sStep <= cube.heightMax) {
    //         //up
    //         if (cube.y - cube.sizeStep < map.y) {
    //             cube.y = map.y;
    //              cube.height +=cube.sStep;
    //         }
    //         //down
    //         else if (cube.y + cube.sizeStep + cube.height > map.height + map.y) {
    //             cube.height += cube.sStep;
    //             cube.y = map.y + map.height - cube.height;
    //         }
    //         else {
    //             cube.height +=cube.sStep;
    //             cube.y -= cube.sizeStep;
    //         }
    //     }
    //     //max
    //     else {
    //         cube.y = cube.y - ((cube.heightMax - cube.height) / 2);
    //         cube.height = cube.heightMax;
    //         //up
    //         if (cube.y < map.y) {
    //             cube.y = map.y;
    //         }
    //         else if (cube.y + cube.height > map.height + map.y) {
    //             cube.y = map.y + map.height - cube.height;
    //         }
    //     }
    //     renderCube(cube);
    //     cube.borderMax = cube.height / 2;
    // }
    // if (event.keyCode === 83) {
    //     console.log("S");
    //     if (cube.height - cube.sStep > cube.heightMin) {
    //         cube.y +=cube.sizeStep;
    //         cube.height -=cube.sStep;
    //     }
    //     else {
    //         cube.y = cube.y + ((cube.height - cube.heightMin) /2);
    //         cube.height = cube.heightMin;
    //     }
    //     renderCube(cube);
    //     cube.borderMax = cube.height / 2;
    // }
    //border-radius
    if (event.keyCode === 88) {
        console.log("X");
        if (cube.borderRadius + cube.borderStep > cube.borderMax) {
            cube.borderRadius = cube.borderMax;
        }
        else {
            cube.borderRadius +=cube.borderStep;
        }
    }
    if (event.keyCode === 90) {
        console.log("Z");
        if (cube.borderRadius - cube.borderStep < cube.borderMin) {
            cube.borderRadius = cube.borderMin;
        }
        else {
            cube.borderRadius -= cube.borderStep;
        }
    }
    //colors
    if (event.keyCode === 49) {
        console.log("white");
        cube.color = 'white';
        cube.shadowColor = 'white';
        cube.c = 'white';
    }
    if (event.keyCode === 50) {
        console.log("mapColor");
        cube.color = map.color;
        cube.shadowColor = map.color;
        cube.c = map.color;
    }
    if (event.keyCode === 51) {
        console.log("red");
        cube.color = 'red';
        cube.shadowColor = 'red';
        cube.c = 'red';
    }
    if (event.keyCode === 52) {
        console.log("orange");
        cube.color = 'orange';
        cube.shadowColor = 'orange';
        cube.c = 'orange';
    }
    if (event.keyCode === 53) {
        console.log("yellow");
        cube.color = 'yellow';
        cube.shadowColor = 'yellow';
        cube.c = 'yellow';
    }
    if (event.keyCode === 54) {
        console.log("lime");
        cube.color = 'lime';
        cube.shadowColor = 'lime';
        cube.c = 'lime';
    }
    if (event.keyCode === 55) {
        console.log("aqua");
        cube.color = 'aqua';
        cube.shadowColor = 'aqua';
        cube.c = 'aqua';
    }
    if (event.keyCode === 56) {
        console.log("blue");
        cube.color = 'blue';
        cube.shadowColor = 'blue';
        cube.c = 'blue';
    }
    if (event.keyCode === 57) {
        console.log("blueviolet");
        cube.color = 'blueviolet';
        cube.shadowColor = 'blueviolet';
        cube.c = 'blueviolet';
    }
    if (event.keyCode === 48) {
        console.log("black");
        cube.color = 'black';
        cube.shadowColor = 'black';
        cube.c = 'black';
    }
    //test
    // if (event.keyCode === 67) {
    //     console.log("test");
    //     var t = Math.floor(Math)
    //     var testo = document.getElementById('map');
    //     testo.insertAdjacentHTML('beforeend', '<div style="height: 20px; width: 20px; background-color: maroon; position: absolute; top: ' + (ty - 10) + 'px; left: ' + (tx - 10) + 'px; border-radius: 10px"></div>');
    // }
    //password: 2468 for cool skin
    if (event.keyCode === 98) {
        if (cube.password === 10) {
            cube.password = 1;
        }
    }
    if (event.keyCode === 100) {
        if (cube.password === 1) {
            cube.password = 2;
        }
        else {cube.password = 10}
    }
    if (event.keyCode === 102) {
        if (cube.password === 2) {
            cube.password = 3;
        }
        else {cube.password = 10}
    }
    if (event.keyCode === 104) {
        if (cube.password === 3) {
            cube.password = 4;
            cube.c = cube.color;
            cube.b = cube.borderRadius;
            cube.shadowWidth = cube.height / 5;
            cube.shadowMargin = cube.height / 10;
            cube.shadowMinus = - cube.height / 10 * 1.2;
            cube.shadowColor = 'black';
            cube.color = 'radial-gradient(circle at 15% 15%, #ff3300, #330000)';
            map.m = map.color;
            map.color = 'repeating-linear-gradient(45deg, lime, lime 10px, LawnGreen 10px, LawnGreen 20px)';
            // (45deg, #87CEFA, #87CEFA 10px, #00bfff 10px, #00bfff 20px)
            cube.borderRadius = cube.height / 2;
            document.getElementById('bot_1').style.borderRadius = bot.height / 2 + 'px';
            spawnImg();
            renderMap(map);
            renderCube(cube);
        }
    }
    if (event.keyCode === 101) {
        if (cube.password < 5) {
            cube.password = 10;
            cube.shadowWidth = 0;
            cube.shadowMargin = 0;
            cube.shadowMinus = 0;
            cube.color = cube.c;
            cube.shadowColor = cube.c;
            cube.borderRadius = cube.b;
            map.color = map.m;
            document.getElementById('img').style.opacity = 0;
            document.getElementById('bot_1').style.borderRadius = 0 + 'px';
            renderCube(cube);
            renderMap(map);
        }
        else {cube.password = 10}
    }
    //shadow
    if (event.keyCode === 70) {
        console.log("F");
        if (cube.k === 0) {
            cube.shadowWidth = cube.height / 10;
            cube.k = 1;
            cube.shadowMargin = 0;
            cube.shadowMinus = cube.height / 10;
            cube.shadowColor = cube.color;
        }
        else if (cube.k === 1) {
            cube.shadowWidth = 0;
            cube.shadowMinus = 0;
            cube.k = 0;
            cube.shadowMargin = 0;
        }
    }
    renderCube(cube);
}
//some settings
function renderMargin() {
    cube.sizeStep = cube.sStep / 2;
    cube.borderMax = cube.height / 2;
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.background = cube.color;
    document.getElementById(cube.id).style.borderRadius = cube.borderRadius + 'px';
    document.getElementById(cube.id).style.transform = 'rotate(' + cube.rotate + 'deg)';
    document.getElementById(cube.id).style.border = cube.borderWidth + 'px solid ' + cube.borderColor;
    document.getElementById(cube.id).style.boxShadow = cube.shadowMargin + 'px ' + cube.shadowMargin + 'px ' + cube.shadowWidth + 'px ' + cube.shadowMinus + 'px ' + cube.shadowColor;
}
function renderMap(map) {
    document.getElementById(map.id).style.top = map.y + 'px';
    document.getElementById(map.id).style.left = map.x + 'px';
    document.getElementById(map.id).style.width = map.width + 'px';
    document.getElementById(map.id).style.height = map.height + 'px';
    document.getElementById(map.id).style.background = map.color;
}
function spawnCube(map, cube) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;
    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cube.height;
    cube.x = mapMinX + Math.floor(Math.random() * (mapMaxX - mapMinX));
    cube.y = mapMinY + Math.floor(Math.random() * (mapMaxY - mapMinY));

    return cube;
}

function renderBots(bots) {
    bots.map(bot => {
        let div = document.createElement('div');
        div.id = 'bot_' + bot.id;
        div.className = 'bot';
        document.body.append(div);
        renderBot(bot);
    });
}
function renderBot(bot) {
    document.getElementById('bot_' + bot.id).style.top = bot.y + 'px';
    document.getElementById('bot_' + bot.id).style.left = bot.x + 'px';
    document.getElementById('bot_' + bot.id).style.width = bot.width + 'px';
    document.getElementById('bot_' + bot.id).style.height = bot.height + 'px';
    document.getElementById('bot_' + bot.id).style.transition = 'ease ' + bot.trnstn + 's';
    document.getElementById('bot_' + bot.id).style.backgroundColor = bot.color;
}

function renderBuffs(buffs) {
    buffs.map(buff => {
        let div = document.createElement('div');
        div.id = 'buff_' + buff.id;
        div.className = 'buff';
        document.body.append(div);
        renderBuff(buff);
    });
}
function renderBuff(buff) {
    document.getElementById('buff_' + buff.id).style.top = buff.y + 'px';
    document.getElementById('buff_' + buff.id).style.left = buff.x + 'px';
    document.getElementById('buff_' + buff.id).style.width = buff.width + 'px';
    document.getElementById('buff_' + buff.id).style.height = buff.height + 'px';
    document.getElementById('buff_' + buff.id).style.transition = 'ease ' + buff.trnstn + 's';
    document.getElementById('buff_' + buff.id).style.backgroundColor = buff.color;
    document.getElementById('buff_' + buff.id).style.opacity = 0;

}

function timeTik() {
    //console.log(new Date().getSeconds());
    stepBot();
}
function stepBot() {
    let sr = Math.floor(Math.random() * 4)
    if (sr === 1) {//up
        if (bot.y === map.y) {bot.y += bot.step}
        else {
            if (bot.y - bot.step >= map.y) {
                bot.y -= bot.step;
            }
            else {bot.y = map.y}
        }
    }
    else if (sr === 2) {//down
        if (bot.y === map.height - bot.height) {bot.y -= bot.step}
        else {
            if (bot.y + bot.step + bot.height <= map.height) {
                bot.y += bot.step;
            }
            else {bot.y = map.height - bot.height}
        }
    }
    else if (sr === 3) {//left
        if (bot.x === map.x) {bot.x += bot.step}
        else {
            if (bot.x - bot.step >= map.x) {
                bot.x -= bot.step;
            }
            else {bot.x = map.x}
        }
    }
    else {//right
        if (bot.x === map.width - bot.width) {bot.x -= bot.step}
        else {
            if (bot.x + bot.step + bot.width <= map.width) {
                bot.x += bot.step;
            }
            else {bot.x = map.width - bot.width}
        }
    }
    renderBot(bot);
    return bot;
}