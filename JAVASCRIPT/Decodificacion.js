document.getElementById('guardarPDF').addEventListener('click', () => {
    const form = document.getElementById('fichaForm');
    if (validateForm(form)) {
        const options = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: 'ficha_personalizada.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(form).set(options).save();
    }
});

function validateForm(form) {
    const nombreCompleto = form['nombreCompleto'].value.trim();
    const diaNacimiento = form['diaNacimiento'].value;
    const mesNacimiento = form['mesNacimiento'].value;
    const anioNacimiento = form['anioNacimiento'].value;
    const senderoNatalNumero = form['senderoNatalNumero'].value;
    const patronInternoNumero = form['patronInternoNumero'].value;
    const leccionesKarmicasNumero = form['leccionesKarmicasNumero'].value;
    const diaNatalNumero = form['diaNatalNumero'].value;
    const mesNatalNumero = form['mesNatalNumero'].value;
    const anioNatalNumero = form['anioNatalNumero'].value;
    const regaloUniversoNumero = form['regaloUniversoNumero'].value;
    const desafiosAlmaNumero = form['desafiosAlmaNumero'].value;

    if (!nombreCompleto) {
        Swal.fire('Error', 'Por favor, ingrese su nombre completo.', 'error');
        return false;
    }

    if (!isValidNumber(diaNacimiento, 1, 31)) {
        Swal.fire('Error', 'Por favor, ingrese un día de nacimiento válido (1-31).', 'error');
        return false;
    }

    if (!isValidNumber(mesNacimiento, 1, 12)) {
        Swal.fire('Error', 'Por favor, ingrese un mes de nacimiento válido (1-12).', 'error');
        return false;
    }

    if (!isValidNumber(anioNacimiento, 1900, 2100)) {
        Swal.fire('Error', 'Por favor, ingrese un año de nacimiento válido (1900-2100).', 'error');
        return false;
    }

    if (!isValidNumber(senderoNatalNumero, 1, 9)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Sendero Natal válido (1-9).', 'error');
        return false;
    }

    if (!isValidNumber(patronInternoNumero, 1, 9)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Patrón Interno válido (1-9).', 'error');
        return false;
    }

    if (!isValidNumber(leccionesKarmicasNumero, 1, 9)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Lecciones Kármicas válido (1-9).', 'error');
        return false;
    }

    if (!isValidNumber(diaNatalNumero, 1, 31)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Día Natal válido (1-31).', 'error');
        return false;
    }

    if (!isValidNumber(mesNatalNumero, 1, 12)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Mes Natal válido (1-12).', 'error');
        return false;
    }

    if (!isValidNumber(anioNatalNumero, 1, 9)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Año Natal válido (1-9).', 'error');
        return false;
    }

    if (!isValidNumber(regaloUniversoNumero, 1, 9)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Regalo del Universo válido (1-9).', 'error');
        return false;
    }

    if (!isValidNumber(desafiosAlmaNumero, 0, 9)) {
        Swal.fire('Error', 'Por favor, ingrese un número de Desafíos del Alma válido (0-9).', 'error');
        return false;
    }

    return true;
}

function isValidNumber(value, min, max) {
    const num = Number(value);
    return !isNaN(num) && num >= min && num <= max;
}