let n = +prompt(`Type a number:`);

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j === 0) {
        console.log(`false number ${i}`); 
        continue nextPrime;
    };

  };

  console.log( `true number ${i}`); 
}