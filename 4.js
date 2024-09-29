// // massive/array -> [] olon utga zereg hadgalna
// var toonuud = [5,6,94,32,4,9,2,3,4,5,3,2];
// console.log (toonuud);
// // index -> elementiin bairshil. 0-ees ehelne
// console.log(toonuud[0]);// massiviin hamgiin ehnii utga
// // var item = ["buu","bambai"];
// console.log(toonuud[toonuud.length-1]); // hamgiin svvliin hin
// // for 
// for(var i=0; i<=toonuud.length-1; i++){ // negeen zereg bugdiin gargna
//    console.log(toonuud[i]);
// }
var too = [2,1,2,3,5,3,6,7,3,4];
// console.log (too[too.length-1]);
// console.log (too[0]);
// console.log (too[0]*too[too.length-1]);
// for(var i=0; i<=too.length-1; i++){
//    if(too[i]%2==0){
//       console.log("tegsh: "+too[i]);
//    }else{
//       console.log("sondgoi: "+too[i]);
//    }
// }
// var niilber=0, vrjver=1;
// for(var i=0; i<=too.length-1;i++){
//  niilber = niilber+too[i];
//  vrjver = vrjver*too[i];
// }
// console.log("vrjver: "+vrjver);
// console.log("niilber: "+niilber);
var body = document.getElementsByTagName("body")[0];
var colors = ['green','yellow','blue','red','purple'];
var i=-1;
function change(){
   i++;
   if(i==colors.length-1){
      i=0;
   }
   body.style.backgroundColor=colors[i];
}
function has(){
   i--;
   if(i<=0){
      i=4;
   }
   body.style.backgroundColor=colors[i];
}
var st;
var aBtn=document.querySelector('.a');
var stBtn=document.querySelector('.st');
function a(){
   i++;
   if(i==colors.length-1){
      i=0;
   }
   body.style.backgroundColor=colors[i];
   st=setTimeout(a,1000);
   aBtn.disabled = true;
   stBtn.disabled = false;
}
function s(){
   clearTimeout(st);
   aBtn.disabled = false;
   stBtn.disabled = true;
}