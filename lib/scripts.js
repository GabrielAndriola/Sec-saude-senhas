function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function atualizaRelogio(){ 
    var momentoAtual = new Date();
    
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();
    
    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();
    
    if (vdia < 10){ vdia = "0" + vdia;}
    if (vmes < 10){ vmes = "0" + vmes;}
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    dataFormat = vdia + " / " + vmes + " / " + vano;
    horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

    document.getElementById("data").innerHTML = dataFormat;
    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("atualizaRelogio()",1000);
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
		var senhaAtual   = $("#senhaAtualNumero");
		var senhaNormal  = $("#senhaNormal");
		var senhaPrior   = $("#senhaPrioridade");
		var ultimaSenha  = $("#ultimaSenhaNumero");
		var audioChamada = $("#audioChamada");

        if(e.keyCode == 39){
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaNormal.val()) + 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 65){
            senha = parseInt(senhaNormal.val()) - 1;
            senhaAtual.html(pad(senha, 4));
            senhaNormal.val(pad(senha, 4));
        }
        if(e.keyCode == 38){
        	ultimaSenha.html(senhaAtual.html());
            senha = parseInt(senhaPrior.val().replace("P","")) + 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
            audioChamada.trigger("play");
        }
        if(e.keyCode == 83){
            senha = parseInt(senhaPrior.val().replace("P","")) - 1;
            senhaAtual.html("P" + pad(senha, 3));
            senhaPrior.val("P" + pad(senha, 3));
        }
    });
});