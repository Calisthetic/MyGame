document.onkeydown = checkButton;

function checkButton(event) {

    //action
    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (cube.x > 0) {
            cube.x -=cube.step;
        }
        renderCube(cube);
    }
    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cube.x < map.width - cube.width) {
            cube.x +=cube.step;
        }
        renderCube(cube);
    }
    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (cube.y > 0) {
            cube.y -=cube.step;
        }
        renderCube(cube);
    }
    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cube.y < map.width - cube.height) {
            cube.y +=cube.step;
        }
        renderCube(cube);
    }
    //size
    if (event.keyCode === 65) {
        console.log("A");
        cube.x +=cube.sizeStep;
        cube.width -=cube.sStep;
    }
    if (event.keyCode === 68) {
        console.log("D");
        cube.x -=cube.sizeStep;
        cube.width +=cube.sStep;
    }
    if (event.keyCode === 87) {
        console.log("W");
        cube.y -=cube.sizeStep;
        cube.height +=cube.sStep;
    }
    if (event.keyCode === 83) {
        console.log("S");
        cube.y +=cube.sizeStep;
        cube.height -=cube.sStep;
    }
    //border-radius
    if (event.keyCode === 88) {
        console.log("X");
        cube.borderRadius +=cube.borderStep;
    }
    if (event.keyCode === 90) {
        console.log("Z");
        cube.borderRadius -= cube.borderStep;
    }
    //colors
    if (event.keyCode === 49) {
        console.log("white");
        cube.color = 'white';
    }
    if (event.keyCode === 50) {
        console.log("gray");
        cube.color = 'gray';
    }
    if (event.keyCode === 51) {
        console.log("red");
        cube.color = 'red';
    }
    if (event.keyCode === 52) {
        console.log("orange");
        cube.color = 'orange';
    }
    if (event.keyCode === 53) {
        console.log("yellow");
        cube.color = 'yellow';
    }
    if (event.keyCode === 54) {
        console.log("lime");
        cube.color = 'lime';
    }
    if (event.keyCode === 55) {
        console.log("aqua");
        cube.color = 'aqua';
    }
    if (event.keyCode === 56) {
        console.log("blue");
        cube.color = 'blue';
    }
    if (event.keyCode === 57) {
        console.log("blueviolet");
        cube.color = 'blueviolet';
    }
    if (event.keyCode === 48) {
        console.log("black");
        cube.color = 'black';
    }
    //shadow
    if (event.keyCode === 70) {
        if (cube.k === 1) {
            document.getElementById("cube").style.boxShadow = '0 0 0px 0px';
            cube.k = 0;
        }
        else if (cube.k === 0) {
            document.getElementById("cube").style.boxShadow = '0 0 10px 10px ' + cube.color;
            cube.k = 1;
        }
    }
    renderCube(cube);
}

function renderCube(x, y) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease' + cube.trnstn;
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.borderRadius = cube.borderRadius + 'px';

}
function renderMap(map) {
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.border = '5px solid ' + map.border;
    document.getElementById('map').style.backgroundColor = map.color;
}