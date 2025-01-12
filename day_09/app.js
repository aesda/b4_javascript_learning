function multiply(num1, num2) {
    const result = num1 * num2;
    return result;


}
const a = 2;
const b = 3;
console.log(multiply(a, b));

function multiplicationtable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num}`)
    }
}
multiplicationtable(5);
multiplicationtable(28);
multiplicationtable(985);
multiplicationtable(12345);


function greet(name) {
    name = 'dknfnc'
    return  `Hello ${name}!`;


}
let name = 'SANF';
console.log(greet(name));
console.log(name);

function printdays(days) {
    day.push('wedej');
    for(const day of days) {
        console.log(day);
    }
}
const days = ['san', 'dsf', 'sds']
printdays(...days);
console.log(days);



//anonymouse function
//call back fucntion


function dosdj(callback) {
    callback;
}
dosdj(function ()  {
    console.log("its beautiful");
})