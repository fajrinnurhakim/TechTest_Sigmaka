function penentuKelulusan(nilaiSiswa) {
    if (nilaiSiswa > 70) {
        return true;
    } else {
        return false;
    }
}
const nilaiSiswa = 80;
const PenentuanKelulusan = penentuKelulusan(nilaiSiswa);

console.log(`Nilai siswa: ${nilaiSiswa}`);
console.log(`Hasil penentuan kelulusan: ${PenentuanKelulusan}`);
