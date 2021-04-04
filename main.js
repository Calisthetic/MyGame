let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    trnstn: .25,
    step: 25,
    sStep: 50,
    sizeStep: 25,
    color: 'white',
    borderStep: 10,
    borderRadius: 0,
    k: 0,
}
let map = {
    id: 'map',
    x: 0,
    y: 0,
    borderWidth: 5,
    marginX: 0,
    marginY: 0,
    width: 500,
    height: 500,
    color: 'gray',
    borderColor: 'black',
}

renderMargin();
renderMap(map);
renderCube(cube);
