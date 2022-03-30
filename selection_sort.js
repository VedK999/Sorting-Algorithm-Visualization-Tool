async function Selection_sort(){
    console.log("Sorting Through Selection Sort");

    const ele = document.querySelectorAll(".bar");
    for(let i=0; i<ele.length - 1; i++){
        let min_index = i;
        ele[i].style.background = 'blue';
        for(let j=i+1; j<ele.length; j++){
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index!==i){
                    ele[min_index].style.background = 'cyan';
                }

                min_index = j;
            }
            else{
                ele[j].style.background = 'cyan';
            }
        }

        await waitforme(delay);
        swap(ele[i], ele[min_index]);

        ele[i].style.background = 'green';
        ele[min_index].style.background = 'cyan';
    }
}

const selectionSortBtn = document.querySelector("#btn2");
selectionSortBtn.addEventListener('click', async function(){
    disableAlgorithmBtns();
    disableNewArrayBtn();
    disableSizeSlider();

    await Selection_sort();

    enableAlgorithmBtns();
    enableNewArrayBtn();
    enableSizeSlider();
});