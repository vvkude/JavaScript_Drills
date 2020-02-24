function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(Math.abs(n));
    // A mathematical definition of evenness in numbers includes
    // that a number, n, has the same evenness as n-2
    else return isEven(n-2));
}
