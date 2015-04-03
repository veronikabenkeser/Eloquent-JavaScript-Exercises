function every(array, test){
    for(i=0; i<array.length; i++){
        if(!test(array[i]))
            return false;
    }
    return true;
}

function some(array, test){
    for(i=0; i<array.length; i++){
        if(test(array[i]))
            return true;
    }
    return false;
}

function isBiggerThan9(arrayElement){
    return arrayElement>9;
}

console.log("Some numbers in the array are bigger than 9: " + some([1, 10, 2, 2, 1], isBiggerThan9));
console.log("Every number in the array is bigger than 9: " + every([10, 20, 12, 1], isBiggerThan9));
