function beautifulDays(i, j, k){
    let count = 0;
    // Step 1.
    for (let x = i; x <= j; x++) {
        // Step 4.
        if (isBeautifulDay(x, k)) {
            count++;
        }
    }
    // Step 5.
    return count;
}

function isBeautifulDay(x, k) {
    // Step 3.
    return differenceOfReverse(x) % k === 0;
}

function differenceOfReverse(x) {
    let reversedX = parseInt(
        x
            .toString()
            .split('')
            .reverse()
            .join('')
    );
    // Step 2.
    return Math.abs(x - reversedX);
}