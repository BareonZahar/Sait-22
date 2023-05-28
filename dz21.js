let tar = document.getElementById('tar')
let tap = document.getElementById('tap')
let tat = document.getElementById('tat')
let kar = document.getElementById('kar')
let kap = document.getElementById('kap')
let kat = document.getElementById('kat')
let ug = document.getElementById('ug')
let noug = document.getElementById('noug')
let nagh = document.getElementById('nagh')
let nah = document.getElementById('nah')

let priz1 = false
let priz2 = false
let priz3 = false

let ofx=0
let ofy=0
tar.ondragstart = star
tar.ondragend = en


function star(event) {
    console.log(event.pageX, event.pageY)
 console.log(event.offsetX, event.offsetY)
    ofx = event.offsetX
    ofy = event.offsetY
}
function en(event){
    let x = event.pageX
     let y = event.pageY
    tar.style.left = (x-ofx) + 'px'
    tar.style.top = (y-ofy) + 'px'
    console.log(event.pageX,event.pageY)
    console.log(event.offsetX, event.offsetY)
}

$('#nagh').click(res)
$('#tar').mousemove(f1)
function f1() {
    let tarleft = $('#tar').css('left')
    let tartop = $('#tar').css('top')
    tarleft = +tarleft.slice(0, -2)
    tartop = +tartop.slice(0, -2)
    if (440 < tarleft && tarleft < 520 && tartop < 100) {
        kar.setAttribute('src','Ugadal.jpg')
        $('#tar').hide()
        ug.style.opacity = 1
        priz1 = true
    }
      if (580 < tarleft || tarleft < 390 && tartop < 100){
        noug.style.opacity = 1
           setTimeout(
        function (){
        noug.style.opacity = 0
        },2000 )
    }
        if (priz1 === true && priz2 === true && priz3 === true) {
             $('body').html('<img src="pobeda1.jpg" alt ="" width="1400px" height="700px">')
               setTimeout(
        function (){
        location.reload()
        },3000 )
        }
}

tat.ondragstart = start
tat.ondragend = end
    function start(event) {
        console.log(event.pageX, event.pageY)
        console.log(event.offsetX, event.offsetY)
        ofx = event.offsetX
        ofy = event.offsetY
    }

    function end(event) {
        let x = event.pageX
        let y = event.pageY
        tat.style.left = (x - ofx) + 'px'
        tat.style.top = (y - ofy) + 'px'

        console.log(event.pageX, event.pageY)
    }
$('#tat').mousemove(f2)
function f2() {
    let tatleft = $('#tat').css('left')
    let tattop = $('#tat').css('top')
    tatleft = +tatleft.slice(0, -2)
    tattop = +tattop.slice(0, -2)
    if (580 < tatleft && tatleft < 650 && tattop < 100) {
        kat.setAttribute('src','Ugadal.jpg')
        $('#tat').hide()
        ug.style.opacity = 1
            setTimeout(
        function (){
       ug.style.opacity = 0
        },2000 )
         priz2 = true
    }
      if (540 > tatleft  || tatleft > 710 && tattop < 100){
        noug.style.opacity = 1
           setTimeout(
        function (){
       noug.style.opacity = 0
        },2000 )
    }
      if (priz1 === true && priz2 === true && priz3 === true) {
            $('body').html('<img src="pobeda1.jpg" alt ="" width="1400px" height="700px">')
               setTimeout(
        function (){
        location.reload()
        },3000 )
      }
}

    tap.ondragstart = sta
    tap.ondragend = endg

    function sta(event) {
        console.log(event.pageX, event.pageY)
        console.log(event.offsetX, event.offsetY)
        ofx = event.offsetX
        ofy = event.offsetY
    }

    function endg(event) {
        let x = event.pageX
        let y = event.pageY
        tap.style.left = (x - ofx) + 'px'
        tap.style.top = (y - ofy) + 'px'
        console.log(event.pageX, event.pageY)
    }
$('#tap').mousemove(f3)
function f3() {
    let tapleft = $('#tap').css('left')
    let taptop = $('#tap').css('top')
    tapleft = +tapleft.slice(0, -2)
    taptop = +taptop.slice(0, -2)
    if (670 < tapleft && tapleft < 790 && taptop < 100) {
        kap.setAttribute('src','Ugadal.jpg')
        $('#tap').hide()
        ug.style.opacity = 1
           setTimeout(
        function (){
       ug.style.opacity = 0
        },2000 )
         priz3 = true
    }
      if (810 < tapleft || tapleft < 690 && taptop < 100){
        noug.style.opacity = 1
           setTimeout(
        function (){
       noug.style.opacity = 0
        },2000 )
    }
      if (priz1 === true && priz2 === true && priz3 === true){
           $('body').html('<img src="pobeda1.jpg" alt ="" width="1400px" height="700px">')
               setTimeout(
        function (){
        location.reload()
        },3000 )
      }
}
$('#nah').click(res)
function res() {
      location.reload()
  }
/*
  element = kar.element.getStyles('left', 'top', 'width', 'height');
    elementLeftX = element.left.toInt();
    elementLeftY = element.top.toInt();
    elementRightX = (element.width.toInt() + element.left.toInt());
    elementRightY = (element.top.toInt() + element.height.toInt());


    el = kar.positions ? kar.positions[i] : kar.getDroppableCoordinates(el); // Element drop area
    elLeftX = el.left.toInt();
    elLeftY = el.top.toInt();
    elRightX = (el.width.toInt() + el.left.toInt());
    elRightY = (el.height.toInt() + el.top.toInt());

   if (((elLeftY <= elementLeftY) && (elementLeftY <= elRightY)) && ((elLeftY <= elementRightY) && (elementRightY <= elRightY))) {
        if (((elLeftX <= elementLeftX) && (elementLeftX <= elRightX)) && ((elLeftX <= elementRightX) && (elementRightX <= elRightX))) {
           tar.style.rotate360(deg)
            setTimeout()
        } else {
           noug.style.opacity1
        }
    } else {
        ug.style.opacity1
    }

 */
setInterval(f1, 10)