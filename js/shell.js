(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {


      let interval = setInterval(() => {
          // validamos que no sea el elemento 0 para aplicarle el none al anterior!
          if(document.getElementById('shell').classList.contains('shellOn')){
            document.getElementById('shell').classList.remove('shellOn');
            document.getElementById('shell').classList.add('shellOf');
          } else{
            document.getElementById('shell').classList.remove('shellOf');
            document.getElementById('shell').classList.add('shellOn');
          }


          // if(document.getElementById('shell').classList.contains('shellOf')){
          //   document.getElementById('shell').classList.remove('shellOf');
          // }
          // shellOn
          // shellOf
//          if (i != 0) $(p[i-1]).hide();
          //validamos si es igual al lenght para finalizar el bucle
          // if (i == p.length) {
          //      //retornamos i a 0
          //       i=0;
          //     // limpiamos el intervalor para que no se ejecute mas si no es infinito
          //      if(!infi) clearInterval(interval)
          // }
          // // aplicamos el display block
          // $(p[i]).show("slow");
          // // aumentamos i en 1
          // i++;
          console.log("Aqui");
      }, 600);


    }); // DOM CONTENT LOADED

})();


/*
classList.contains('fa-check-circle')
*/
