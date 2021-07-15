var x = 21;
var y='my roll is';
console.log(y+' '+x);
var z='10.5';
z=parseFloat(z);
console.log(z)
var c=0.1;
var d=0.5;
total=c+d;
total = total.toFixed(5);
console.log(total);

var v=50.5;
var b=50.5;
vagsesh= v%b;
console.log(vagsesh);

var n='aikhan theke khuje ber koro ami ja boli';
upperLetter=n.toUpperCase(n);
lowerLetter=n.toLowerCase(n);
console.log(upperLetter);
console.log(lowerLetter);
findsome=n.indexOf('theke');
console.log(findsome);
spliting=n.split(' ');
console.log(spliting);



var admsnFee=4000000;
var scholarship=80;
var location='dhaka';
location=false;


if(admsnFee <500000 && scholarship>70 && location==true){
    console.log("private e vorti hobo");

}
else if(scholarship>50 || location==true ){
    console.log('basai bole dekhbo cgpa maintain korte hobes');


}
else if(location==true){
    console.log('dhakai hole dekha jabe');

}


else{
    console.log('public er jnno pora suru korbo');
}






var admsnLottery=Math.random()*100;
admsnLottery=Math.floor(admsnLottery);
console.log(admsnLottery);

if(admsnLottery >50 ){
    console.log('vorti hobo yahhh')


}
else if(admsnLottery >10 && admsnLottery<40){
    console.log('dead inside paite paiteo pailam na');

}
else{
    console.log('public baba poro poro');
}




var dateDekha= new Date();
console.log(dateDekha); 



var arry=[10,15,20,25,30];
var arryPostion=arry.indexOf(25);
console.log(arryPostion);
var amarAge=arry;
console.log(amarAge.length);
arry.push(20);
arry.push(21);
console.log(arry);
arry.pop();
console.log(arry);

