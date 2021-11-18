let arrayToPass;
function findOdd(A) {
    let result;
      let numbersInArray=[];
      for(let i=0;i<A.length;i++){
  
          let thereIsNewNumber=true;
          for(let n=0;n<A.length;n++){
              if(A[i]==numbersInArray[n]){
                  thereIsNewNumber=false;
  }
  
      }
     if(thereIsNewNumber===true){
         numbersInArray.push(A[i])
  
     } 
  
  }
  
  
  numbersInArray.forEach((value)=>{
      let countTheNumber=0;
      for(let i=0;i<A.length;i++){
          if(value===A[i]){
              countTheNumber++;
          }
      
      }
     
      if(countTheNumber%2>0){
          result=value;
        
          
      }
  
  });
  
    document.querySelector("#result").innerHTML=`The number which appears odd number of times is: ${result} from "${arrayToPass}"`;
    return result;
    }

arrayToPass=[2,2,3,3,4,5,5,5,5,6,6,7,7,8,8];

findOdd(arrayToPass);
