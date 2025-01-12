function binarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;

    while(low <= high) {
        const middle = Math.floor((low + high) / 2);
        if(array[middle] === target) {
            return middle;
        } else if(array[middle] < target) {
            low = middle + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; //element not found :-(
}

const array = [1, 4, 7, 5, 8];
const target = 4;
const index = binarySearch(array, target);