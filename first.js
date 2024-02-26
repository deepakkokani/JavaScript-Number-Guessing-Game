let guessnumber = 10;
let number;
for(i=1;i<=10;i++){
    number = prompt("Guess The Number");
    if(number==guessnumber){
        alert("Congratulations well Played");
        break;
    }
    else{
        alert("Try Again");
    }
}