document.onkeydown = checkButton;
let sp = {
    width: 0,
    height: 0,
    widthK: 0,
    heightK: 0,
    max: 0,
    k: 0,
    t: 0,
}
let cube = {
    x: 0,
    y: 0,
    kx: 0,
    ky: 0,
    marginX: 0,
    marginY: 0,
    height: 40,
    width: 40,
    //counters for widht and height
    kh: 0,
    kw: 0,
    color: 'gray',
    borderRadius: 1,
    step: 10,
    position: 'absolute',
    k: 0,
    //rejim
    t: 0,
}
let map = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    widthM: window.innerWidth,
    heightM: window.innerHeight,
    color: 'radial-gradient(circle at 0% 0%, #CCCCCC, #CCCCCC 30px, #E0FFFF 140px, #E0FFFF 150px, #191970 160px, #191970 100%)',//'repeating-radial-gradient(circle at 50% -50%, #222222, #444444 7px, #444444 20px, #222222 21px)',//'repeating-radial-gradient(circle at 50% 50%, #222222, rgba(64, 64, 64, 0.8) 25px)',
    position: 'absolute',
}
calc();
renderMap();
renderFon();
function checkButton(event) {
    if (event.keyCode === 86) {
        console.log("V");
        if (sp.t === 0) {sp.t = 1;}
        else {sp.t = 0}
        renderRainbow();
    }
    if (event.keyCode === 66) {
        console.log("B");
        animationCircle();
    }
    if (event.keyCode === 67) {
        if (cube.k < sp.max) {
            if (cube.t === 0) {//to right
                cube.k +=1;
                cube.kw +=1;
                spawnCube();
                cube.kx += cube.width + cube.step;
                console.log(1);
                if (cube.kw === sp.widthK) {
                    cube.t = 1;
                    cube.kw = 0;
                    sp.widthK -= 1;
                    console.log(11);
                }
            }
            else if (cube.t === 1) {//to down
                cube.k +=1;
                cube.kh +=1;
                spawnCube();
                cube.ky += cube.height + cube.step;
                console.log(2);
                if (cube.kh === sp.heightK) {
                    cube.t = 2;
                    cube.kh = 0;
                    sp.heightK -= 1;
                    console.log(22);
                }
            }
            else if (cube.t === 2) {//to left
                if (sp.k === 0) {sp.widthK += 1; sp.k = 1;}
                cube.k +=1;
                cube.kw +=1;
                spawnCube();
                cube.kx -= cube.width + cube.step;
                console.log(3);
                if (cube.kw === sp.widthK) {
                    cube.t = 3;
                    cube.kw = 0;
                    sp.widthK -= 1;
                    console.log(33);
                }
            }
            else if (cube.t === 3) {//to up
                cube.k +=1;
                cube.kh +=1;
                spawnCube();
                cube.ky -= cube.height + cube.step;
                console.log(4);
                if (cube.kh === sp.heightK) {
                    cube.t = 0;
                    cube.kh = 0;
                    sp.heightK -= 1;
                    console.log(44);
                }
            }
        }
        renderRainbow();
    }
}
function calc() {
    sp.width = Math.floor(map.widthM / (cube.width + cube.step));
    sp.height = Math.floor(map.heightM / (cube.height + cube.step));
    sp.widthK = sp.width - 1;
    sp.heightK = sp.height - 1;
    sp.max = sp.width * sp.height;
    map.width = sp.width * (cube.width + cube.step) - cube.step;
    map.height = sp.height * (cube.height + cube.step) - cube.step;
    map.x = (map.widthM - map.width) / 2;
    map.y = (map.heightM - map.height) / 2;
    cube.marginX = map.x;
    cube.marginY = map.y;
    if (cube.borderRadius === 1) {cube.borderRadius = cube.height / 2;}
}
function spawnCube() {
    var pipka = document.getElementById('fon');
    pipka.insertAdjacentHTML('beforeend', '<div id="cube_' + cube.k + '" class="Cube"></div>');
    renderCube();
}
function renderCube() {
    document.getElementById('cube_' + cube.k).style.width = cube.width + 'px';
    document.getElementById('cube_' + cube.k).style.height = cube.height + 'px';
    document.getElementById('cube_' + cube.k).style.left = cube.kx + cube.marginX + 'px';
    document.getElementById('cube_' + cube.k).style.top = cube.ky + cube.marginY + 'px';
    document.getElementById('cube_' + cube.k).style.borderRadius = cube.borderRadius + 'px';
    document.getElementById('cube_' + cube.k).style.background = cube.color;
    document.getElementById('cube_' + cube.k).style.position = cube.position;
}
function renderRainbow() {
    let i = 0;
    if (sp.t === 1) {
        while (i < cube.k) {
            i++;
            document.getElementById('cube_' + i).style.background = 'linear-gradient(to right, #ff0000, orange , #ffff00, lime, DeepSkyBlue, #5555ff, BlueViolet, #ff0000, orange , #ffff00, lime, DeepSkyBlue, #5555ff, BlueViolet)';
            document.getElementById('cube_' + i).style.backgroundSize = '14000% 100%';
            document.getElementById('cube_' + i).style.animation = 'Cube_animation 7s linear  infinite';
        }
    }
    else if (sp.t === 0) {
        while (i < cube.k) {
            i++;
            document.getElementById('cube_' + i).style.background = cube.color;
            document.getElementById('cube_' + i).style.backgroundSize = '400% 100%';
            document.getElementById('cube_' + i).style.animation = '0';
        }
    }
}
function renderMap() {
    document.getElementById('map').style.width = map.width + 'px';
    document.getElementById('map').style.height = map.height + 'px';
    document.getElementById('map').style.left = map.x + 'px';
    document.getElementById('map').style.top = map.y + 'px';
    document.getElementById('map').style.background = map.color;
    document.getElementById('map').style.position = map.position;
    document.getElementById('map').style.opacity = 0;
}
function renderFon() {
    document.getElementById('fon').style.width = map.widthM + 'px';
    document.getElementById('fon').style.height = map.heightM + 'px';
    document.getElementById('fon').style.background = map.color;
}
function animationCircle() {
    var dg = 0;
	var radius = 150;
	var speed = 20;
	var f = 0;
	var s = 2 * Math.PI / 180;
	setInterval(function() {
		f += s;
        dg -= 2;
		document.getElementById('circle').style.left = 235 + radius * Math.sin(f)  + 'px'; 
		document.getElementById('circle').style.top = 235 + radius * Math.cos(f) + 'px';
        document.getElementById('circle').style.transform = 'rotate(' + dg + 'deg)';
	}, speed)
    document.getElementById('circle').style.height = 100 + 'px';
    document.getElementById('circle').style.width = 100 + 'px';
    document.getElementById('circle').style.position = 'absolute';
    document.getElementById('circle').style.backgroundColor = 'red';
    //document.getElementById('circle').style.transition = 'linear ' + .25 + 's';
}