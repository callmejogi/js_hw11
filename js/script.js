let n = +prompt(`Type a number:`);


for (let i = 2; i <= n; i++) { 

  if (n % i === 0) {
    console.log(`false number ${n}`); 
    break;
  }else{
    console.log( `true number ${n}`);
    break;
  };

}