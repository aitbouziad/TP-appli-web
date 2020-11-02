function validation(){
 
  
    var nom = document.getElementById("nom").value;
    var prénom = document.getElementById("prénom").value;
    var date = document.getElementById("date").value;
    var adresse= document.getElementById("adresse").value;
    var mail = document.getElementById("mail").value;

    document.getElementById("error").innerHTML = "";
    for(let item of document.querySelectorAll('.inputAW')){
      if(item.value.length < 5){
        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
        document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
  
    }
      

  }