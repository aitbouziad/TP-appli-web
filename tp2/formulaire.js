function validation(){

  {
    document.getElementById("resultat").setAttribute("hidden",'hidden');//je récupure le résultat de fomulaire
    document.getElementById("error").setAttribute("hidden",'hidden');
//Ici on récuppère le nom et on compare sa longueur si elle est inférieure à 5 on affiche le message d'erreur 
    if (document.getElementById("nom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }  
     else if(document.getElementById("prenom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
      
     else if(document.getElementById("adress").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
     else if(document.getElementById("mail").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
     else {
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value

  }
   


  
  
}