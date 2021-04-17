
let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    widthMin: 10,
    heightMin: 10,
    widthMax: 300,
    heightMax: 300,
    trnstn: .25,
    color: 'white',
    //action
    step: 50,
    //size change
    sStep: 50,
    //border-radius
    borderMin: 0,
    borderStep: 10,
    //borders
    borderWidth: 0,
    borderColor: 'blue',
    //don,t change
    borderRadius: 0,
    borderMax: 0,
    sizeStep: 0,
    shadow: 0,
    k: 0,
    c: 0,
    kColor: 0,
}
let cubeIn = {
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    borderRadius: 0,
    opacity: 0,
    trnstn: .25,
    color: 'black',
    k1: 0,
}
let cubeDop = {
    x: 0,
    y: 0,
    height: 30,
    width: 30,
    color: 'crimson',
    // color: 'linear-gradient(to right, salmon, red, orange, yellow, lime, cyan, blue, purple, MediumOrchid)',
    borderRadius: 15,
    k: 0,
    kx: 0,
    ky: 0,
}
let map = {
    x: 100,
    y: 50,
    width: 0,
    height: 0,
    widthMax: 1200,
    heightMax: 800,
    widthMin: 300,
    heightMin: 200,
    color: 'gray',
    //don,t change
    marginX: 0,
    marginY: 0,
    id: 'map',
}

renderMargin();
renderMap(spawnMap(map));
renderCube(spawnCube(map, cube));
renderCubeIn(cubeIn);
// spawnCubeDop(spawnCubeDop(spawnCubeDop(spawnCubeDop(spawnCubeDop()))));