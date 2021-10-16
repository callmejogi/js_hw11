const n = +prompt(`Type a number:`);


if(isNaN(n)){
  alert(`NaN!`);
}else if(n < 0){
  alert(`Отрицательное число!`)
}else if(n === 1 || n === 0){
  console.log(`false`);
}else{
  for (let i = 2; i < n; i++) { 

    if (n % i === 0) {
      console.log(`false`);
      break;
    };

  };
}

console.log( `true`); 

