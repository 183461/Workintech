/* 
1. Bir dizideki kelimeleri uzunluklarına göre sıralamak için sort metodunu kullanın.

Örnek Dizi: ['banana', 'apple', 'cherry', 'date']

2. Bir dizideki tarihleri sıralamak için sort metodunu kullanın (en eski tarihten en yeni tarihe).

Örnek Dizi: ['2024-07-11', '2023-05-20', '2022-08-15', '2021-12-01']
*/

// Q1A
const arr = ['banana', 'apple', 'cherry', 'date']
const lengthSorting = arr.sort((a, b) => b.length - a.length);
console.log(lengthSorting);

// Q2A
const dates = ['2024-07-11', '2023-05-20', '2022-08-15', '2021-12-01']
const dateSorting = dates.sort((a, b) => new Date(a) - new Date(b));
console.log(dateSorting);