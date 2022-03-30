
async function merge(ele, si, ei, mid){

    let i = si;
    let j = mid + 1;
    let k = 0;
    const n = ei - si + 1;
    let arr = new Array(n);

    while(i<=mid && j<=ei){
        await waitforme(delay);
        ele[i].style.background = 'blue';
        ele[j].style.background = 'blue';
        if(parseInt(ele[i].style.height) <= parseInt(ele[j].style.height)){
            arr[k++] = ele[i++].style.height;
        }
        else{
            arr[k++] = ele[j++].style.height;
        }
    }

    while(i<=mid){
        await waitforme(delay);
        arr[k++] = ele[i++].style.height;
    }
    while(j<=ei){
        await waitforme(delay);
        arr[k++] = ele[j++].style.height;
    }

    for(let l=si; l<=ei; l++){
        await waitforme(delay);
        ele[l].style.height = arr[l-si];
        ele[l].style.background = 'green';
    }
}

async function mergeSort(ele, si, ei){
    if(si>=ei){
        console.log("less than two elements");
        return ;
    }

    const mid = si + Math.floor((ei - si) / 2);

    await mergeSort(ele, si, mid);
    await mergeSort(ele, mid+1, ei);

    await merge(ele, si, ei, mid);
}

const mergeSortBtn = document.querySelector("#btn5");
mergeSortBtn.addEventListener('click', async function(){
    const ele = document.querySelectorAll(".bar");
    disableAlgorithmBtns();
    disableNewArrayBtn();
    disableSizeSlider();

    await mergeSort(ele, 0, parseInt(ele.length - 1));

    enableAlgorithmBtns();
    enableNewArrayBtn();
    enableSizeSlider();
});