import { multiplica, suma } from './modulos/controller.js'
import chalk from 'chalk';

const ja = suma(1, 2);
console.log(ja);

const eg = multiplica(4, 5);
console.log(eg);

console.log(chalk.red("la suma es igual a ") + chalk.green (ja) + ' ' + chalk.blue("la multiplicación es igual a ") +  chalk.green (eg));