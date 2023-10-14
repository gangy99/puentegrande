const fname = document.getElementById('nombre');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('mensaje');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <b><em>Nombre:</em></b>${fname.value}
    <br>
    <b><em>Email:</em></b>${email.value}
    <br>
    <b><em>Teléfon:</em></b>${phone.value}
    <br>
    <b><em>Mensaje:</em></b>${message.value}
    `;

    Email.send({
        SecureToken : "ef1bf771-e905-49e3-9ea9-579527fde27d", //add your token here
        To : 'arteydiseno@grupo-vm.com.mx', 
        From : 'arteydiseno@grupo-vm.com.mx',
        Subject : "PuenteGrande",
        Body : ebody
    }).then(
      message => alert(message)
    );
});