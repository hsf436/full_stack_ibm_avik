// const arr = [3,6,9,2,56,23,12,90];
// function sortArray(arr) {
//     function quickSort(arr) {
//         if (arr.length <= 1) {
//             return arr;
//         }
//         const pivot = arr[arr.length - 1];
//         const left = arr.filter(el => el < pivot);
//         const right = arr.filter(el => el > pivot);
//         const middle = arr.filter(el => el === pivot);
//         return [...quickSort(left), ...middle, ...quickSort(right)];
//     }
//     return quickSort(arr);
// }
// console.log(sortArray(arr));

