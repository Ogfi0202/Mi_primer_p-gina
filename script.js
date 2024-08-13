document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias por contactarnos, ' + name + '. Te responderemos pronto.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
