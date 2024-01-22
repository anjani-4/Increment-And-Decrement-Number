const countValue = document.querySelector('#counter');

const increment = () => {    //we are using innerText to fetch the value stored iin variable countValue
    
    //get the value rom UI
    let value= parseInt(countValue.innerText  );  //we use parse value to convert string to integer //as innerText will convert the value storent in countValue into string form
     
    //update the value
    value=value+1;    //incrementing the value
  
    //set the value onto UI
    countValue.innerText = value;  //storing the value in countValue

};

//we can write function like this also
function decrement(){
    let value= parseInt(countValue.innerText);
    value=value-1; 
    countValue.innerText = value;
};

//we can also write simplee function instread of arrow function