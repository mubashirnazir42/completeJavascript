const interviewQuestion = function(job){

    switch(job){
        case 'teacher' : return function(name, profession){
                    console.log(`my ${name} and  ${profession}  i can do easily`);
        }
        // case 'plumber': function (num1, num2){
        //    const numdar=num1+num2
        //    return numdar;
        // }

        case 'politician' :return function(name,profession){
            const x= `i am ${name} and  ${profession}  i can do easily`; 
            return x;
        }
        default : console.log(`have a good luck`)
    }


}



console.log(interviewQuestion('politician')(2,3))


const onePlusAvergae = function(l,m,n){
      return Math.round((1+(l+m+n)/3))
}

console.log(`i am mubashir `,onePlusAvergae(21,2,1))


const calcPercentage = (x,y,z=3)=>{
   return x*y+2
}

console.log(calcPercentage(2,45))


const checkSum = function(p,q,r=0){
return p+q+r;
}

console.log(checkSum(2,true))



