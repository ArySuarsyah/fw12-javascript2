let data = {
    id : 1,
    name : 'Leanne Graham',
    username : 'Bret',
    email : 'Sincere@april.biz',
    addres : {
        street : 'Kulas Light',
        suite : 'Apt. 556',
        city : 'Gwenborough',
        zipcode : '92998-3874'
    },
    phone : 1-770-736-8031-5644,
    website : 'hildegard.org'
}

let change = {...data, name: 'Arisuharsa', email: 'gotrany97@gmail.com', hobby: ['Membaca','Nonton', 'olahraga']};

let {addres: {street, city}} = change;


console.log(change);
console.log(street);
console.log(city);