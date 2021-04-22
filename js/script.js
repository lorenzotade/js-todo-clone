$(function(){

  // creo array con compiti da svolgere
  var arrTodo = [
    "Esercitazione",
    "Ripasso",
    "Ticket :'(",
    "Portare la cagna a spasso",
    "Spazzolare gatta"
  ];

  // con un ciclo for percorro l'array e salvo i valori
  // in una variabile. Punto al template html e lo clono;
  // trovo la classe text al suo interno e le appendo
  // l'elemento a cui il ciclo sta puntando;
  // appendo il nuovo elemento creato dal template
  // alla ul in html.
  for (var i = 0; i < arrTodo.length; i++) {
    var strTodo = arrTodo[i];
    var item = $('.template li').clone();
    $(item).find('.text').append(strTodo);
    $('.app ul').append(item);
  }

  // ricarico il document per essere in grado di leggere
  // gli elementi aggiunti dinamicamente dal ciclo for;
  // a questo punto al click sul fontawesome trash
  // vado a puntare al genitore dello stesso (li);
  // sostituisco il testo in "Eliminato" e lo
  // rimuovo cancellando l'elemento desiderato dalla lista
  $(document).on('click', '.fa-trash-alt', function(){
    $(this).parent().html('<p class="text">Eliminato</p>').fadeOut(700);
  });

  // metto un event listener sul campo input. Al rilascio
  // di un tasto scatta una funzione che controlla se il
  // tasto rilasciato è Enter (n. 13); se lo è controlla
  // che la lunghezza del val() di input sia superiore ai 3
  // caratteri; se lo è ripete il procedimento di clone() e
  // append() spiegato in precedenza.
  $('.app input').keyup(function(element){
    if (element.which === 13) {
      if ($(this).val().length > 3) {
        var item = $('.template li').clone();
        $(item).find('.text').append($(this).val());
        $('.app ul').append(item);
        $(this).val('');
      }
    }
  });

});