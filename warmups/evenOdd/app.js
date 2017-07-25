for (var i = 0; i < 101; i++) {
  if (i === 0){
    console.log(i + "is undefined");
  } else if (i % 2 !== 0 ){
    console.log(i + "is odd");
  } else{
      console.log(i + "is even");
  }
}
// ternary representation
// i % 2 !== 0? console.log(i + "is odd") : console.log(i _ "is even);