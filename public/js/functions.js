function show_menus(menu_id, menu_name, menu_type) {
    let output = document.getElementById("left_bar");
    let form = ``;
    for (let i = 0; i < menu_id.length; i++) {
        switch (menu_type[i]) {
            case "specialty_items":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/specialty_items.png" class="item_logo" />
          </div>`;
                break;
            case "main_courses":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/main_courses.png" class="item_logo" />
          </div>`;
                break;
            case "appetizers":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/appetizers.png" class="item_logo" />
          </div>`;
                break;
            case "sandwiches":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/sandwiches.png" class="item_logo" />
          </div>`;
                break;
            case "breakfast_items":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/breakfast_items.png" class="item_logo" />
          </div>`;
                break;
            case "sides":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/sides.png" class="item_logo" />
          </div>`;
                break;
            case "deserts":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/deserts.png" class="item_logo" />
          </div>`;
                break;
            case "kids_menu":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">
     
      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/kids_menu.png" class="item_logo" />
          </div>`;
                break;
            case "beverages":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/beverages.png" class="item_logo" />
          </div>`;
                break;
            case "main_courses":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">

      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icons/main_courses.png" class="item_logo" />
          </div>`;
                break;
            case "delivery":
                form += `<form method="post" action="main.php?action=get_menu_items&id=${menu_id[i]}">
     
      <button type="submit" class="choose_menu" id="choose_menu_${menu_id[i]}">
        <div class="frame">
          <div class="image">
            <img src="../icon/delivery.png" class="item_logo" />
          </div>`;
                break;
        }
        form += `
 <div class="title">
            <h1>${menu_name[i]}</h1>
          </div>
        </div>
      </button>
    </form>
 
 `;
    }

    output.innerHTML = form;
}
function show_menu_items(id, name, price, desc, menu_id) {
    let output = document.getElementById("sub_menu");
    let form = ``;
    for (let i = 0; i < id.length; i++) {
        form += `
      <form method="post" action="main.php?action=set_order">
      <input type="hidden" value="${menu_id}" name="menu_id" />
      <input type="hidden" value="${id[i]}" name="dish_id" />
      <button type="submit" class="choose_item" onclick="set_order(${menu_id},${id[i]})">
      <div class="choose_item_div">
        <h2 id="item_name">${name[i]}</h2>
        <h2 id="item_price">${price[i]}</h2>
        <h3 id="item_desc">${desc[i]}</h3>
        </div>
      </button>
    </form>
      `;
    }
    output.innerHTML = form;
}
function checkLogin() {
    fetch("/isLoged", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (!data["state"]) {
                window.location.href = "/";
            }
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
