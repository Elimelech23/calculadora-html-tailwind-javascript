function numeros(valor){
    document.getElementById('resultado').value += valor;
}

function operacion(){
    var clear = document.getElementById("resultado").value;
    if(clear == 0){
        document.getElementById("resultado").value = "Sin operacion";
    } else{
        document.getElementById("resultado").value = eval(clear);
    }
}

function formatea(){
        document.getElementById("resultado").value = " ";  
}