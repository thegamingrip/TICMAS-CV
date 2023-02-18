document.getElementById("modos").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "css/modo_claro.css" ){
        document.getElementById('estilo').setAttribute('href', "css/modo_oscuro.css");
        document.getElementById('modos').innerHTML = 'Modo Claro';       
    }else{
        document.getElementById('estilo').setAttribute('href', "css/modo_claro.css");
        document.getElementById('modos').innerHTML = 'Modo Oscuro';       
    }
});