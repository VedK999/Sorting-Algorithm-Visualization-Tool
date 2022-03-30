async function Insertion_sort(){
    console.log("Sorting through Insertion Sort");

    const ele = document.querySelectorAll(".bar");
    ele[0].style.backgroound = 'green';
    let i = 1;
    while(i<ele.length){
        let temp = ele[i].style.height;
        ele[i].style.background = 'blue';
        let j = i-1;

        await waitforme(delay);
        while(j>=0 && parseInt(ele[j].style.height) > parseInt(temp)){
            ele[j].style.background = 'blue';
            ele[j+1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            for(let k=i; k>=0; k--){
                ele[k].style.background = 'green';
            }
        }

        ele[j+1].style.height = temp;
        ele[i].style.background = 'green';
        i++;
    }
}

const insertionSortBtn = document.querySelector("#btn3");
insertionSortBtn.addEventListener('click', async function(){
    disableAlgorithmBtns();
    disableNewArrayBtn();
    disableSizeSlider();

    await Insertion_sort();

    enableAlgorithmBtns();
    enableNewArrayBtn();
    enableSizeSlider();
});