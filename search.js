const nama = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope']



function searchName(input, number, call) {
    input = nama.map((el) => el.toLowerCase()).filter((el) => el.includes(input))
    let newArr = []
    if(number || typeof number == number) {
        for (let i = 0; i < number; i++) {
            newArr.push(input[i])
        }
        call(newArr);

    } else {
        call(input)
    }
}


    
    function search(name){
        console.log(name)
    }

searchName('an', 3, search);