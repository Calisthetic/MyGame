document.onkeydown = checkButton;

//some settings
function renderMargin() {
    map.marginX = map.marginX + map.x + map.borderWidth;
    map.marginY = map.marginY + map.y + map.borderWidth;
    cube.x = map.x + (map.width / 2) - (cube.width / 2);
    cube.y = map.y + (map.height / 2) - (cube.height / 2);
    cube.sizeStep = cube.sStep / 2;
}

//keyboard
function checkButton(event) {
    //action
    if (event.keyCode === 37) {
        console.log("ArrowLeft");
        if (cube.x - cube.step < map.marginX) {
            cube.x = map.marginX;
        }
        else {cube.x -= cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 39) {
        console.log("ArrowRight");
        if (cube.x + cube.step + cube.width > map.width + map.marginX) {
            cube.x = map.marginX + map.width - cube.width;
        }
        else {cube.x += cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 38) {
        console.log("ArrowUp");
        if (cube.y - cube.step < map.marginY) {
            cube.y = map.marginY;
        }
        else {cube.y -=cube.step;}
        renderCube(cube);
    }
    if (event.keyCode === 40) {
        console.log("ArrowDown");
        if (cube.y + cube.height + cube.step > map.height + map.marginY) {
            cube.y = map.height + map.marginY - cube.height;
        }
        else {cube.y += cube.step;}
        renderCube(cube);
    }
    //size
    if (event.keyCode === 65) {
        console.log("A");
        if (cube.width - cube.sStep > cube.widthMin) {
            cube.x +=cube.sizeStep;
            cube.width -=cube.sStep;
        }
        else {
            cube.x =cube.x + ((cube.width - cube.widthMin) / 2);
            cube.width = cube.widthMin;
        }
        renderCube(cube);
        cube.borderMax = cube.width / 2;
    }
    if (event.keyCode === 68) {
        console.log("D");
        if (cube.width + cube.sStep <= cube.widthMax) {
            //right
            if (cube.x + cube.sizeStep + cube.width > map.width + map.marginX) {
                cube.x = map.width + map.marginX - cube.sStep - cube.width;
                cube.width +=cube.sStep;
            }
            //left
            else if (cube.x - cube.sizeStep < 0 + map.marginX) {
                cube.width +=cube.sStep;
                cube.x = map.marginX;
            }
            else {
                cube.width +=cube.sStep;
                cube.x -=cube.sizeStep;
            }
        }
        //max
        else {
            cube.x = cube.x - ((cube.widthMax - cube.width) / 2);
            cube.width = cube.widthMax;
            //left
            if (cube.x < map.marginX) {
                cube.x = map.marginX;
            }
            //right
            else if (cube.x + cube.width > map.width + map.marginX) {
                cube.x = map.marginX + map.width - cube.width;
            }
        }
        renderCube(cube);
        cube.borderMax = cube.width / 2;
    }
    if (event.keyCode === 87) {
        console.log("W");
        if (cube.height + cube.sizeStep <= cube.heightMax) {
            //up
            if (cube.y - cube.sizeStep < map.marginY) {
                cube.y = map.marginY;
                 cube.height +=cube.sStep;
            }
            //down
            else if (cube.y + cube.sizeStep + cube.height > map.height + map.marginY) {
                cube.height += cube.sStep;
                cube.y = map.marginY + map.height - cube.height;
            }
            else {
                cube.height +=cube.sStep;
                cube.y -= cube.sizeStep;
            }
        }
        //max
        else {
            cube.y = cube.y - ((cube.heightMax - cube.height) / 2);
            cube.height = cube.heightMax;
            //up
            if (cube.y < map.marginY) {
                cube.y = map.marginY;
            }
            else if (cube.y + cube.height > map.height + map.marginY) {
                cube.y = map.marginY + map.height - cube.height;
            }
        }
        renderCube(cube);
        cube.borderMax = cube.height / 2;
    }
    if (event.keyCode === 83) {
        console.log("S");
        if (cube.height - cube.sStep > cube.heightMin) {
            cube.y +=cube.sizeStep;
            cube.height -=cube.sStep;
        }
        else {
            cube.y = cube.y + ((cube.height - cube.heightMin) /2);
            cube.height = cube.heightMin;
        }
        renderCube(cube);
        cube.borderMax = cube.height / 2;
    }
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

function renderCube(cube) {
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
    document.getElementById('map').style.border = map.borderWidth + 'px solid ' + map.borderColor;
    document.getElementById('map').style.backgroundColor = map.color;
}