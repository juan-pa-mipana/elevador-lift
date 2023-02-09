let btnOne = document.getElementById("botonblack1");
let btntwo = document.getElementById("botonblack2");
let btnthree = document.getElementById("botonblack3");
let elevatorvUno = document.getElementById("bagon1")

let velocidad = 200;
let mTop = 0;
let mBottom = 0;

btnOne.addEventListener("click",()=> {
    velocidad = 200;
    if(btnOne = elevatorvUno) {
        moverBagonUno();
    }

});

btntwo.addEventListener("click",()=> {
    velocidad = 100;
    if(btntwo = elevatorvUno) {
        moverBagonDos();
    }
});

btnthree.addEventListener("click",()=> {
    velocidad = 0;
    if( btnthree = elevatorvUno) {
        moverBagontres();
    }
});



function moverBagonUno(){
    mTop = velocidad;
    elevatorvUno.style.marginTop =  mTop + "px";
}

function moverBagonDos(){
    mTop = velocidad;
    elevatorvUno.style.marginTop =  mTop + "px";
}

function moverBagontres(){
    mTop = velocidad;
    elevatorvUno.style.marginTop =  mTop + "px";
}












