function toggleView(inputId, element) {
    const input = document.getElementById(inputId);
    const closeEye = element.querySelector('.close');
    const openEye = element.querySelector('.open');

    if (input.type === "password") {
        input.type = "text";
        closeEye.classList.add('hide');
        openEye.classList.remove('hide');
    } else {
        input.type = "password";
        openEye.classList.add('hide');
        closeEye.classList.remove('hide');
    }
}

document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pw = document.getElementById('password').value;
    const cpw = document.getElementById('confirm').value;
    const status = document.getElementById('status');

    document.querySelectorAll('.error').forEach(el => el.innerText = "");
    status.innerHTML = "";
    let isValid = true;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('emailErr').innerText = "Format email salah.";
        isValid = false;
    }

    if (pw.length < 8) {
        document.getElementById('pwErr').innerText = "Password minimal 8 karakter.";
        isValid = false;
    }

    if (pw !== cpw) {
        document.getElementById('cpwErr').innerText = "Password tidak cocok.";
        isValid = false;
    }

    if (isValid) {
        status.innerHTML = `<div class="success-msg">Pendaftaran Berhasil</div>`;
        this.reset();
        
        document.querySelectorAll('.close').forEach(el => el.classList.remove('hide'));
        document.querySelectorAll('.open').forEach(el => el.classList.add('hide'));
    }
});