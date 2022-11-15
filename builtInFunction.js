
// 1 indexOf = digunakan untuk mencari tau posisi index string maupun array dengan mengetikkan karakter atau string yang ingin dicari posisinya, jika ada dua karakter atau kata yang sama maka yang pertama kali ditemukan yang akan diambil indexnya.

// cara penggunaan
// const fruits = ['Apple','Strawberry', 'Orange']
// fruits.indexOf('Orange'); //output 2
// fruits.indexOf('Banana'); // -1




// 2. Slice = Merupakan method array yang berfungsi untuk mengambil sebagian index atau element didalam array dan dimasukkan pada array baru. Elemen yang ingin diambil/disalin ditentukan menggunakan urutan elemen tersebut yang berupa awal dan akhir. Jika hanya memberikan satu masukan, maka angka yang diinputkan tersebut akan dianggap sebagai  awal sehingga yang tidak diberikan input akan dianggap terakhir. fungsi ini tidak merubah array asli.

// cara penggunaan
// const fruits = ['Avocado','Pinnaple','Cherry','Apple', 'Strawberry', 'Orange', 'Banana'];
// fruits.slice(0,3) // output ['Avocado','Pinnaple','Cherry']
// fruits.slice(3) // output ['Apple', 'Strawberry', 'Orange', 'Banana'];



// 3. pop = berguna untuk menghapus index/element terakhir pada sebuah array

// cara penggunaan
// const fruits = ['Blackberry', 'Blueberry',' Starfruit'];
// fruits.pop()
// console.log(fruits); // output ['Blackberry', 'Blueberry']



// 4. filter = merupakan sebuah method dalam javascript yang berfungsi untuk mencari semua element dalam array yang sesuai dengan kriteria tertentu. method ini mengembalikan array baru dan tidak merubah array lama.

// cara penggunaan
// const source = [12, 55, 6, 10, 9, 70, 4, 20, 25, 19, 15];
// const filtered = source.filter((el) => el % 2 == 0)
// console.log(filtered); // output [12, 6, 10, 70, 4, 20]



// 5. push = Method ini berfungsi untuk menambahkan element baru pada sebuah array, method ini mengembalikan panjang array baru.

// cara penggunaan
// const fruits = ['Blackberry', 'Blueberry',' Starfruit'];
// fruits.push('Orange')
// console.log(fruits); // output 4 ['Blackberry', 'Blueberry',' Starfruit', 'Orange']



// 6. Shift = merupakan method yang berfungsi untuk menghapus element pertama dalam sebuah array. method ini mengembalikan elemen yang dihapus dan mengubah panjang array.

// cara penggunaan
// const fruits = ['Apple','Strawberry', 'Orange'];
// fruits.shift(); // output ['Strawberry', 'Orange']



// 7. unshift = digunakan untuk menambahkan elemen baru di awal sebuah array.

// cara penggunaan 
// const arr = [1, 2, 3, 4];
// arr.unshift(5); // output [5, 1, 2, 3, 4]



// 8.includes = method array yang berfungsi untuk mengetahui apakah sebuah array mengandung nilai tertentu atau tidak.

// cara penggunaan
// const fruits = ['Blackberry', 'Blueberry',' Starfruit'];
// fruits.includes('Blueberry') // output true


// 9. every = method yang berfungsi untuk menentukan apakah elemen dalam sebuah array memenuhi kriteria tertentu, every akan mengembalikan nilai true jika semua elemen dalam array sesuai dengan kriteria.

// cara penggunaan 
// const arr = [1, 2, 3, 4];
// arr.every((x) => x < 7) // output true


// 10. some = hampir sama dengan every, method ini berfungsi untuk menentukan apakah sebuah array memiliki kriteria tertentu, akan tetapi some akan mengembalikan nilai true ketika salah satu elemen dalam array sesuai dengan kriteria.

// cara penggunaan
// const source = [12, 55, 6, 10, 9, 70];
// source.some((x) => x < 7); // output true


