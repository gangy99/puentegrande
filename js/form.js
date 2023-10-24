// const fname = document.getElementById('nombre');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const message = document.getElementById('mensaje');
// const submit = document.getElementById('submit');

// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (fname.value === "" || email.value === "" || phone.value === "" || message.value === "") {
//         console.log("Por favor complete todos los campos antes de enviar el correo.");
//     } else {
//         let ebody = `
//         <b><em>Nombre:</em></b>${fname.value}
//         <br>
//         <b><em>Email:</em></b>${email.value}
//         <br>
//         <b><em>Teléfono:</em></b>${phone.value}
//         <br>
//         <b><em>Mensaje:</em></b>${message.value}
//         `;

//         Email.send({
//             SecureToken: "ef1bf771-e905-49e3-9ea9-579527fde27d", //add your token here
//             To: 'zangy.cu8@gmail.com',
//             From: 'arteydiseno@grupo-vm.com.mx',
//             Subject: "PuenteGrande",
//             Body: ebody
//         }).then(
//             message => {
//                 window.location.href = '../index.html';
//                 alert("Correo enviado exitosamente");
//             }
//         );
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('formulario');
  var nombre = document.getElementById('nombre');
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var mensaje = document.getElementById('mensaje');

  function valNombre() {
      return nombre.value !== '' && nombre.value !== null;
  }

  function valEmail() {
      return email.value !== '' && email.value !== null;
  }

  function valPhone() {
      return phone.value !== '' && phone.value !== null;
  }

  function valMensaje() {
      return mensaje.value !== '' && mensaje.value !== null;
  }

  function validacion(e) {
      e.preventDefault();
      var isNombreValid = valNombre();
      var isEmailValid = valEmail();
      var isPhoneValid = valPhone();
      var isMensajeValid = valMensaje();

      if (!isNombreValid || !isEmailValid || !isPhoneValid || !isMensajeValid) {
          if (!isNombreValid) {
              document.querySelector('input[type="text"] + .error').style.display = 'block';
          } else {
              document.querySelector('input[type="text"] + .error').style.display = 'none';
          }
          if (!isEmailValid) {
              document.querySelector('input[type="email"] + .error').style.display = 'block';
          } else {
              document.querySelector('input[type="email"] + .error').style.display = 'none';
          }
          if (!isPhoneValid) {
              document.querySelector('input[type="tel"] + .error').style.display = 'block';
          } else {
              document.querySelector('input[type="tel"] + .error').style.display = 'none';
          }
          if (!isMensajeValid) {
              document.querySelector('textarea + .error').style.display = 'block';
          } else {
              document.querySelector('textarea + .error').style.display = 'none';
          }
      } else {
          let ebody = `
          <b><em>Nombre:</em></b>${nombre.value}
          <br>
          <b><em>Email:</em></b>${email.value}
          <br>
          <b><em>Teléfono:</em></b>${phone.value}
          <br>
          <b><em>Mensaje:</em></b>${mensaje.value}
          `;

          Email.send({
              SecureToken : "ef1bf771-e905-49e3-9ea9-579527fde27d", //add your token here
              To : 'contacto@icat.mx', 
              From : 'arteydiseno@grupo-vm.com.mx',
              Subject : "PuenteGrande",
              Body : ebody
          }).then(
              message => {
                  window.location.href = '../index.html';
                  alert("Correo enviado exitosamente");
              }
          );
      }
  }

  formulario.addEventListener('submit', validacion);
});
