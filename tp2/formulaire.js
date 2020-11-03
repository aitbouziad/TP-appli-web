function validation(){
  
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var date = document.getElementById("date").value;
  var adresse = document.getElementById("adresse").value;
  var email = document.getElementById("email").value;
 
   
  
for(let item of document.querySelectorAll('.inputAW')){
  if(item.value.length < 5){
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
   


  Using regular expressions is probably the best way. You can see a bunch of tests here (taken from chromium)

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
Here's the example of regular expresion that accepts unicode:

const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
But keep in mind that one should not rely only upon JavaScript validation. JavaScript can easily be disabled. This should be validated on the server side as well.

Here's an example of the above in action:

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

$("#validate").on("click", validate);
  
}