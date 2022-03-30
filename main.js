function swap(el1, el2){
    console.log('Swaping');

    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableAlgorithmBtns(){
    document.querySelector('#btn1').disabled = true;
    document.querySelector('#btn2').disabled = true;
    document.querySelector('#btn3').disabled = true;
    document.querySelector('#btn4').disabled = true;
    document.querySelector('#btn5').disabled = true;
}

function enableAlgorithmBtns(){
    document.querySelector('#btn1').disabled = false;
    document.querySelector('#btn2').disabled = false;
    document.querySelector('#btn3').disabled = false;
    document.querySelector('#btn4').disabled = false;
    document.querySelector('#btn5').disabled = false;
}

function disableSizeSlider(){
    document.querySelector('#arraySize').disabled = true;
}

function enableSizeSlider(){
    document.querySelector("#arraySize").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

function waitforme(milisec){
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

let arrSize = document.querySelector("#arraySize");

arrSize.addEventListener('input', function(){
    console.log(arrSize.value, typeof(arrSize.value));
    createNewArray(parseInt(arrSize.value));
});

let delay = 260;

let delayEle = document.querySelector("#sortingSpeed");

delayEle.addEventListener('input', function(){
    console.log(delayEle.value, typeof(delayEle.value));
    delay = 320 - parseInt(delayEle.value)
});

let array = [];

createNewArray();

function createNewArray(noOfbars = 40){
    deleteChild();

    array = [];
    for(let i=0; i<noOfbars; i++){
        array.push(Math.floor(Math.random()*200) + 1);
    }

    console.log(array);

    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfbars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild(){
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arrSize.value);
    console.log("From newArray " + delay);
    enableAlgorithmBtns();
    enableSizeSlider();
    createNewArray(arrSize.value);
});