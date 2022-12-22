let hasil 
const pencarian = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number') { 
        if (dataArray.length < 5) {
            console.log('Jumlah angka dalam dataArray harus lebih dari 5')
        } else if (nilaiAwal > nilaiAkhir) {
            console.log('nilaiAkhir harus lebih besar dari nilaiAwal')
        } else {
            hasil = dataArray.filter((value) => value > nilaiAwal && value < nilaiAkhir)
            if (hasil.length) {
                console.log(hasil);
            } else {
                console.log('Data tidak ada');
            }
            
        }
    } else {
        console.log('nilai harus angka');
    }
}

pencarian(5, 2,[4,5,8,6,9,4,6,4,9,9]);