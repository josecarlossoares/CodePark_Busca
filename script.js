let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let buscando  = 20;
let result = [];

for (let index = 0; index < array.length; index++){
    if(array[index] == buscando){
        result.push(array[index])
    }
}


console.log(result)