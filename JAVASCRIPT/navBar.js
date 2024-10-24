//Funcion para desplegar el navBar
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        const openIcon = mobileMenuButton.querySelector('.block');
        const closeIcon = mobileMenuButton.querySelector('.hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
});
  
//Funcion para el carrusel
const carouselInner = document.querySelector('.carousel-inner');
const totalItems = document.querySelectorAll('.carousel-item').length;
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Cambia de imagen cada 3 segundos
setInterval(moveToNextSlide, 3000);

//Codigo para enviar maial en formulario de contacto
        // Inicializa EmailJS con tu usuario ID
        emailjs.init("vito");

        function sendEmail() {
            // Obtiene los valores del formulario
            const form = document.getElementById('contact-form');
            const formData = new FormData(form);

            // Envía el correo usando EmailJS
            emailjs.sendForm('service_z2fcyvr', 'template_6pjhrad', formData) // Cambia 'template_id' por tu ID de plantilla
                .then((response) => {
                    console.log('Success:', response);
                    alert('¡Mensaje enviado con éxito!');
                    form.reset();
                }, (error) => {
                    console.error('Error:', error);
                    alert('Ocurrió un error al enviar el mensaje.');
                });
        }