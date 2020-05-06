function trailingZeros(num) {
    let zeros = 0;
    for( let i = 5; i <= num; i+=5 ) {
        let n = i;
        while (n % 5 === 0) {
            n /= 5;
            zeros++;
        }
    }
    return zeros;
}

trailingZeros(6);