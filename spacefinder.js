let text = "I am jamiul  abedin shovon.";
 
let count= 0;

for (let i = 0; i < text.length; i++) {
  let element = text[i];
   if (element ==" " && text[i-1] !=" ") {
       count++;
   }  
}
console.log(count);