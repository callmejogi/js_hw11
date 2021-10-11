let num = +prompt(`Type a number:`);
for (i = 0;;i++){
    if(i % 2 !== 0 && i % i === 1){
        console.log(`true number:${i}`);
    }else{
        console.log(`false number:${i}`);
    }

    if(i <= 2000){
        break;
    }
}