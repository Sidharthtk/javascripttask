//reference copy

// const car={
//     color:"red",
//     born:"1999",
//     fuel:"diesel",
//     company:{
//         name:"BMW",
//     }
// }

// const newCar=car;
// newCar.color="blue";
// newCar.fuel="petrol";
// newCar.company.name="benz";

// console.log("reference copy:",newCar);
// console.log("original:",car);


//shallow copy

// const car={
//         color:"red",
//        born:"1999",
//        fuel:"diesel",
//         company:{
//          name:"BMW",
//     }
//  }

//  const newCar={...car};
//  newCar.color="blue";
//  newCar.company.name="BMW";
//  console.log("shallow copy:",newCar);
//  console.log("original:",car);


 //deep copy

 const car={
    color:"red",
    born:"1999",
    fuel:"diesel",
    company:{
    name:"BMW",
}
}
const stringifiedcar=JSON.stringify(car);
const deepCopy=JSON.parse(stringifiedcar);
deepCopy.color="blue";
deepCopy.company.name="Benz";

console.log(deepCopy);
console.log("original:",car);




 
 



