let n = +prompt(`Type a number:`);


for (let i = 2; i < n; i++) { 

  //if (n % i === 0) {
  //  console.log(`false number ${i}`); 
  //}else{
  //  console.log( `true number ${i}`);
  //};


  if (n % i === 0) {
    console.log(`false`);
    break;
  };



console.log( `true`); 

}