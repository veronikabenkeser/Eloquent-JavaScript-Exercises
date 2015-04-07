//constructor
function ArraySeq(arr){
    this.arr = arr;
}

function hasNext(array, value){
    return value<=array.length-1;
}

ArraySeq.prototype.iterate = function(){
    var currentV =0;
    
    return {
        next: function(array){
             if (hasNext(array, currentV)){
                  currentV++;
                  return array[currentV-1];
            } else return null;
        }
    };
}();


function logFive(seqObj){
    if (seqObj instanceof RangeSeq){
     
        var array1 = [];
        var a =seqObj.from;
        var b= seqObj.to;
      
        if(a<= b){
            for(i=a; i <=b; i++){
                array1.push(i);
            }
        }
        seqObj.arr = array1;
    } 
    var count = seqObj.arr.length;
    if(count<5){
        return repeat(seqObj, count);
    } else {
        return repeat (seqObj, 5);
    }
}

function repeat(seqObj, count){
    for(i=0; i <count; i++){
      console.log(seqObj.iterate.next(seqObj.arr));
    }
}


function RangeSeq(from, to){
    this.to = to;
    this.from = from;
}

RangeSeq.prototype.iterate  = function(){
    var currentV =0;

    return {
        next: function(array){
            if (hasNext(array, currentV)){
                currentV++;
                return array[currentV-1];
            } else return null;
        }
    };
}();
