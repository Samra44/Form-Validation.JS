document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        
        let name = document.getElementById('name').value;
        let pass = document.getElementById('pass').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;

        let nameRegex = /^[A-Za-z\s]+$/;
        let passRegex = /^[A-Za-z0-9/_]+$/; // Adjusted regex for password
        let emailRegex = /^[A-Za-z]+(?:[_][A-Za-z0-9])*@[a-z]+\.[a-z]{2,4}$/; // Fixed regex for email
        let phoneRegex = /^\d{10,}$/; // Corrected regex for phone numbers

        if (name === '' || pass === '' || email === '' || phone === '' || 
            !nameRegex.test(name) || !passRegex.test(pass) || 
            !emailRegex.test(email) || !phoneRegex.test(phone)) {
            alert("Please fill the data with valid fields");
        } else {
            alert("NAME: " + name + "\nPASSWORD: " + pass + "\nEMAIL: " + email + "\nPHONE: " + phone);
        }
    });
});
