async function bubbleSort(){
    console.log("Sorting the Array Through Bubble Sort");

    const ele = document.querySelectorAll(".bar");
    for(let i=0; i<ele.length-1 ; i++){
        console.log("In ith loop");
        for(let j=0; j< ele.length-i-1; j++){
            console.log("In jth loop");
            ele[j].style.background = 'blue';
            ele[j+1].style.backgroound = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log("In if Condition");
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }

            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';

        }

        ele[ele.length-1-i].style.background = 'green';
    }

    ele[0].style.background = 'green';

}

const bubbleSortBtn = document.querySelector("#btn1");
bubbleSortBtn.addEventListener('click', async function (){
    disableAlgorithmBtns();
    disableSizeSlider();
    disableNewArrayBtn();

    await bubbleSort();

    enableAlgorithmBtns();
    enableSizeSlider();
    enableNewArrayBtn();
});