


const removeDuplicates = (arr) => {
    const pureArray = [];
    let indx = 0;


    for (let i = 0; i < arr.length; i++) {
        let isElement = false;

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] === pureArray[j]) {
                isElement = true;
            }
        }

        if (!isElement) {
            pureArray[indx] = arr[i];
            indx++;
        }
    }
    return pureArray;
}

const arr = [1, 2, 2, 5, 3, 1,]
console.log(removeDuplicates(arr));



