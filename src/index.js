module.exports = function reverse (n) {
    let str = `${n}`;
    let reversed = [...str].reduce((prev,next)=>next+prev);
    if (reversed[reversed.length - 1] == '-') {
        reversed = reversed.slice(0, -1);
    }
};