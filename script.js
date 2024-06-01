

function login(){

    const info1 = document.getElementById("username").value;
    const info2 = document.getElementById("password").value;
    

    if (info1 == "André" && info2 == 1234){
        alert("login correto!!!")
    }

    else{
        alert ("login incorreto, tente novamente.")
    }

}