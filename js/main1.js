$('#izmeniForm').submit(function(){

    event.preventDefault();
    console.log("Izmeni je pokrenuto.");
    $form = $(this);

    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    request = $.ajax({
        url:'handler/update.php',
        type:'post',
        data:serijalizacija
    });

    request.done(function(response, textStatus, jqXHR){

        if(response === "Success"){
            alert("Kolokvijum je izmenjen");
            console.log("Uspesna zamena");
            location.reload(true);
        }
        else console.log("Kolokvijum nije izmenjen " + response);
        console.log(response);
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error('Sledeca greska se desila: '+textStatus, errorThrown)
    });
        
});