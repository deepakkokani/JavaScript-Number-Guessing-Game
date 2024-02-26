let number;
const generate_number=()=>{
    let n1 = Math.random();
    let n2 = n1*10;
    n2 = Math.trunc(n2);
    n2 = ( n2 % 10 )+1;
    number = n2
    console.log(number);
}

//generate_number();

const generate_number_btn_click = () =>{
    document.querySelector("#div1").style.display="none";
    document.querySelector("#div2").style.display="none";
    document.querySelector("#div3").style.display="block";
    setTimeout(()=>{
        generate_number();
        document.querySelector("#div1").style.display="none";
        document.querySelector("#div2").style.display="block";
        document.querySelector("#div3").style.display="none";
    }, 3000)
};

//check number
const check_number = () =>{
    let value = document.querySelector("#field").value;
    if(value==number)
    {
        alert("Congratulations you won the game");
    }
    else{
        alert("OOPS !! your guess is wrong");
    }
    generate_number_btn_click();
}
