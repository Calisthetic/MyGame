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
    step: 25,
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
    k: 0,
}
let map = {
    x: 0,
    y: 0,
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