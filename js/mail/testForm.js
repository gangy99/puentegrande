const fname = document.getElementById('nombre');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('mensaje');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Nombre: </h1>${fname.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    <h1>Teléfono: </h1>${phone.value}
    <br>
    <h1>Mensaje: </h1>${message.value}
    `;

    Email.send({
        SecureToken : "ef1bf771-e905-49e3-9ea9-579527fde27d", //add your token here
        To : 'arteydiseno@grupo-vm.com.mx', 
        From : 'arteydiseno@grupo-vm.com.mx',
        Subject : "Tienes una notificación desde PuenteGrande",
        Body : ebody
    }).then(
      message => alert(message)
    );
});