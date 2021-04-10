document.onkeydown = checkButton;

function checkButton(event) {

    let cubeRight = cube.x + cube.width;
    let cubeBottom = cube.y + cube.height;
    let mapRight = map.x + map.width;
    let mapBottom = map.y + map.height;

    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (map.x < cube.x) {
            if ((cube.x - map.x) < cube.step) {
                cube.x -= cube.x - map.x;
            }
            else {
                cube.x -= cube.step;
            }
        }
    }

    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (map.y < cube.y) {
            if ((cube.y - map.y) < cube.step) {
                cube.y -= cube.y - map.y;
            }
            else {
                cube.y -= cube.step;
            }
        }
    }

    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cubeRight < mapRight) {
            if ((mapRight - cubeRight) < cube.step) {
                cube.x += mapBottom - cubeBottom;
            }
            else {
                cube.x += cube.step;
            }
        }
    }

    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cubeBottom < mapBottom) {
            if ((mapBottom - cubeBottom) < cube.step) {
                cube.y += mapBottom - cubeBottom;
            }
            else {
                cube.y += cube.step;
            }
        }
    }

    renderCube(cube);
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}

function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.backgroundColor = map.color;
    // document.getElementById('map').style.border = '2px solid ' + map.border;
}

function spawnCube(map, cube) {
    let mapMinX = map.x;
    let mapMaxX = map.x + map.width - cube.width;
    let mapMinY = map.y;
    let mapMaxY = map.y + map.height - cube.height;
    //how it work
    let rand = Math.floor(Math.random() * (mapMaxX - mapMinX));
    console.log(rand);

    cube.x = mapMinX + Math.random() * (mapMaxX - mapMinX);
    cube.y = mapMinY + Math.random() * (mapMaxY - mapMinY);

    return cube;
}