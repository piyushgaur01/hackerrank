/* Question
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:

0 4 3
  1
8 6 6

*/


const inputArr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];

// const inputArr = [
//     [1, 1, 2, 2],
//     [2, 1, 1, 2],
//     [-1, -2, 0, 4],
//     [0, 1, 2, 3]
// ];

const getHourGlass = (arr, r, c) => {
    let hg = [];
    for (let i = r; i < r + 3; i++) {
        hg[i - r] = [];
        for (let j = c; j < c + 3; j++) {
            if ((i - r === 1 && j - c === 0) || (i - r === 1 && j - c === 2)) {
                hg[i - r].push(0);
            } else {
                hg[i - r].push(arr[i][j]);
            }

        }
    }
    return hg;
}

const getHourGlasses = (arr) => {
    const colMax = arr[0].length - 2; // console.log(colMax);
    const rowsMax = arr.length - 2; // console.log(rowsMax);
    const hourGlasses = [];
    for (let i = 0; i < colMax; i++) {
        for (let j = 0; j < rowsMax; j++) {
            hourGlasses.push(getHourGlass(arr, i, j));
        }
    }
    return hourGlasses;
}

const hourGlasses = getHourGlasses(inputArr);

const findMaxValue = (arr) => {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                sum += arr[i][j][k];
            }
        }
        max = sum > max ? sum : max;
    }

    return max;
}

console.log(findMaxValue(hourGlasses));

console.log(hourGlasses);
