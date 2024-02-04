document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = {
        name: name,
        email: email,
        password: password
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.onload = function () {
        if (xhr.status == 201) {
            window.location.href = "data-list.html";
        } else {
            console.error("Error posting data:", xhr.statusText);
        }
    };

    xhr.send(JSON.stringify(userData));
});
