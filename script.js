document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    width: 60,
    height: 60,
    trnstn: .25,
    step: 50,
    sizeStep: 25,
    borderStep: 10,
    color: 'white',
    borderRadius: 0,
    k: 0,
}

let img = {
    opacity: 0,
    k: 0,
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
    else if (event.keyCode === 65) {
        console.log("A");
        cube.x +=cube.sizeStep;
        cube.width -=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 68) {
        console.log("D");
        cube.x -=cube.sizeStep;
        cube.width +=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 87) {
        console.log("W");
        cube.y -=cube.sizeStep;
        cube.height +=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 83) {
        console.log("S");
        cube.y +=cube.sizeStep;
        cube.height -=cube.step;
        renderCube(cube);
    }
    else if (event.keyCode === 88) {
        console.log("X");
        cube.borderRadius +=cube.borderStep;
        renderCube(cube);
    }
    else if (event.keyCode === 90) {
        console.log("Z");
        cube.borderRadius -= cube.borderStep;
        renderCube(cube);
    }
    else if (event.keyCode === 49) {
        console.log("white");
        cube.color = 'white';
        renderCube(cube);
    }
    else if (event.keyCode === 50) {
        console.log("gray");
        cube.color = 'gray';
        renderCube(cube);
    }
    else if (event.keyCode === 51) {
        console.log("red");
        cube.color = 'red';
        renderCube(cube);
    }
    else if (event.keyCode === 52) {
        console.log("orange");
        cube.color = 'orange';
        renderCube(cube);
    }
    else if (event.keyCode === 53) {
        console.log("yellow");
        cube.color = 'yellow';
        renderCube(cube);
    }
    else if (event.keyCode === 54) {
        console.log("lime");
        cube.color = 'lime';
        renderCube(cube);
    }
    else if (event.keyCode === 55) {
        console.log("aqua");
        cube.color = 'aqua';
        renderCube(cube);
    }
    else if (event.keyCode === 56) {
        console.log("blue");
        cube.color = 'blue';
        renderCube(cube);
    }
    else if (event.keyCode === 57) {
        console.log("blueviolet");
        cube.color = 'blueviolet';
        renderCube(cube);
    }
    else if (event.keyCode === 48) {
        console.log("black");
        cube.color = 'black';
        renderCube(cube);
    }
    else if (event.keyCode === 70) {
        if (cube.k === 1) {
            document.getElementById("cube").style.boxShadow = '0 0 0px 0px';
            cube.k = 0;
        }
        else if (cube.k === 0) {
            document.getElementById("cube").style.boxShadow = '0 0 10px 10px ' + cube.color;
            cube.k = 1;
        }
    }
    else if (event.keyCode === 67) {
        if (img.k === 1) {
            console.log("C_field");
            document.getElementById("img").style.opacity = '0';
            img.k = 0;
        }
        else if (img.k === 0) {
            console.log("C_field");
            document.getElementById("img").style.opacity = '1';
            img.k = 1;
        }
    }
}




function renderCube(x, y) {
    document.getElementById("cube").style.top = cube.y + 'px';
    document.getElementById("cube").style.left = cube.x + 'px';
    document.getElementById("cube").style.width = cube.width + 'px';
    document.getElementById("cube").style.height = cube.height + 'px';
    document.getElementById("cube").style.transition = 'ease' + cube.trnstn;
    document.getElementById("cube").style.backgroundColor = cube.color;
    document.getElementById("cube").style.borderRadius = cube.borderRadius + 'px';
}

renderCube(cube.x, cube.y);