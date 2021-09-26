var ele=document.body.querySelector(".dragon");

var userPoints =0;

var dragonPoints =0;

var hits=Number(prompt("What is the number of hits you are going to hit the dragon with: "));
while (hits > 5)
   // hits=Number(prompt("Enter a number up to 5: "));
//var userNumber= Number(prompt("Enter a number that determine the damage to cause to the dragon: "));

var i = 1;
while (i <= hits){

    var dragonDamage = Math.floor((Math.random)*userNumber+1);
    if (dragonDamage > 5)
        dragonPoints += 1;
    else
        dragonPoints += dragonDamage;
    var userDamage= Math.floor((Math.random) *2 +1);
    userPoints += userDamage;
    if (userPoints >= 5) {
        ele.innerHTML="User Lost";
        break;
    }
    if (dragonPoints >= 10) {
        ele.innerHTML="User win";
        break;
    }

    i++;

}
if (dragonPoints < 10){
    ele.innerHTML="Dragon win";

}

