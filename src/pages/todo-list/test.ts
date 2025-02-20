const  reverse = (str:string) =>{
   let result = false;
  for(let i = 0; i < str.length ; i++ ){
    if(str[i] === str[str.length - 1 - i]){
      result = true;
      continue;
    }
    else {
       result = false
    }
    
  }
  return result;
}