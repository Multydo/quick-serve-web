function signup() {
    let xlogin = document.getElementById("right_x_frame");
    let xsignup = document.getElementById("left_x_frame");
    let mlogin = document.getElementById("right_login_frame");
    let msignup = document.getElementById("left_signup_frame");

    xlogin.style.transition = "transform 1s ease";
    xlogin.style.transform = "translateX(0)";
    xsignup.style.transition = "transform 1s ease";
    xsignup.style.transform = "translateX(100%)";

    mlogin.style.transition = "transform 1s ease";
    mlogin.style.transform = "translateX(-100%)";
    msignup.style.transition = "transform 1s ease";
    msignup.style.transform = "translateX(0)";
}
function login() {
    let xlogin = document.getElementById("right_x_frame");
    let xsignup = document.getElementById("left_x_frame");
    let mlogin = document.getElementById("right_login_frame");
    let msignup = document.getElementById("left_signup_frame");

    xlogin.style.transition = "transform 1s ease";
    xlogin.style.transform = "translateX(-100%)";
    xsignup.style.transition = "transform 1s ease";
    xsignup.style.transform = "translateX(0)";

    mlogin.style.transition = "transform 1s ease";
    mlogin.style.transform = "translateX(0)";
    msignup.style.transition = "transform 1s ease";
    msignup.style.transform = "translateX(100%)";
}

function submitForm(event) {
    event.preventDefault();

    let user_email = document.getElementById("email").value;
    let user_password = document.getElementById("password").value;

    const payload = {
        email: user_email,
        password: user_password,
    };

    // Send the request
    fetch("/Alogin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok) {
                console.log(response); // Follow the redirect
            } else {
                window.location.href = "/main";
            }
        })
        .then((data) => {
            // Handle the response data
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
