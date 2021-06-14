const users = fetch("https://jsonplaceholder.typicode.com/users")

users
    .then(data => data.json())
    .then((element) => {
        element.forEach((user) => {
            document.getElementById("collection").innerHTML += card(user)
        })

        function card(user) {
            return `
            <div class="card">
                <img src="images/team2.jpg" alt="John" style="width:100%">
                <h1>${user.name}</h1>
                <p class="title">${user.email}</p>
                <p>${user.company.name}</p>
                <div style="margin: 24px 0;">
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                </div>
                <p><button>Contact</button></p>
            </div>
            `
        }
    })