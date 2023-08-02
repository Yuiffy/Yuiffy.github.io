/**
 * Created by yuiff on 2016/10/8.
 */
function min(a, b) {
    return a < b ? a : b;
}

function max(a, b) {
    return a > b ? a : b;
}

function abs(a) {
    return a > 0 ? a : -a;
}

function argmax(a) {
    if (!(a instanceof Array)) return -1;
    var x = 0;
    for (i in a)
        if (a[i] > a[x])x = i;
    return x;
}