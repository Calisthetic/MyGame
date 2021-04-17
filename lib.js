document.onkeydown = checkButton;

//cubeIn click
cube.onclick = function() {
    if (cubeIn.k1 === 1) {
        cubeIn.k1 = 0;
        //visible changes
        cubeIn.x += cube.width - cubeIn.width - 10;
        cube.color = 'lime';
        renderCubeIn(cubeIn);
        renderCube(cube);
        setTimeout(cubeInDel, 1000);
    }
}
function cubeInDel() {
    //latest changes + for V
    cube.width = cube.width / 3;
    cube.height += 8;
    cube.x += cube.width;
    cube.borderRadius = 0;
    cube.color = cube.c;
    cube.borderWidth = 0;
    cubeIn.opacity = 0;
    cubeIn.height = 0;
    cubeIn.width = 0;
    cubeIn.x = cube.width / 2;
    cubeIn.y = cube.height / 2;
    document.getElementById(cube.id).style.cursor = 'default';
    renderCubeIn(cubeIn);
    renderCube(cube);
}
function spawnCubeDop() {
    randomCubeDop();
    cubeDop.k +=1;
    var ht = document.getElementById('map');
    ht.insertAdjacentHTML('beforeend', 
    '<div id="cubeDop' + cubeDop.k + '" style="top: ' + cubeDop.ky + 'px;left: ' + cubeDop.kx + 'px; height: ' + cubeDop.height + 'px; width: ' + cubeDop.width + 'px; background: ' + cubeDop.color + '; border-radius: ' + cubeDop.borderRadius + 'px; position: absolute;"></div>'
    );
}
//keyboard
function checkButton(event) {
    if (event.keyCode === 67) {
        console.log("C");
        spawnCubeDop();
    }
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
        if (cube.x + (cube.borderWidth * 2) + cube.step + cube.width > map.width + map.marginX) {
            cube.x = map.marginX + map.width - cube.width - (cube.borderWidth * 2);
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
        if (cube.y + cube.height + (cube.borderWidth * 2) + cube.step > map.height + map.marginY) {
            cube.y = map.height + map.marginY - cube.height - (cube.borderWidth * 2);
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
    //         if (cube.x + cube.sizeStep + cube.width > map.width + map.marginX) {
    //             cube.x = map.width + map.marginX - cube.sStep - cube.width;
    //             cube.width +=cube.sStep;
    //         }
    //         //left
    //         else if (cube.x - cube.sizeStep < 0 + map.marginX) {
    //             cube.width +=cube.sStep;
    //             cube.x = map.marginX;
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
    //         if (cube.x < map.marginX) {
    //             cube.x = map.marginX;
    //         }
    //         //right
    //         else if (cube.x + cube.width > map.width + map.marginX) {
    //             cube.x = map.marginX + map.width - cube.width;
    //         }
    //     }
    //     renderCube(cube);
    //     cube.borderMax = cube.width / 2;
    // }
    // if (event.keyCode === 87) {
    //     console.log("W");
    //     if (cube.height + cube.sStep <= cube.heightMax) {
    //         //up
    //         if (cube.y - cube.sizeStep < map.marginY) {
    //             cube.y = map.marginY;
    //              cube.height +=cube.sStep;
    //         }
    //         //down
    //         else if (cube.y + cube.sizeStep + cube.height > map.height + map.marginY) {
    //             cube.height += cube.sStep;
    //             cube.y = map.marginY + map.height - cube.height;
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
    //         if (cube.y < map.marginY) {
    //             cube.y = map.marginY;
    //         }
    //         else if (cube.y + cube.height > map.height + map.marginY) {
    //             cube.y = map.marginY + map.height - cube.height;
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
    // //rotate
    // if (event.keyCode === 67) {
    //     console.log("C");
    //     if (cube.rotate === 0) {
    //         cube.rotate = 360;
    //     }
    //     else {
    //         cube.rotate = 0;
    //     }
    // }
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
    if (event.keyCode === 32) {
        console.log("randow");
        if (cube.kColor === 0) {
            cube.c = cube.color;
            document.getElementById('cube').style.background = 'linear-gradient(to right, salmon, red, orange, yellow, lime, cyan, blue, purple, MediumOrchid)';
            cube.kColor = 1;
        }
        else {
            document.getElementById('cube').style.background = 'none';
            cube.kColor = 0;
        }
    }
    //shadow
    if (event.keyCode === 70) {
        console.log("F");
        if (cube.k === 0) {
            cube.shadow = 10;
            cube.k = 1;
        }
        else if (cube.k === 1) {
            cube.shadow = 0;
            cube.k = 0;
        }
    }
    //cubeIn
    if (event.keyCode === 86) {
        console.log("V");
        if (cubeIn.k1 < 1) {
            if ((cube.width * 2) + cube.x <= map.marginX + map.width) {
                if (cube.x - cube.width >= map.marginX) {
                    cube.x -= cube.width;
                    cube.height -= 8;
                    cube.width = cube.width * 3;
                    cubeIn.height = cube.height - 10;
                    cubeIn.width = cubeIn.height;
                    cubeIn.x = 5;
                    cubeIn.y = 5;
                    cubeIn.k1 = 1;
                    cubeIn.opacity = 1;
                    cube.borderRadius = cube.height / 2 + 5;
                    cube.c = cube.color;
                    cube.color = 'red';
                    cube.borderWidth = 4;
                    cube.borderColor = 'black';
                    document.getElementById(cube.id).style.cursor = 'pointer';
                }
            }
        }
        else {
            cubeInDel();
            cubeIn.k1 = 0;
            renderCubeIn(cubeIn);
            renderCube(cube);
        }
    }
    renderCubeIn(cubeIn);
    renderCube(cube);
}
//some settings
function renderMargin() {
    map.marginX = map.x + map.borderWidth;
    map.marginY = map.y + map.borderWidth;
    cube.x = map.x + (map.width / 2) - (cube.width / 2);
    cube.y = map.y + (map.height / 2) - (cube.height / 2);
    cube.sizeStep = cube.sStep / 2;
    cubeIn.x = cube.width / 2;
    cubeIn.y = cube.height / 2;
    if (cube.height > cube.width) {
        cube.borderMax = cube.height / 2;
    }
    else {
        cube.borderMax = cube.width / 2;
    }
}

function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
    document.getElementById(cube.id).style.borderRadius = cube.borderRadius + 'px';
    document.getElementById(cube.id).style.transform = 'rotate(' + cube.rotate + 'deg)';
    document.getElementById(cube.id).style.border = cube.borderWidth + 'px solid ' + cube.borderColor;
    document.getElementById(cube.id).style.boxShadow = '0 0 ' + cube.shadow + 'px ' + cube.shadow + 'px ' + cube.color;
}
function renderCubeIn(cubeIn) {
    document.getElementById('cubeIn').style.top = cubeIn.y + 'px';
    document.getElementById('cubeIn').style.left = cubeIn.x + 'px';
    document.getElementById('cubeIn').style.height = cubeIn.height + 'px';
    document.getElementById('cubeIn').style.width = cubeIn.width + 'px';
    document.getElementById('cubeIn').style.borderRadius = cube.height / 2 + 'px';
    document.getElementById('cubeIn').style.opacity = cubeIn.opacity;
    document.getElementById('cubeIn').style.transition = 'ease ' + cubeIn.trnstn;
    document.getElementById('cubeIn').style.backgroundColor = cubeIn.color;
}
function renderMap(map) {
    document.getElementById(map.id).style.top = map.y + 'px';
    document.getElementById(map.id).style.left = map.x + 'px';
    document.getElementById(map.id).style.width = map.width + 'px';
    document.getElementById(map.id).style.height = map.height + 'px';
    document.getElementById(map.id).style.backgroundColor = map.color;
}
function spawnMap(map) {
    map.height = map.heightMin + Math.floor(Math.random() * (map.heightMax - map.heightMin));
    map.width = map.widthMin + Math.floor(Math.random() * (map.widthMax - map.widthMin));

    return map;
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
function randomCubeDop() {
    let mapMinX = 0;
    let mapMaxX = map.width - cubeDop.width;
    let mapMinY = 0;
    let mapMaxY = map.height - cubeDop.height;
    cubeDop.kx = mapMinX + Math.floor(Math.random() * (mapMaxX - mapMinX));
    cubeDop.ky = mapMinY + Math.floor(Math.random() * (mapMaxY - mapMinY));

    return cubeDop;
}