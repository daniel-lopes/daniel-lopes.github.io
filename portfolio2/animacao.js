var x = setInterval(function () {
	clearInterval(x);
	document.getElementById("menu").style= "transform: rotate(-70deg);";
	document.getElementById("pIndex").style= "transform: translate(-80%,0);";
	document.getElementById("foto").style= "transform: scale(1,2.4);";
	document.getElementById("rodape").style= "transform: translate(50%, -850%);";
	document.getElementById("fotoIndex").style= "transform: rotate(-180deg);";
	document.getElementById("h1").style= "transform: translate(-28%, -1000%);";
	
}, 0);

function animacao(){

	var a = setInterval(function () {
		clearInterval(a);

		var b = setInterval(function () {
			clearInterval(b);
			document.getElementById("menu").style= "transform: rotate(0deg); transition: 3s;";
		}, 1000);

		var c = setInterval(function () {
			clearInterval(c);
			document.getElementById("h1").style= "transform: translate(0%,0%); transition: 3.4s;";
		}, 2800);

		var d = setInterval(function () {
			clearInterval(d);
			document.getElementById("pIndex").style= "transform: translate(0%,0%); transition: 3s;";
		}, 4800);

		var e = setInterval(function () {
			clearInterval(e);
			document.getElementById("corpo").style= "transform: rotate(180deg); transition: 4s;";
		}, 6450);

		var f = setInterval(function () {
			clearInterval(f);
			document.getElementById("foto").style= "transform: scale(1,1); transition: 4s;";
			//document.getElementById("img-atravesando").style="opacity: 1; right: 140%; transition: right 5.5s;";
		}, 9900);

		var g = setInterval(function () {
			clearInterval(g);
			document.getElementById("rodape").style= "transform: translate(0%,0%); transition: 3.5s;";
		}, 11500);

		var h = setInterval(function () {
			clearInterval(h);
			//document.getElementById("img-atravesando").style="display:none;";
			document.getElementById("corpo").style= "transform: rotate(0deg); transition: 4s;";
		}, 13700);

		var i = setInterval(function () {
			clearInterval(i);
			document.getElementById("fotoIndex").style= "transform: rotate(0deg); transition: 4s;";
		}, 15100);

		var j = setInterval(function () {
			clearInterval(j);
			document.getElementById("fotoIndex").src="imagens/robo.gif";
		}, 17500);

	}, 400);
}
