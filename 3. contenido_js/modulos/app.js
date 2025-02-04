'use strict';

import {mult} from "./calculo.js";
import { buscarElementos } from "./otro.js";
import { saludarA } from "./otro.js";


console.log(mult (3 ,4));

const array = [1,2,3,4,5,6,7,8,9,10];
const result = buscarElementos (array, 1);
console.log(result);
console.log(saludarA("Pedro"));