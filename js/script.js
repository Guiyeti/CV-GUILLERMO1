
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        document.getElementById('mensaje-envio').style.display = 'none';
       
        var nombre = document.querySelector('input[name="nombre"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var mensaje = document.querySelector('textarea[name="mensaje"]').value;
        
        var todoCorrecto = true;
        
        if (nombre.length <= 3) {
            document.querySelectorAll('.error')[0].innerText = "Campo incorrecto";
            todoCorrecto = false;
        } else {
            document.querySelectorAll('.error')[0].innerText = "";
        }
        
      
        if (!email.includes('@')) {
            document.querySelectorAll('.error')[1].innerText = "Campo incorrecto";
            todoCorrecto = false;
        } else {
            document.querySelectorAll('.error')[1].innerText = "";
        }
        
        if (mensaje.length <= 5) {
            document.querySelectorAll('.error')[2].innerText = "Campo incorrecto";
            todoCorrecto = false;
        } else {
            document.querySelectorAll('.error')[2].innerText = "";
        }
        
        if (todoCorrecto) {
            document.getElementById('mensaje-envio').style.display = 'block';
 
            document.querySelector('input[name="nombre"]').value = '';
            document.querySelector('input[name="email"]').value = '';
            document.querySelector('textarea[name="mensaje"]').value = '';
            
        }
    });
});



