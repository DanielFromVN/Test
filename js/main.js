var budj = +prompt('Ваш бюджет?');
var name = prompt('Название вашего магазина:');

var mainList = {
    budj: budj,
    name: name,
    shopGoods: [],
    employers: {

    },
    open: () => {

    }
}

for(let i = 0; i < 3; i++){
    mainList.shopGoods.push(prompt("Какой товар будем продовать?"));
}
alert(mainList.budj/30);
