// Fungsi untuk mengkapitalkan huruf pertama pada sebuah string
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Fungsi untuk menyaring angka genap dari sebuah array
const filterOddNumber = (arr) => {
  // Menggunakan metode filter untuk menyaring angka genap
  return arr.filter((num) => num % 2 === 0);
};
/**
 * Fungsi sebelumnya mengembalikan string yang berisi seluruh elemen array,
 * bukan array yang sudah difilter dengan benar. Perbaikan ini
 * menggunakan metode filter untuk menghasilkan array angka genap.
 */

// ! Dont change this code
const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

// ! Dont change this code
module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};