/**
 * Created by 13675 on 2017/2/19.
 */
define(['b'],function (isArray) {
    function arraySort(arr) {
        if(!isArray(arr)){
            return;
        }
        arr.sort(function (a,b) {
            return a-b;
        });
        return arr;
    }
    return arraySort;
});