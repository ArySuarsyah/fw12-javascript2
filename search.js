const name = ['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 'Caroline', 'Carolyn','Deirdre', 'Diana', 'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope']



function searchName(input, number, call) {
    input = name.map((el) => el.toLowerCase()).filter((el) => el.includes(input))
    let newArr = []
    if(number || typeof number == number) {
        for (let i = 0; i < number; i++) {
            if (input[i] !== undefined) {
                newArr.push(input[i])
            }
        }
        call(newArr)
    } else {
        call(input)
    }
};


    
    function search(result){
        console.log(result)
    }

searchName('ab', 3, search);