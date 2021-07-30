// let Max=Math.max(100,1,2,3);
//   console.log(Max);

let numbers =[1.5,1.9,1.7,1.8];
let max=numbers[0];
for (let i = 0; i <= numbers.length; i++) {
    let element = numbers[i];
    if (element>max) {
        max=element;
    }
}
 console.log(max);