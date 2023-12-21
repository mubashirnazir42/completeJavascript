let num="";

if(num){
    console.log('num is truthy value')
}
else{
    console.log(`  ${num} is falsy value`)
}


let x=prompt(`choose your fav number`);

if(x===2){
console.log(typeof x)
}else if(x==2){
    console.log(typeof x)
}

console.log('10' === '10')

console.log('12'== 12)

// let x='2'


if(x!= 2){ // 2 != '2'
console.log('hi')
}else{
    console.log('ye wala dkho')
}



// let x=2;

if(x===2){
    console.log(`this one`)
} else if(x== 2){
    console.log(`genuinely this one`)
}



let myAge =5;

if(myAge >=10 || myAge<= 30){
    console.log(myAge)
}



let rollnum = 1991;
console.log(rollnum+true);


console.log(2+true)


console.log(2-'s')



let sarahAge= 18;
let hasDrivingExperience='';

if(sarahAge >= 18 && hasDrivingExperience){
    console.log(`only she can drive then`)
}


//challenge2
let scoreDolphins= (97+ 112+ 81)/3;
let scoreKoalas =  (109+ 95+  86)/3;

console.log(scoreDolphins, scoreKoalas)

if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
    console.log(`Dolphins win the trophy`)
}else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
    console.log(`Koalas win the trophy`)
}else if(scoreDolphins === scoreKoalas){
    console.log(`Both win the trophy`)
}else{
    console.log(`no one wins`)
}
let age=19;


console.log(x)

console.log(`i am mubashir and i am ${age>=18? 'adult' : 'young'}`);


// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉


let bill= 20;

let tip = bill>=50 && bill<=300? 0.15*bill :0.2*bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}.`);





   