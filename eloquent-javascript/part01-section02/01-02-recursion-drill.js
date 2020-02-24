function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    // We shouldn't know about Math.abs, yet. So, we check for negative
    // numbers and, if we find one, recursively call isEven() with -n
    else if (n < 0) return isEven((-n));
    // A mathematical definition of evenness in numbers includes
    // that a number, n, has the same evenness as n-2
    else return isEven(n-2));
}
