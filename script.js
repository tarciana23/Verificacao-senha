const passwordInput = document.querySelector("#passwordInput");

//cada vez que o usuário digita
passwordInput.addEventListener("input",function(){
    
    let password = this.value;
    let strengthIndicator = document.querySelector("#password-strength-indicator");

    const strengthText = document.querySelector("#password-strength-text");

    const strength = {
        0: "muito fraca",
        1:"Fraca",
        2: "Moderada",
        3: "Forte",
        4: "Muito forte",
    };

    let score = 0;

    //Requisitos

    if(password.length >=8) score ++;
    if(password.match(/[a-z]/)) score++;
    if(password.match(/[A-Z]/)) score++;
    if(password.match(/[0-9]/)) score++;
    if(password.match(/[^a-zA-Z0-9]/)) score++; //caracteres especiais


    console.log(score)
    const width = (score/4) * 100;

    switch(score){
        case 1:
            strengthIndicator.style.backgroundColor = "#e70b0b";
            break;
        case 2:
            strengthIndicator.style.backgroundColor = "#FFB74D";
            break;
        case 3:
            strengthIndicator.style.backgroundColor = "#FFF176";
            break;
        case 4:
            strengthIndicator.style.backgroundColor = "#81c784";
            break;
        default:
            strengthIndicator.style.backgroundColor = "transparent";

            
    }

    strengthIndicator.style.width = `${width}%`;

    if(password.length > 0){
        strengthText.innerHTML = `Força ${strength[score]}`;
    }else{
        strengthText.innerHTML = "";
    }

});