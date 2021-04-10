let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let map = {
    x: 70,
    y: 70,
    width: 370,
    height: 370,
    color: '#f5f5f5',
    border: '#f1f1f1'
}

renderMap(map);
renderCube(spawnCube(map, cube));