//ввести новые переменные (низ, верх, бок куба)
//random spawn
//random size map
//rando cube рядом

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
    //rotate
    rotate: 0,
    rotateStep: 15,
    //action
    step: 50,
    //size change
    sStep: 50,
    color: 'white',
    //border-radius
    borderMin: 0,
    borderStep: 10,
    //don,t change
    borderRadius: 0,
    borderMax: 0,
    sizeStep: 0,
    shadow: 0,
    k: 0,
    r: 0,
    i: 0,
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
    k: 0,
    c: 0,
}
let map = {
    x: 200,
    y: 100,
    borderWidth: 5,
    width: 500,
    height: 500,
    color: 'gray',
    borderColor: 'black',
    //don,t change
    marginX: 0,
    marginY: 0,
    id: 'map',
}

renderMargin();
renderMap(map);
renderCube(cube);