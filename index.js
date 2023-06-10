let i = 0;

const down = document.querySelector("#down");
const up = document.querySelector("#up");
const h1 = document.querySelector("#h1");

function upClicked () { //
    h1.innerText = ++i; //+1씩 h1에서 더함
}

function downClicked () { // 
    h1.innerText = --i; // -1씩 h1에세 뻄
}

up.addEventListener("click",upClicked); //up에 클릭 포인트 추가
down.addEventListener("click",downClicked); //down에 클릭 포인트 추가