function range (start, end, step){
    var arr=[];
    
    if (step === undefined)
        step=1;
        
    if(end<start)
        if (step>=0)
            console.log("Cannot find the range.");
        else 
            for(i=start; i>=end; i+=step){
                arr.push(i);
        }
    else if (end ===start)
        console.log("Please enter 2 different numbers.");
    else 
    
        if(step<=0)
            console.log("Cannot find the range.");
        else 
            for(i=start; i<=end; i+=step){
                arr.push(i);
            }
    return arr;
}

function sum(arr){
    var result =0;
    for(i=0; i<arr.length; i++){
        result+=arr[i];
    }
    return result;
}
