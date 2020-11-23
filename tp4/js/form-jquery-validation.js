$(document).ready(function () {
    $("#gps").on("click",function(){ //ici la géolocalisation nous donnera la latitude et la longitude de l’utilsateur
        getLocation();
    });
    $(document).keyup(function(e1) {
 // Le script qui devra calculer et afficher le nombre de mots et de caractères
        var nombreCaractere = $('#name').val().length;
        var msg = + nombreCaractere + 'car.';
        $('#compteur1').text(msg);
      
        var nombreCaractere = $('#firstname').val().length;
        var msg = + nombreCaractere + 'car.';
        $('#compteur2').text(msg);
       
        var nombreCaractere = $('#birth').val().length;
        var msg = + nombreCaractere + 'car.';
        $('#compteur3').text(msg);
      
        var nombreCaractere = $('#adresse').val().length;
        var msg = + nombreCaractere + 'car.';
        $('#compteur4').text(msg);

        var nombreCaractere = $('#mail').val().length;
        var msg = + nombreCaractere + 'car.';
        $('#compteur5').text(msg);
       });
      
    

       
     

});