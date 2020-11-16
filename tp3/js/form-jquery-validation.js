$( document ).ready(function() {
     
    console.log( "DOM ready!" );
   
        
       $(".champs").keyup(function(){
           if($(this).val().length < 5){ 
               $(this).css({  
                   borderColor : "red",
               color : "red"
               });
            }
            else{
                $(this).css({  
                borderColor : "green",
                color : "green"
            });
            }
       });        
       $("#envoyer").on("click", function (e) {
        e.preventDefault();
        var isError = false;
        $(".champs").each( function (item) {
            if ($( this ).val().length < 5 ){
                isError = true;
            }
        });

        if(isError){
            $(".modal-body2").text("Erreur dans la saisie")
            $('#Modal').modal("show");
        }else{
            $(".modal-title").text("Bienvenue " + document.querySelector("#prenom").value);
            $(".modal-body").html( "Vous etes nés le "+ document.querySelector("#date").value+" </br>et vous habitez à:"+'</br><a href ="http://maps.google.com/maps?q='+document.querySelector("#adresse").value+'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='+document.querySelector("#adresse").value+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');
            $('#myModal').modal("show");
        }
        $("#date").datepicker({ dateFormat: 'dd/mm/yy', 
        maxDate :'16/11/2020'
      });   
    });

     
   
});

