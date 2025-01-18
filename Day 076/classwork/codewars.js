function findUniq(arr) {
    arr.sort(function(a, b) {return a - b});

    if(arr[0] != arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

function evenChars(string) {
    if(string.length < 2 || string.length > 100) {
        return 'invalid string';
    }

    const chars = [];

    for(let i = 1; i < string.length; i += 2) {
        chars.push(string[i]);
    }
}

function descendingOrder(n) {
    let answer = '';
    let arr = [];

    n = String(n);

    for(let i = 0; i < n.length; i++) {
        arr.push(number(n[i]));
    }

    arr = arr.sort().reverse();
    answer = arr.join('');

    return answer;
}