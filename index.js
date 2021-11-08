const colors = require('colors');

const [firstArg, secondArg] = process.argv.slice(2);
let errMessage = true;
const primeNumbers = [];
const start = Number(firstArg);
const end = Number(secondArg);

if (start % start !== 0 && end % end !== 0) {
    console.log(colors.red("Аргументы не являются числами"));
} else {
    for (let i = start; i <= end; i++) {
        let flag = 1;
        if (i > 2 && i % 2 !== 0)
        {
            for (let j = 3; j*j <= i ; j=j+2)
            {
                if (i % j===0)
                {
                    flag=0;
                    break;
                }
            }
        }
        else if (i !== 2) {
            flag = 0;
        }
        if (flag === 1) {
            errMessage = false;
            primeNumbers.push(i);
        }
    }
    if (errMessage)
        console.log(colors.red("Нет простых чисел в диапазоне"));
}

primeNumbers.forEach((num, index)=>{
    if (index === 0) {
        console.log(colors.green(num));
    } else if (index === 1) {
        console.log(colors.yellow(num));
    } else if (index === 2) {
        console.log(colors.red(num));
    } else
        console.log(colors.white(num));
})
