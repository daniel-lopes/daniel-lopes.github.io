function getURLCV(portfolio) {
  if(detectmob.call() || tela < 600){
		document.getElementById("curriculo").src="https://docs.google.com/gview?a=v&pid=explorer&chrome=false&api=true&embedded=true&srcid=124Cf3AIQV31TFaaGNv5EWshxs5FCa7zl&hl=en&embedded=true";
	} else if (portfolio == 1){
		document.getElementById("curriculo").src="curriculo/Curriculo_Daniel_Lopes.pdf";
	} else {
		document.getElementById("curriculo").src="../curriculo/Curriculo_Daniel_Lopes.pdf";
	}
};

var tela = window.innerWidth;

function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
 		|| navigator.userAgent.match(/webOS/i)
 		|| navigator.userAgent.match(/iPhone/i)
 		|| navigator.userAgent.match(/iPad/i)
 		|| navigator.userAgent.match(/iPod/i)
 		|| navigator.userAgent.match(/BlackBerry/i)
 		|| navigator.userAgent.match(/Windows Phone/i)
	){
    return true;
  } else {
    return false;
  }
}

function pdf(portfolio){
	getURLCV(portfolio);
	document.getElementById("curriculo").style= "-webkit-transform: scale(1,1); -moz-transform: scale(1,1); -ms-transform: scale(1,1); -o-transform: scale(1,1); transform: scale(1,1);";
	document.getElementById("close").style= "opacity: 1; z-index: 9999;";
	if(tela > 600){
		document.getElementById("conteudo").style="height: 115vh;";
	}else{
		document.getElementById("conteudo").style="height: 100vh;";
	}
}

function fechar(){
	document.getElementById("curriculo").src="";
	document.getElementById("curriculo").style= "-webkit-transform: scale(1,0); -moz-transform: scale(1,0); -ms-transform: scale(1,0); -o-transform: scale(1,0); transform: scale(1,0);";
	document.getElementById("close").style= "opacity: 0; z-index: 0;";
	document.getElementById("conteudo").style="height: 100vh;";
}