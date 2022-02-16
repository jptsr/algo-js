/* Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their 
multiplication by 3. */

for(let i = 0; i <= 100; i++){
    // console.log("i = " + i);
    // for(i = 0; i <= 100; i += 2){
    //     console.log(i / 2);
    // }
    if(i % 2 == 0){
        console.log(i / 2);
    }else{
        console.log(i * 3);
    }
}