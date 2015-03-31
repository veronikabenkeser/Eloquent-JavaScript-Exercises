function arrayToList(arr){
    var list = null;
    
    for (i=arr.length-1; i>=0; i--){
        list = {value: arr[i], rest: list};
    }
    return list;
}

function listToArray(list){
    var arr = [];
    for(var node=list; node; node=node.rest){
        arr.push(node.value);
    }
    return arr;
}

function prepend(element, list){
    var newList = {};
    newList = {value:element, rest: list};
    return newList;
}

function nth(list, number){
   // var result;
    
    if(number === 0){
       return list.value; 
    }
    else
    {
    number-=1;
    list=list.rest;
    return nth(list, number); 
    }
}
