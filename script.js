/* Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �  


BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

*/


// challenge1
let WeightOfMarks = 78; 
let heightOfMarks = 1.69;
let WeightOfJohns = 92; 
let heightOfJohns = 1.95;

let bmiOfMarks = WeightOfMarks/(heightOfMarks**2);
let bmiOfJohns = WeightOfJohns/(heightOfJohns*heightOfJohns);
const markHigherBMI = (bmiOfMarks > bmiOfJohns)

console.log(bmiOfMarks, bmiOfJohns , markHigherBMI );


// challenge2
/* Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */
let $WeightOfMarks = 95; 
let $heightOfMarks = 1.88;
let $WeightOfJohns = 85; 
let $heightOfJohns = 1.76;

let $bmiOfMarks = $WeightOfMarks/($heightOfMarks)**2;
let $bmiOfJohns = $WeightOfJohns/($heightOfJohns)**2;
const $markHigherBMI = ($bmiOfMarks > $bmiOfJohns)

console.log($bmiOfMarks, $bmiOfJohns , $markHigherBMI );


console.log(8*8)
console.log(8**2)



let casteName= "chaudhary";

let result= 89 + undefined
console.log(typeof result)

console.log("my caste is "+casteName+ "and we are "+$WeightOfJohns+ " peaple lives in karachi.");
console.log(`my name is ${casteName}  and i m ${$WeightOfMarks-$WeightOfJohns} years old.  ${true} `)



const ageForPermission = 18;
let myAge=28;

let ableFordriving= myAge>=ageForPermission;

if (ableFordriving){
    console.log(`im able  for driving as im ${myAge-ageForPermission} years old for driving`);
}else{
    console.log(`im ${ageForPermission-myAge} years young for driving`)
}



let num1= '22';
let num2 = 4;
let numresult=num1-num2 + '1'
console.log( numresult)


let x='1999';
x=Number(x);

console.log(x)


let y=String('23');
console.log(y)


const dateOfBirth = '1998';
console.log(dateOfBirth-12)

let v=Boolean(90);
console.log(v)







