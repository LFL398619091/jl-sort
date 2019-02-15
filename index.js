function defComparator (a, b) {
    return a - b;
}
/**
 * 判断一个数组是否有序
 * @param {*} arr 需要比对的数组 
 * @param {*} comparator 比较器
 */
function sort (arr, comparator) {
    if (!typeof arr === 'Array') {
        throw `Require Array,but get ${typeof arr}`;
    }
    comparator = comparator || defComparator;
    for (let i = 1; i < arr.length; i++) {
        if (comparator(arr[i], arr[i - 1]) < 0) {
            return false;
        }
    }
    return true;
}
module.exports = sort;