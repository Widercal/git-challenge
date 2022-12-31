/*e -> enter
o -> ober
i -> ines
a -> ai
u -> ufat 
*/

function encriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();

    
    // i es para que afecte tanto para matusculas y minusculas
    //g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos 

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgrigth").style.display = "none";
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function Desencriptar(){
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    
    // i es para que afecte tanto para matusculas y minusculas
    //g es para toda la linea u oracion
    // m es para que afecte a multiples lineas o parrafos 

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgrigth").style.display = "none";
    document.getElementById("texto").style.display = "none"; 
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió !");
}
