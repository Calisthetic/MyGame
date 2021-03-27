document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 50,
    color: 'black',
}

function checkButton(event) {

    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        cube.x -=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 39) {
        console.log("ArrowRight");
        cube.x +=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 38) {
        console.log("ArrowUp");
        cube.y -=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 40) {
        console.log("ArrowDown");
        cube.y +=cube.step;
        renderCube(cube);
    }
}

function renderCube(x, y) {
    document.getElementById("cube").style.top = cube.y + 'px';
    document.getElementById("cube").style.left = cube.x + 'px';
    document.getElementById("cube").style.width = cube.width + 'px';
    document.getElementById("cube").style.height = cube.height + 'px';
    document.getElementById("cube").style.transition = 'ease' + cube.trnstn;
    document.getElementById("cube").style.backgroundColor = cube.color;
}

renderCube(cube.x, cube.y);