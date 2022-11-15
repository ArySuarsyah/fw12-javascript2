const pencarian = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(dataArray.length < 5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    } else if (nilaiAwal > nilaiAkhir) {
        console.log('nilaiAkhir harus lebih besar dari nilaiAwal')
    } else if (typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number') {
        console.log('Nilai harus angka')
    } else {
        for(let i = 0; i < dataArray.length; i++) {
            if(dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                hasil.push(dataArray[i])
            } else {
                console.log('Nilai tidak ada');
            }
        }
    }    
    return;
}


console.log(pencarian(5,'a',[4,5,8,6,9,4,6,4,9,9]));