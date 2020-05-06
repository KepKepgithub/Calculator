const btn = document.querySelectorAll('.calc__btn');
const btn_equals = document.querySelector(".calc__equals");
const btn_clear = document.querySelector(".calc__clear")
let input = document.querySelector(".calc__input");


btn.forEach(e =>{
    e.addEventListener('click',()=>{
        x = input.value;
        // * operator logic
        if(x.charAt(x.length - 1) == "*" && e.value == "*"){input.value += "";}
        else if(input.value == "" && e.value == "*"){input.value += "";}
        else if(x.charAt(x.length - 1) == "*" && e.value == "/"){input.value += "";}
        else if(x.charAt(x.length - 1) == "*" && e.value == "-"){input.value += "";}
        else if(x.charAt(x.length - 1) == "*" && e.value == "+"){input.value += "";}
        // "/" operator logic
        else if(x.charAt(x.length - 1) == "/" && e.value == "/"){input.value += "";}
        else if(input.value == "" && e.value == "/"){input.value += "";}
        else if(x.charAt(x.length - 1) == "/" && e.value == "*"){input.value += "";}
        else if(x.charAt(x.length - 1) == "/" && e.value == "-"){input.value += "";}
        else if(x.charAt(x.length - 1) == "/" && e.value == "+"){input.value += "";}
        // + operator logic
        else if(x.charAt(x.length - 1) == "+" && e.value == "+"){input.value += "";}
        else if(input.value == "" && e.value == "+"){input.value += "";}
        else if(x.charAt(x.length - 1) == "+" && e.value == "*"){input.value += "";}
        else if(x.charAt(x.length - 1) == "+" && e.value == "-"){input.value += "";}
        else if(x.charAt(x.length - 1) == "+" && e.value == "/"){input.value += "";}
        // - operator logic
        else if(x.charAt(x.length - 1) == "-" && e.value == "-"){input.value += "";}
        else if(input.value == "" && e.value == "-"){input.value += "";}
        else if(x.charAt(x.length - 1) == "-" && e.value == "*"){input.value += "";}
        else if(x.charAt(x.length - 1) == "-" && e.value == "+"){input.value += "";}
        else if(x.charAt(x.length - 1) == "-" && e.value == "/"){input.value += "";}
        // everything else
        else{input.value += e.value;}
    })
})

btn_clear.onclick = ()=>{
    input.value = "";
}

btn_equals.onclick = ()=>{
    x = input.value;

    if(x.charAt(x.length - 1) == "*"){
        newString = x.substring(0, x.length - 1);
        input.value = eval(newString);
    }
    else if(x.charAt(x.length - 1) == "/"){
        newString = x.substring(0, x.length - 1);
        input.value = eval(newString); 
    }
    else if(x.charAt(x.length - 1) == "+"){
        newString = x.substring(0, x.length - 1);
        input.value = eval(newString); 
    }
    else if(x.charAt(x.length - 1) == "-"){
        newString = x.substring(0, x.length - 1);
        input.value = eval(newString); 
    }
    else{
        input.value = eval(input.value)
    }
}