let numbers =[ 10,10,20,20,30,30,40,40];
let oneNumbers=[];
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let index =oneNumbers.indexOf(element);
    if (index == -1) {
        oneNumbers.push(element);
        
    }

    
}
console.log(oneNumbers);    
