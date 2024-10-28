function greet(param1,param2){
    console.log(this,param1,param2);
    
}

const student ={
    name:"Rahul",
    age:25,
};

//call

// greet.call(student,"hllo");

//apply

// greet.apply(student,["hello","hai"]);

//bind