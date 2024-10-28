const removeElement = (arr, elementToRemove) => {
    const pureArray = [];
    let indx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== elementToRemove) {
            let isElement = false;

            for (let j = 0; j < pureArray.length; j++) {
                if (arr[i] === pureArray[j]) {
                    isElement = true;
                    break; // No need to continue if found
                }
            }

            // If the element is not a duplicate, add it to pureArray
            if (!isElement) {
                pureArray[indx] = arr[i];
                indx++;
            }
        }
    }
    return pureArray;
};

// Example usage:
const arr = [1, 2, 3, 2, 1, 4];
const elementToRemove = 1;
console.log(removeElement(arr, elementToRemove)); // Output: [1, 3, 4]
