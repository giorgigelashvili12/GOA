function getNums(...numbers) {
    return numbers;
}

getNums(1, 2, 3, 4, 5, 6, 7, 8);

////////////////////////////////////////////////////////////////////

let numArr = [1, 3, 6, 7, 10, 15, 19, 23, 5, 5, 3, 1, 2, 7];

numArr.filter(filterNums);

function filterNums(num) {
    return (num > 10); 
}

////////////////////////////////////////////////////////////////////

console.log(set(numArr));