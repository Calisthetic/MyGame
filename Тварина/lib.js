document.onkeydown = checkButton;

window.onmousedown = function(event){
    is_active = true;
    let x = event.clientX;
    let y = event.clientY;
    if ((y > map.y + map.height + 20 + bar.border + bar.height / 20) && (y < map.y + map.height + 20 + bar.border - bar.height / 20 + bar.height)) {
        if ((x > map.x + map.width / 3 + bar.border) && (x < map.x + map.width / 3 * 2 + bar.border)) {
            document.getElementById('restart_nfon').style.boxShadow = '0 0 10px 1px black inset';
            document.getElementById('restart_nfon').style.backgroundColor = '#dd0000';
            document.getElementById('restart_name').style.fontSize = 28 + 'px';
            document.getElementById('restart_name').style.fontWeight = 700;
            document.getElementById('restart_name').style.color = '#ffdd00';
            document.getElementById('restart').style.top = (bar.height - bar.height / 10 - 32) / 2 + 'px';
            document.getElementById('restart').style.height = 32 + 'px';
            cube.click = 1;
        }
    }
}
window.onmouseup = function(event) {
    is_active = false;
    if (cube.click === 1) {
        document.getElementById('restart_nfon').style.boxShadow = '0 0 3px 0.1px black inset';
        document.getElementById('restart_nfon').style.backgroundColor = 'red';
        document.getElementById('restart_name').style.fontSize = 30 + 'px';
        document.getElementById('restart_name').style.fontWeight = 900;
        document.getElementById('restart_name').style.color = '#ffff00';
        document.getElementById('restart').style.top = (bar.height - bar.height / 10 - 34) / 2 + 'px';
        document.getElementById('restart').style.height = 34 + 'px';
        cube.click = 0;
        if (cube.one === 1) {
            if (cube.endGo === 0) {
                endGame();
                cube.end = 0;
                cube.endGo = 0;
            }
            else {
                cube.end = 0;
                cube.endGo = 0;
            }
        }
        else {
            cube.end = 0;
            cube.one = 1;
            renderCounter();
        }
    }
}

// restart.onclick = function() {
//     if (cube.one === 1) {
//         endGame();
//         cube.end = 0;
//     }
//     else {
//         cube.end = 0;
//         cube.one = 1;
//     }
// }

function checkButton(event) {

    cube.oldX = cube.x;
    cube.oldY = cube.y;

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;

    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;


    if (event.keyCode === 38) {
        // key: "ArrowUp"
        if (map.y < cube.y) {
            if ((cube.y - map.y) < cube.step) {
                cube.y -= cube.y - map.y;
            }

            else {
                cube.y -= cube.step;
            }
        }
    }

    else if (event.keyCode === 40) {
        // key: "ArrowDown"
        if (cubeBottom < mapBottom) {
            if ((mapBottom - cubeBottom) < cube.step) {
                cube.y += mapBottom - cubeBottom;
            }

            else {
                cube.y += cube.step;
            }
        }
    }

    else if (event.keyCode === 37) {
        // key: "ArrowLeft"
        
        if (map.x < cube.x) {
            if ((cube.x - map.x) < cube.step) {
                cube.x -= cube.x - map.x;
            }

            else {
                cube.x -= cube.step;
            }
        }
    }

    else if (event.keyCode === 39) {
        // key: "ArrowRight"
        if (cubeRight < mapRight) {
            if ((mapRight - cubeRight) < cube.step) {
                cube.x += mapRight - cubeRight;
            }

            else {
                cube.x += cube.step;
            }
        }
    }

    renderCube(cube);
    if (cube.end === 0) {
        initShot();
    }
}

function renderCube(cube) {
    if (cube.y < map.y) {cube.y = map.y}
    if (cube.x < map.x) {cube.x = map.x}
    if (cube.y + cube.height > map.y + map.height) {cube.y = map.y + map.height - cube.height}
    if (cube.x + cube.width > map.x + map.width) {cube.x = map.x + map.width - cube.width}
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.transition = 'linear ' + cube.trn + 's';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.background = cube.color;
    document.getElementById(cube.id).style.borderRadius = 5 + 'px';
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
    document.getElementById('map').style.boxShadow = '0 0 10px 7px #cc0000';
    document.getElementById('map').style.borderRadius = 5 + 'px';
}

function renderBar() {
    document.getElementById('board').style.top = map.y + map.height + 20 + 'px';
    document.getElementById('board').style.left = map.x - bar.border + 'px';
    document.getElementById('board').style.height = bar.height + 'px';
    document.getElementById('board').style.width = map.width + 'px';
    document.getElementById('board').style.background = bar.color;
    document.getElementById('board').style.borderRadius = 5 + 'px';
    document.getElementById('board').style.border = bar.border + 'px ridge #aa0000';
    document.getElementById('count').style.height = bar.height + 'px';
    document.getElementById('count').style.width = map.width / 3 + 'px';
    document.getElementById('count').style.background = '#ff0000';
    document.getElementById('count_').style.height = bar.height / 2 * 4 / 5 + 'px';
    document.getElementById('count_').style.width = map.width / 3 * 4 / 5 + 'px';
    document.getElementById('count_').style.top = bar.height / 3 / 5 + 'px';
    document.getElementById('count_').style.left = map.width / 3 / 10 + 'px';
    document.getElementById('count_').style.backgroundColor = 'white';
    document.getElementById('count_').style.borderRadius = 7 + 'px';
    document.getElementById('count_').style.boxShadow = '0 0 5px 0px black inset';
    document.getElementById('count_').style.fontSize = 35 + 'px';
    document.getElementById('count_').style.textAlign = 'center';
    document.getElementById('count_name').style.top = bar.height / 2 + bar.height / 10 + 'px';
    document.getElementById('count_name').style.left = map.width / 3 / 10 + 'px';
    document.getElementById('count_name').style.width = map.width / 3 - map.width / 3 / 5 + 'px';
    document.getElementById('count_name').style.height = bar.height / 2 - bar.height / 5 + 'px';
    document.getElementById('count_name').style.background = '#ee0000';
    document.getElementById('count_name').style.borderRadius = 7 + 'px';
    document.getElementById('count_name').style.boxShadow = '0 0 5px 0px black';
    document.getElementById('count_name').style.fontSize = 28 + 'px';
    document.getElementById('count_name').style.textAlign = 'center';
    document.getElementById('count_name').style.fontWeight = 700;
    document.getElementById('record').style.height = bar.height + 'px';
    document.getElementById('record').style.width = map.width / 3 + 'px';
    document.getElementById('record').style.background = '#ff0000';
    document.getElementById('record').style.left = map.width / 3 * 2 + 'px';
    document.getElementById('record_').style.height = bar.height / 2 * 4 / 5 + 'px';
    document.getElementById('record_').style.width = map.width / 3 * 4 / 5 + 'px';
    document.getElementById('record_').style.top = bar.height / 3 / 5 + 'px';
    document.getElementById('record_').style.left = map.width / 3 / 10 + 'px';
    document.getElementById('record_').style.backgroundColor = 'white';
    document.getElementById('record_').style.borderRadius = 7 + 'px';
    document.getElementById('record_').style.boxShadow = '0 0 5px 0px black inset';
    document.getElementById('record_').style.fontSize = 35 + 'px';
    document.getElementById('record_').style.textAlign = 'center';
    document.getElementById('record_name').style.top = bar.height / 2 + bar.height / 10 + 'px';
    document.getElementById('record_name').style.left = map.width / 3 / 10 + 'px';
    document.getElementById('record_name').style.width = map.width / 3 - map.width / 3 / 5 + 'px';
    document.getElementById('record_name').style.height = bar.height / 2 - bar.height / 5 + 'px';
    document.getElementById('record_name').style.background = '#ee0000';
    document.getElementById('record_name').style.borderRadius = 7 + 'px';
    document.getElementById('record_name').style.boxShadow = '0 0 5px 0px black';
    document.getElementById('record_name').style.fontSize = 28 + 'px';
    document.getElementById('record_name').style.textAlign = 'center';
    document.getElementById('record_name').style.fontWeight = 700;
    document.getElementById('restart_fon').style.height = bar.height + 'px';
    document.getElementById('restart_fon').style.width = map.width / 3 + 'px';
    document.getElementById('restart_fon').style.backgroundColor = 'red';
    document.getElementById('restart_fon').style.left = map.width / 3 + 'px';
    document.getElementById('restart_nfon').style.height = bar.height - bar.height / 10 + 'px';
    document.getElementById('restart_nfon').style.width = map.width / 3 + 'px';
    document.getElementById('restart_nfon').style.top = bar.height / 20 + 'px';
    document.getElementById('restart_nfon').style.color = 'red';
    document.getElementById('restart_nfon').style.transition = 'linear ' + bar.trnstn + 's';
    document.getElementById('restart_nfon').style.borderRadius = 10 + 'px';
    document.getElementById('restart_name').style.fontSize = 30 + 'px';
    document.getElementById('restart_name').style.fontWeight = 900;
    document.getElementById('restart_name').style.textAlign = 'center';
    document.getElementById('restart_name').style.verticalAlign = 'center';
    document.getElementById('restart_name').style.color = 'yellow';
    document.getElementById('restart_name').style.transition = 'linear ' + bar.trnstn + 's';
    document.getElementById(restart.id).style.height = 34 + 'px'
    document.getElementById(restart.id).style.width = map.width / 3 * 4 / 5 + 'px';
    document.getElementById(restart.id).style.top = (bar.height - bar.height / 10 - 34) / 2 + 'px';
    document.getElementById(restart.id).style.left = map.width / 3 / 10 + 'px';
    document.getElementById(restart.id).style.color = 'red';
    document.getElementById(restart.id).style.borderRadius = 7 + 'px';
    document.getElementById(restart.id).style.transition = 'linear ' + bar.trnstn + 's';

}

function spawnCube(map, cube) {

    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;

    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cube.height;

    cube.x = Math.round(
        mapMinX +
        Math.random() * (mapMaxX - mapMinX)
        );

    cube.y = Math.round(
        mapMinY +
        Math.random() * (mapMaxY - mapMinY)
        );
    return cube;
}

function renderBuffs(buffs) {
    buffs.map(buff => {
        if (!document.getElementById('buff_' + buff.id)) {
            let div = document.createElement('div');
            div.id = 'buff_' + buff.id;
            div.className = 'buff';
            document.body.append(div);
        }

        renderBuff(buff);
    });
}

function smallerCube() {
    if (cube.height > cube.min) {
        if (cube.height < cube.max) {
            cube.height -= cube.smaller;
            cube.width -= cube.smaller;
            cube.y += cube.smaller / 2;
            cube.x += cube.smaller / 2;
            document.getElementById(cube.id).style.height = cube.height + 'px';
            document.getElementById(cube.id).style.width = cube.width + 'px';
            document.getElementById(cube.id).style.top = cube.y + 'px';
            document.getElementById(cube.id).style.left = cube.x + 'px';
        }
    }
    else {
        cube.buffCount -= 1;
        endGame();
        cube.end = 1;
    }
}

function endGame() {
    shotBuff(buff);
    cube.endGo = 1;
    cube.end = 1;
    if (cube.buffCount > cube.buffRecord) {cube.buffRecord = cube.buffCount;}
    cube.buffCount = 0;
    cube.smaller = 0;
    cube.x += (cube.width - 56) / 2;
    cube.y += (cube.height - 56) / 2;
    cube.width = 56;
    cube.height = 56;
    renderCube(cube);
    renderCounter();
}

function renderBuff(buff) {
    document.getElementById('buff_' + buff.id).style.top = buff.y + 'px';
    document.getElementById('buff_' + buff.id).style.left = buff.x + 'px';
    document.getElementById('buff_' + buff.id).style.transition = 'linear ' + buff.trn + 's';
    document.getElementById('buff_' + buff.id).style.width = buff.width + 'px';
    document.getElementById('buff_' + buff.id).style.height = buff.height + 'px';
    document.getElementById('buff_' + buff.id).style.background = buff.color;
    document.getElementById('buff_' + buff.id).style.borderRadius = buff.height / 2 + 'px';
}

function timeTike() {
    if (cube.end === 0) {
        buffsLogic();
    }
}

function buffsLogic() {
    if (buffs.length === 0) {
        buffs.push(spawnCube(map, buff));
    }
    renderBuffs(buffs);
    initShot();
}

function initShot() {
    buffs.forEach((buff,index) => {
        let buffBottom = buff.y + buff.height;
        let buffRight = buff.x + buff.width;
        let cubeBottom = cube.y + cube.height;
        let cubeRight = cube.x + cube.width;
        if ((cube.oldY < buff.y && cubeBottom > buff.y) || (cube.oldY > buff.y && cube.y < buffBottom)
        || (cubeBottom > buff.y && cubeBottom < buffBottom) || (cube.y < buffBottom && cube.y > buff.y)) {
            if ((cube.oldX < buff.x && cubeRight > buff.x) || (cube.oldX > buff.x && cube.x < buffRight)
            || (cubeRight > buff.x && cubeRight < buffRight) || (cube.x < buffRight && cube.x > buff.x)) {
                shotBuff();
                buffs.splice(index, 1);
            }
        }
    });
}

function shotBuff() {
    cube.smaller = cube.smaller + 0.1;
    cube.height += cube.buffPrize;
    cube.width += cube.buffPrize;
    cube.y -= cube.buffPrize / 2;
    cube.x -= cube.buffPrize / 2;
    if (buffs.length === 1) {
        cube.buffCount += 1;
        document.getElementById('buff_' + buff.id).remove();
    }
    renderCube(cube);
    renderCounter();
}

function renderCounter() {
    let Ccount = document.getElementById("count_");
    Ccount.innerHTML = cube.buffCount;
    let Crecord = document.getElementById("record_");
    Crecord.innerHTML = cube.buffRecord;
}