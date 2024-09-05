function GoTOProfile() {}
async function goMenus() {
    event.preventDefault();
    let state = await checkLogin();
    console.log(state);

    window.location.href = "/admin_menus";
}

async function goUsers() {
    event.preventDefault();
    let state = await checkLogin();
    console.log(state);

    window.location.href = "/users";
}
