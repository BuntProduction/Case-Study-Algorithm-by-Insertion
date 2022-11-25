const secondSection = document.getElementById('secondSection');
const numbers = document.getElementById('numbers');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');
const retry = document.getElementById('retry');
let nb = [];
let tempSort = [];

const thirdSection = document.getElementById('thirdSection');

//algorithm by insertion
const sort = (list) => {
    const length = list.length;
    let temp = null;
    let k = 0;

    for (let i = 1; i < length; i++) {
        temp = list[i];
        k = i - 1;
        while (k >= 0 && list[k] > temp) {
            list[k+1] = list[k];
            k--;
        }
        list[k+1] = temp;
    }
    return list;
}
/* algorithm by bubbles
const sort = (list) => {
    let edit = false;
    do{
        edit = false;
        for(let i = 0; i < list.length - 1; i++) {
            if(list[i] > list[i+1]) {
                let temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;
                edit = true;
            }
        }
    } while(edit);
    return list;
}*/

/*Algorithm sort of fusion
const assembly = (partOne, partTwo) => {
    const newList = [];
    let one = 0;
    let two = 0;

    while (one < partOne.length && two < partTwo.length){
        if (partOne[one] < partTwo[two]){
            newList.push(partOne[one++]);
        } else {
            newList.push(partTwo[two++]);
        }
    }

    return newList.concat(partOne.slice(one)).concat(partTwo.slice(two));
}

const sort = (list) => {
    if (list.length < 2) {
        return list;
    }

    const middle = Math.floor(list.length / 2);
    const partOne = list.slice(middle);
    const partTwo = list.slice(0, middle);
    const ass = assembly(sort(partOne), sort(partTwo));

    ass.unshift(0, list.length);
    list.splice.apply(list, ass);
    return list;
}
 */

addButton.onclick = () => {
    const id = nb.length + 1;
    const div = document.createElement('div');
    div.setAttribute("id", "divInput");
     
    const input = document.createElement('input');
    input.setAttribute("id", "input");

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute("id", "deleteButton");

    numbers.appendChild(div);
    div.appendChild(input);
    div.appendChild(deleteBtn);

    input.type = "number";

    deleteBtn.innerText = "X";
    deleteBtn.onclick = () => {
        nb = nb.filter(el => el.id !== id);
        div.remove();
    }
    nb.push({
        id,
        element: input,
        parent: div
    });
}

result.onclick = () => {
    const list = [];
    for (let k in nb) list.push(nb[k].element.value ? parseInt(nb[k].element.value ): 0);
    secondSection.style.display = "none";
    const newList = sort(list)
    for (let n in newList) {

        const div = document.createElement('div');
        div.setAttribute("id", "divInput");

        const input = document.createElement('input');
        input.setAttribute("id", "input");

        thirdSection.appendChild(div);
        div.appendChild(input);

        input.type = "number";
        input.disabled = true;
        input.value = newList[n]

        tempSort.push(div)
    }
    thirdSection.style.display = "flex";
}

retry.onclick = () => {
    window.location.reload();
}