var shovon = {id:101, Roll:20 , phone: 171423 };
var shihab = {id:102, Roll:21, phone:  19915 };

shovon.phone=11111;

console.log(shovon);
console.log(shihab);

var crawlphone1=shovon.phone;
var crawlroll1=shovon['Roll'];
var crawlid="id";
var crawlid1=shovon[crawlid];

console.log(crawlroll1);
console.log(crawlid1);
console.log(crawlphone1);

