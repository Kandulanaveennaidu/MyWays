const form = document.getElementById("user-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const getUserUrl = ` https://test-api-v3.myways.ai/user?email=${email}`;

    fetch(getUserUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                alert("User found!");
            } else {
                const createUserUrl = "https://test-api-v3.myways.ai/user";
                fetch(createUserUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        alert("User created successfully!");
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});
