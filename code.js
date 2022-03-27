function doodle() {
    var eyes = {'v':[':', ';'], 'h':['^', '=']};
    var mouth = {'v':[")", "D", "P"], 'h':["-", "v", "u"]};
    var extra = {'v':["<]"], 'h':["*", '~']};
    var r = Math.round(Math.random()*1) === 0 ? 'v' : 'h';
    var e = (Math.round(Math.random()*1) !== 0)
    var dood = ''
    var eye = eyes[r]
    var mou = mouth[r]
    var ext = extra[r]
    if (r === 'h') {
        if (e) {dood += ext[Math.round(Math.random()*ext.length)]}
        dood += eye[Math.round(Math.random()*eye.length)] + " " + mou[Math.round(Math.random()*mou.length)] + " " + eye[Math.round(Math.random()*eye.length)]
        if (e) {dood += ext[Math.round(Math.random()*ext.length)]}
    }
    if (r === 'v') {
        if (e) {dood += ext[Math.round(Math.random()*ext.length)]}
        dood += eye[Math.round(Math.random()*eye.length)] + mou[Math.round(Math.random()*mou.length)]
    }
    console.log(dood)
    return dood;
}

document.getElementById("doodle").innerHTML = doodle();