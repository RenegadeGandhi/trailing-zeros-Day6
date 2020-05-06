const trailingZeros = (num) => {
    //Creates a form of placeholder
    let zeros = 0; 

    /*factorials below 5 do not have a trailing zero, hence we start from 5,
    the last digit of facNum is gotten from facNum % 5,
    the while loop checks to see if it is zero, and continues to the last non-zero digit,
    the number of trailing zeros is then stored in the zeros variable.
     */
    for( let i = 5; i <= num; i+=5 ) {
        let facNum = i;
        while (facNum % 5 === 0) {
            facNum /= 5;
            zeros++;
        }
    }
    return zeros;
}

trailingZeros(6);