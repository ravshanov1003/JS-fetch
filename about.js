const users = fetch("https://jsonplaceholder.typicode.com/users")

users
    .then((data) => data.json())
    .then((users) => {
        const tbody = document.querySelector("tbody");
        users.forEach((element) => {
            tbody.innerHTML += `
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td>${element.address.street} street, ${element.address.city} city</td>
        `
        })
    })