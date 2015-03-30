function countBs(word){
  return countChar(word, "B");
};

function countChar(word, letter){
  var count =0
  
  for(i=0; i<word.length; i++){
    if (word.charAt(i) === letter)
      count++;
  }
  return count;
};
