function link(){
	window.location="http://www.google.com";
}

function sound(){
	var sonido= new Audio('sonidos/imIronman.mp3');
	sonido.play();
}
 
 var Personajes=[
  		"Stark",
  		"Capitan",
  		"Hulk",
  		"Thor",
  		"Arrow",
  		"Octo",
  		"Elon",
  		"Shaggy",
  		"Goku",
  		"Chapulin",
  		"Batman",
  		"Metroid"
  		  ];

var Chasquido=[];

  
function Snap() {
 	
	var Half = Math.round((Personajes.length)/2);
 	
 	for (var i = 0; i <Half; i++) {
 		
 		var Muerto= Personajes[Math.floor(Math.random() * Personajes.length)];
 		
 		Sacar(Muerto);
 		
 		Chasquido.push(Muerto);
 	
 	}
 
 	
 	for (var i = Chasquido.length-1; i >-1; i--) {
 	    document.getElementById(Chasquido[i]).style.opacity="0";
	}
 	
 	
  }
 		




 
function Sacar(Death){
var index= Personajes.indexOf(Death);
if (index > -1) {
  Personajes.splice(index, 1);
}
}
 	
 




 	function restore(){
 			
 		for (var i = Chasquido.length - 1; i >= 0; i--) {
 		Personajes.push(Chasquido[i]);
 		

 	}
 		for (var i = Personajes.length-1 ; i >= 0; i--) {
 		 document.getElementById(Personajes[i]).style.opacity="1";

 	}	
 	Chasquido=[]
 }			
	
 		
 		
 		


 	



