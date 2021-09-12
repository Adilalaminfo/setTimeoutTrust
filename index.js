console.log("Md Adil Alam");

setTimeout(function abc(){
    console.log("callbackFucntion");
},10000);

console.log("End");


let setDate=new Date().getTime();
let endDate=setDate;
while(endDate< setDate +1000)
{
   endDate=new Date().getTime();

}
    console.log("While loop is Exprires");
