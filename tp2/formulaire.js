function validation(){
  
    var nom = document.getElementById("nom").value;
    var prénom = document.getElementById("prénom").value;
    var date = document.getElementById("date").value;
    var adresse= document.getElementById("adresse").value;
    var mail = document.getElementById("mail").value;
  
    let error = "";
    for(let i of document.querySelectorAll('.inputAW')){
        console.log( i.value.length, i.getAttribute('maxlength'))
        
        if{ i.value.length < 5 && i.value.length > i.getAttribute('maxlength')

        document.getElementById("error").innerHTML="Veuillez renseigner tous les champs , ils doivent contenir au minimum 5 caractéres";}
        else {document.getElementById("resultat").innerHTML="Bienvenue";
      }