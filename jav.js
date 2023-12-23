'use strict';
console.log(juiceProducer(2,3))
function juiceProducer(apple,orange){
    return `juice of ${apple} APPLES and ${orange} oranges`;
}
let machine = 2;



function multiply(x,y,z){
    
return x*y;
}

console.log(juiceProducer(4,5))
console.log(machine)
console.log(juiceProducer(4,5))
console.log(++machine)
console.log(juiceProducer(4,5))
console.log(juiceProducer(4,5))
console.log(machine)



function  fruitJuice(milk,mango){
    const juice= `the milk shake made by ${milk} glass of milk  and ${mango} chop mangoes`;
    return juice;

}




console.log(fruitJuice(2,4))
console.log(fruitJuice(6,8))

function  ternery(speed){
 const x= speed<=40? 'slow' : speed <=60?'average'  : 'fast'
 return x;
}

console.log(ternery(41))







const calcAge= function(bd,crrntYr){


const x= crrntYr-bd;
return x;

    
}



  const currentAge = function(birthYear,currentYear,retirements){
   const age=calcAge(birthYear,currentYear)
   
   const remainingService= retirements - age;
   return `my age is ${age} and remaining years in retirement is in ${remainingService}`;
  }
  console.log(currentAge(1994,2023,60))
  console.log(currentAge(1998,2023,60))
  console.log(currentAge(2002,2023,60))
  console.log(currentAge(2012,2023,60))
  const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
console.log(calcAverage(44,23,71))


const calcAverages = (score1,score2,score3) => (score1+score2+score3)/3;
  let scoreDolpshins=calcAverages(44,23,71)
  let scoreKoalas=calcAverages(65,54,49);

  
  
const checkWinner = function(avgDolphins,avgKoalas){
    
const x=    avgDolphins>= 2*avgKoalas? `Dolphin wins 🏆( ${avgDolphins} vs ${avgKoalas} )` : avgKoalas>= 2*avgDolphins? `koalas wins (${avgKoalas} vs${avgDolphins}) ` : 'No team wins';
return x;
}

console.log(checkWinner(scoreDolphins,scoreKoalas))

let calcAges= function(currentYear,birthYear){ 
    const res=currentYear-birthYear;
    return res;
}

let age= calcAges(2023,1994);



const retirement = function(currentYear,  dob,Sixty,name){

   const age= calcAge(currentYear,dob)
    
const x= `retirment of mine is ${Sixty-age}, name=> ${name} `;
return x;
}
console.log(retirement(2023,1995,60,'mubashir')) // currentYear,dob,limitAge
console.log(retirement(2023,1986,60 , 'adnan nazir')) // currentYear,dob,limitAge
console.log(retirement(2023,2005,60,'soleha')) // currentYear,dob,limitAge
console.log(retirement(2023,1999,60,'ayesha')) // currentYear,dob,limitAge






