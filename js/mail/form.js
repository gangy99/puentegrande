const form = document.querySelector("form");
const sendMail = document.getElementById("emailA")

function handleSendEmail(event) {
    event.preventDefault();
    const formData = new FormData(this);

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message")
    };

    const emailBody = 
    `Nombre: ${data.name}%0D%0A
    Email: ${data.email}%0D%0A
    Teléfono: ${data.phone}%0D%0A
    Mensaje: ${data.message}`;

    
    sendMail.setAttribute(
        'href',
        `mailto:arteydiseno@grupo-vm.com.mx
        ?subject=Mensaje%20Puente%20Grande&body=${emailBody}`
    );
    sendMail.click()
}

form.addEventListener("submit", handleSendEmail)


//   document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const formData = new FormData(form);
//         const data = {
//             name: formData.get("name"),
//             email: formData.get("email"),
//             phone: formData.get("phone"),
//             message: formData.get("message")
//         };
//         const requestOptions = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         };
//         fetch("https://example.com/sendmail.php", requestOptions)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error("Error:", error));
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();
//         const formData = new FormData(form);
//         const data = {
//             name: formData.get("name"),
//             email: formData.get("email"),
//             phone: formData.get("phone"),
//             message: formData.get("message")
//         };
//         const requestOptions = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         };
//         fetch("https://smtp.elasticemail.com", requestOptions)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => console.error("Error:", error));
//     });
// });