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
    x: 0,
    y: 0,
    width: 470,
    height: 470,
    color: 'grey',
    border: 'black'
}

renderMap(map);
renderCube(cube);
