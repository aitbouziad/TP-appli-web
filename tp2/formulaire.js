function validation(){

  document.getElementById("error").innerHTML = "";

   
  
for(let item of document.querySelectorAll('.inputAW')){



  if (item.value == "") {
    var label =   document.querySelector("label[for="+item.id+"]").textContent;
    document.getElementById("error").innerHTML += ` ce champ est obligatoire pour : ${label} <br/>`;
    document.getElementById("error").classList.add("display");
    document.getElementById("resultat").classList.remove("display")
  
  } else if(item.value.length < 5){
    // recuperation du label
    var label =   document.querySelector("label[for="+item.id+"]").textContent;
    // ajout du message d'erreur
    document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
    
    // ajout de la classe CSS "display"
    document.getElementById("error").classList.add("display");
      document.getElementById("resultat").classList.remove("display")

}
}

  if(document.getElementById("error").innerHTML == ""){
    var prenom = document.getElementById("prenom").value
    document.getElementById("resultat").innerHTML = `Bienvenue à ${prenom}`;

    document.getElementById("error").classList.remove("display")
  document.getElementById("resultat").classList.add("display")
  }
   


  
  
}