const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const GennerElement = document.getElementById('genner');
const messageElement = document.getElementById('message');
const submitButton = document.getElementById('submit');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameElement.value;
    const email = emailElement.value;
    const genner = GennerElement.value;
    const message = messageElement.value;

    // Hàm kiểm tra định dạng email bằng regular expression
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    var errorMessage = []

    if (!name) {
        errorMessage.push('Please enter your name')
    }
    if (!email) {
        errorMessage.push('Please enter your email')
    }
    if (!validateEmail(email)) {
        errorMessage.push('Please enter a valid email address');
    }
    if (!genner) {
        errorMessage.push('Please enter your genner')
    }
    if (!message) {
        errorMessage.push('Please enter your message')
    }
    if (errorMessage.length > 0) {
        alert(errorMessage.join('\n'))

    } else {
        const data = {
            name: name,
            email: email,
            genner: genner,
            message: message
        }
        postData(data)
        alert("Thank you for your feedback!")
        window.location = 'https://mail.google.com/mail/u/0/?hl=vi#inbox';
    }
})


async function postData(data) {
    const formData = new FormData();
    formData.append('entry.1727641514', data.name);
    formData.append('entry.778725351', data.email);
    formData.append('entry.575752561', data.genner);
    formData.append('entry.903573674', data.message);
    console.log(formData);
    fetch("https://docs.google.com/forms/d/e/1FAIpQLScNemsIvhFPeg5tAV4MSS0wH_BMUaoyeY9jgbWdMB17qenBBA/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
}


/**
 * gửi mail vào extencion của bảng tính
 */