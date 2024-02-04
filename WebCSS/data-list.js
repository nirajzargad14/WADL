// Fetch user data from localStorage and display on the data list page
document.addEventListener("DOMContentLoaded", function () {
    const userDataList = document.getElementById("userDataList");

    // Retrieve user data from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Display user data on the page
    storedUsers.forEach(function (user, index) {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
        userDataList.appendChild(listItem);
    });
});
