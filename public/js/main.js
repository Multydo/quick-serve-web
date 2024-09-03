function GoTOProfile() {}
async function goMenus() {
    event.preventDefault();
    let state = await checkLogin();
    console.log(state);
    /*fetch("/isLoged", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
    })
        .then((response) => {
            if (!response.ok) {
                console.log(response); // Follow the redirect
            } else {
                window.location.href = "/admin_menus";
            }
        })
        .then((data) => {
            // Handle the response data
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });*/

    window.location.href = "/admin_menus";
}
