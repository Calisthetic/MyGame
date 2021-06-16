var key = {
    e: 0,
    onColor: 'red',
    oColor: 'black',
    hm: window.innerHeight,
    wm: window.innerWidth,
    num: false,
    caps: false,
    scroll: false,
}
document.getElementById('keyboard').style.width = '1080px';
document.getElementById('keyboard').style.height = '288px';
document.getElementById('keyboard').style.position = 'absolute';
document.getElementById('keyboard').style.top = (key.wm - 1072) / 2 + 'px';
document.getElementById('keyboard').style.left = (key.wm - 1072) / 2 + 'px';
document.getElementById('keyboard').style.backgroundColor = '#333333';
document.getElementById('keyboard').style.borderRadius = '5px';

function renderLighters() {
    if (key.num === true) {document.getElementById('num').style.backgroundColor = 'lime';}
    else {document.getElementById('num').style.backgroundColor = key.oColor;}
    if (key.caps === true) {document.getElementById('caps').style.backgroundColor = 'lime';}
    else {document.getElementById('caps').style.backgroundColor = key.oColor;}
    if (key.scroll === true) {document.getElementById('scroll').style.backgroundColor = 'lime';}
    else {document.getElementById('scroll').style.backgroundColor = key.oColor;}
}

document.onkeydown = function(event) {
    key.e = (event || window.event).keyCode;
    if (key.e === 27) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 112) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 113) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 114) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 115) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 116) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 117) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 118) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 119) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 120) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 121) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 122) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 123) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 145) {//no screen
        document.getElementById(key.e).style.backgroundColor = key.onColor;
        if (key.scroll) {key.scroll = false;}
        else {key.scroll = true;}
        renderLighters();
    }
    else if (key.e === 19) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 44) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    //floor2
    else if (key.e === 192) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 49) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 50) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 51) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 52) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 53) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 54) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 55) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 56) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 57) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 48) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 189) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 187) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 220) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 8) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 45) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 36) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 33) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 144) {
        document.getElementById(key.e).style.backgroundColor = key.onColor;
        if (key.num === true) {key.num = false;}
        else {key.num = true;}
        renderLighters();
    }
    else if (key.e === 111) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 106) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 109) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    //floor3
    else if (key.e === 9) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 81) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 87) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 69) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 82) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 84) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 89) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 85) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 73) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 79) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 80) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 219) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 221) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 13) {
        document.getElementById('enter1').style.color = key.onColor;
        document.getElementById('enter1').style.backgroundColor = key.onColor;
        document.getElementById('enter2').style.backgroundColor = key.onColor;
        document.getElementById('enter3').style.backgroundColor = key.onColor;
    }
    else if (key.e === 46) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 35) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 34) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 103) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 104) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 105) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 107) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    //floor4
    else if (key.e === 20) {
        document.getElementById(key.e).style.backgroundColor = key.onColor;
        if (key.caps === true) {key.caps = false;}
        else {key.caps = true;}
        renderLighters();
    }
    else if (key.e === 65) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 83) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 68) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 70) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 71) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 72) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 74) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 75) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 76) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 186) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 222) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 13) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 100) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 101) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 102) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    //floor5
    else if (key.e === 90) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 88) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 67) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 86) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 66) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 78) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 77) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 188) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 190) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 191) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 38) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 97) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 98) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 99) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 13) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    //floor6
    else if (key.e === 32) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 93) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 37) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 40) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 39) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 96) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 110) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 91) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    else if (key.e === 92) {document.getElementById(key.e).style.backgroundColor = key.onColor;}
    //unusual
    else if (key.e === 17) {
        document.getElementById('ctrl1').style.backgroundColor = key.onColor;
        document.getElementById('ctrl2').style.backgroundColor = key.onColor;
    }
    else if (key.e === 18) {
        document.getElementById('alt1').style.backgroundColor = key.onColor;
        document.getElementById('alt2').style.backgroundColor = key.onColor;
    }
    else if (key.e === 16) {
        document.getElementById('shift1').style.backgroundColor = key.onColor;
        document.getElementById('shift2').style.backgroundColor = key.onColor;
    }
}



document.onkeyup = function(event) {
    key.e = (event || window.event).keyCode;
    if (key.e === 27) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 112) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 113) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 114) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 115) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 116) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 117) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 118) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 119) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 120) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 121) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 122) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 123) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 145) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 19) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    //floor2
    else if (key.e === 192) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 49) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 50) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 51) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 52) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 53) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 54) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 55) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 56) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 57) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 48) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 189) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 187) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 220) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 8) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 45) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 36) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 33) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 144) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 111) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 106) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 109) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    //floor3
    else if (key.e === 9) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 81) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 87) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 69) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 82) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 84) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 89) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 85) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 73) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 79) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 80) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 219) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 221) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 13) {
        document.getElementById('enter1').style.color = key.oColor;
        document.getElementById('enter1').style.backgroundColor = key.oColor;
        document.getElementById('enter2').style.backgroundColor = key.oColor;
        document.getElementById('enter3').style.backgroundColor = key.oColor;
    }
    else if (key.e === 46) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 35) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 34) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 103) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 104) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 105) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 107) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    //floor4
    else if (key.e === 20) {
        document.getElementById(key.e).style.backgroundColor = key.oColor;
        if (key.caps === true) {key.caps = false;}
        else {key.caps = true;}
        renderLighters();
    }
    else if (key.e === 65) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 83) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 68) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 70) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 71) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 72) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 74) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 75) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 76) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 186) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 222) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 13) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 100) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 101) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 102) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    //floor5
    else if (key.e === 90) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 88) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 67) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 86) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 66) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 78) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 77) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 188) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 190) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 191) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 38) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 97) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 98) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 99) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 13) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    //floor6
    else if (key.e === 32) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 93) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 37) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 40) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 39) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 96) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 110) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 91) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    else if (key.e === 92) {document.getElementById(key.e).style.backgroundColor = key.oColor;}
    //unusual
    else if (key.e === 17) {
        document.getElementById('ctrl1').style.backgroundColor = key.oColor;
        document.getElementById('ctrl2').style.backgroundColor = key.oColor;
    }
    else if (key.e === 18) {
        document.getElementById('alt1').style.backgroundColor = key.oColor;
        document.getElementById('alt2').style.backgroundColor = key.oColor;
    }
    else if (key.e === 16) {
        document.getElementById('shift1').style.backgroundColor = key.oColor;
        document.getElementById('shift2').style.backgroundColor = key.oColor;
    }
}