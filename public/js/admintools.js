async function getmenus() {
    await fetch("/getMenus", {
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
            let list = data.map((data) => data.menu_name);
            let type = data.map((data) => data.menu_type);
            show_all_menu(list, type);
        })
        .catch((error) => {
            console.error("error: ", error);
        });
}

function show_all_menu(list, type) {
    console.log(list);
    let output = document.getElementById("contentbox");
    let structure = ` <tr>
                    <th>
                        Menu Name
                    </th>
                    <th>
                        Menu Type
                    </th>
                    <th>
                        Edit the menu

                    </th>
                    <th>
                        Show menu items
                    </th>
                    <th>
                        Delete the menu
                    </th>
                </tr>`;
    for (let i = 0; i < list.length; i++) {
        structure += ` <tr class="menus" id="menu${i}">
    <td>
      <p class="menu_name">${list[i]}</p>
      </td><td>
      <p class="menu_name">${type[i]}</p>
       </td><td>
      
     
        <button class="" onclick="show_edit_menu('${list[i]}','${type[i]}')" id="menu_control_btn">Edit menu</button>
      
       </td><td>
      <form
        method="post"
       
      >
        <input type="hidden" value="${list[i]}" id="menu_name_item" name="hiden_values" />
        <button class="" onclick="show_items()" id="menu_control_btn">show items</button>
      </form>
       </td><td>
      <form
        method="post"
       
      >
        <input type="hidden" value="${list[i]}" id="menu_name_del" name="hiden_values" />
        <button class="" onclick="show_delet_menu()" id="delete_menu">Delete menu</button>
      </form>
       </td>
    </tr>`;
    }
    output.innerHTML = structure;
}

function show_edit_menu(name, type) {
    let output = document.getElementById("overlay");
    let structure = `<form method="post">
    
  <input type="hidden" value="${name}" id="hiden_value" name="hiden_value">

                    <input type="text" id="new_name" placeholder="Menu Name" value="${name}" name="menuname">
                    <label for="select_menu_type">Select the menu type:</label>
                    `;
    switch (type) {
        case "specialty_items":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" selected>Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "main_courses":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses" selected>Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "appetizers":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers" selected>Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "sandwiches":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches" selected>Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                   <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "breakfast_items":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items" selected>Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "sides":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides" selected>Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "deserts":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts" selected>Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "kids_menu":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu" selected>Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "beverages":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages" selected>Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                   <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "bar_menu":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu" selected>Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        case "delivery":
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery" selected>Delivery</option>
                    </select>
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
        default:
            structure += `    <select name="menu_type" id="select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                  
                    <button class="" id="" onclick="save_edit()" >Create Menu</button>
                </form>`;
            break;
    }
    output.innerHTML = structure;
}

function show_add_menu() {
    let output = document.getElementById("overlay");
    let structure = `<form method="post" >
  

                    <input type="text" placeholder="Menu Name" id="new_menu_name" name="menuname">
                    <label for="select_menu_type">Select the menu type:</label>
                    <select name="menu_type" id="new_select_menu_type">
                        <option value="specialty_items" >Specialty Items</option>
                        <option value="main_courses">Main Courses</option>
                        <option value="appetizers">Appetizers</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="breakfast_items">Breacfast</option>
                        <option value="sides">Sides</option>
                        <option value="deserts">Deserts</option>
                        <option value="kids_menu">Kids Menu</option>
                        <option value="beverages">Beverages</option>
                        <option value="bar_menu">Bar Menu</option>
                        <option value="delivery">Delivery</option>
                    </select>
                    <button  class="" id"" onclick="add_the_menu()">Creat new menu</button>
                </form>`;
    output.innerHTML = structure;
}
function show_delete_menu(name) {
    let output = document.getElementById("overlay");
    let structure = `<div class="deletin_aller" id="deletin_aller">
      <h1>Warning!</h1>
      <p>
        Deleting the menu will result in the loss of all its data. Are you sure
        you want to proceed?
      </p>
      <div class="options">
        <form method="post" action="menus.php">
          <button type="submit">Cancel</button>
        </form>
        <form method="post">
          <input type="hidden" value="${name}" id="menu_name_del_2" name="menuname_delete" />
          <button class="" id="" onclick="delete_the_menu()">Confirm Delete</button>
        </form>
      </div>`;
    output.innerHTML = structure;
}
function show_item_items(name, price, desc) {
    let output = document.getElementById("contentbox");
    let structure = ` <tr>
                    <th>
                        Menu Name
                    </th>
                    <th>
                        Menu Type
                    </th>
                    <th>
                        Edit the menu

                    </th>
                    <th>
                        Show menu items
                    </th>
                    <th>
                        Delete the menu
                    </th>
                </tr>`;
    for (let i = 0; i < name.length; i++) {
        structure += ` <tr class="menus" id="menu${i}">
 <td>
      <p class="item_name">${name[i]}</p>
      </td><td>
      <p class="item_price">${price[i]}</p>
       </td><td>
      <p class="item_desc">${desc[i]}</p>
       </td><td>
      <form
        method="post"
        action="items.php?action=edititem"
      >
        <input type="hidden" value="${name[i]}" name="hiden_values" />
        <button type="submit" id="menu_control_btn">edit item</button>
      </form>
       </td><td>
      <form
        method="post"
        action="items.php?action=deleteitem"
      >
        <input type="hidden" value="${name[i]}" name="hiden_values" />
        <button type="submit" id="delete_menu">Delete item</button>
      </form>
       </td>
    </tr>
 
 
 
 
 
 
 
 
 `;
    }
    output.innerHTML = structure;
}

function show_add_items() {
    let output = document.getElementById("overlay");
    let structure = `<form method="post" action="items.php?action=add_the_item">
  

                    <input type="text" placeholder="Item Name"  name="itemname">
                    <input type = "text" placeholder="Item Price" name="itemprice" >
                    <input type="text" placeholder="Item desc"  name="itemdesc">
                    <button type="submit" value="Create item">Creat new item</button>
                </form>`;
    output.innerHTML = structure;
}

function show_edit_item(name, price, desc) {
    let output = document.getElementById("overlay");
    let structure = `<form method="post" action="items.php?action=edit_the_item">
  
<input type="hidden" value="${name}" name="hiden_value">
                    <input type="text" placeholder="Item Name" value="${name}" name="itemname">
                    <input type = "text" placeholder="Item Price" value="${price}"name="itemprice" >
                    <input type="text" placeholder="Item desc" value="${desc}" name="itemdesc">
                    <button type="submit" value="Create item">Edit Item</button>
                </form>`;
    output.innerHTML = structure;
}
function show_delete_item(name) {
    let output = document.getElementById("overlay");
    let structure = `<div class="deletin_aller" id="deletin_aller">
      <h1>Warning!</h1>
      <p>
        Deleting this item will result in the loss of all its data. Are you sure
        you want to proceed?
      </p>
      <div class="options">
        <form method="post" action="items.php">
          <button type="submit">Cancel</button>
        </form>
        <form method="post" action="items.php?action=confirmdelete">
          <input type="hidden" value="${name}" name="itemname_delete" />
          <button type="submit">Confirm Delete</button>
        </form>
      </div>`;
    output.innerHTML = structure;
}
function show_users(Id, fname, lname, role) {
    let output = document.getElementById("outputbox");

    let form = `
  <div class="users_info">
     <table>
      <tr>
        <th>ID</th>
        <th>User First Name</th>
        <th>User Last Name</th>
        <th>Role</th>
        <th>Edit User</th>
        <th>Delete User</th>
        
      </tr>
    
   
  `;

    for (let i = 0; i < Id.length; i++) {
        form += `
      <tr>
        <td>${Id[i]}</td>
        <td>${fname[i]}</td>
        <td>${lname[i]}</td>
        <td>${role[i]}</td>
        <td>
      <form
        method="post"
        action="users.php?action=edituser"
      >
        <input type="hidden" value="${Id[i]}" name="hiden_values" />
        <button type="submit" id="menu_control_btn">edit user</button>
      </form>
       </td>
       <td>
      <form
        method="post"
        action="users.php?action=deleteuser"
      >
        <input type="hidden" value="${Id[i]}" name="hiden_values" />
        <button type="submit" id="menu_control_btn">delete user</button>
      </form>
       </td>
      </tr>
    
    `;
    }

    form += ` </table>

       
      </div>`;

    output.innerHTML = form;
}
function show_edit_user(id, fname, lname, role, email, pass) {
    let box = document.getElementById("box");
    let form = `<div class="edit_user">
      <form method="post" action="users.php?action=saveuser">
        <p>${id}</p>
        <input type="hidden" name="hidden_value" value="${id}" />
        <input
          type="text"
          name="user_fname"
          placeholder="First name"
          value="${fname}"
          required
        />
        <input
          type="text"
          name="user_lname"
          placeholder="Last name"
          value="${lname}"
          required
        />
        <!--select-->
        `;

    if (role == "admin") {
        form += `<select name="user_role" id="select_user_role">
                        <option value="worker" >worker</option>
                        <option value="admin" selected>admin</option>
                        
                    </select>`;
    } else {
        form += `<select name="user_role" id="select_user_role">
                        <option value="worker" selected>worker</option>
                        <option value="admin" >admin</option>
                        
                    </select>`;
    }

    form += `<input
          type="email"
          name="user_email"
          placeholder="Email"
          value="${email}"
          required
        />
        <input
          type="text"
          name="user_pass"
          placeholder="Password"
          value="${pass}"
          required
        />
        <button type="submit">save</button>
      </form>
    </div>`;

    box.innerHTML = form;
}
function show_delete_user(id) {
    let output = document.getElementById("box");
    let structure = `<div class="deletin_aller" id="deletin_aller">
      <h1>Warning!</h1>
      <p>
        Deleting this user will result in the loss of all its data. Are you sure
        you want to proceed?
      </p>
      <div class="options">
        <form method="post" action="users.php">
          <button type="submit">Cancel</button>
        </form>
        <form method="post" action="users.php?action=confirmdelete">
          <input type="hidden" value="${id}" name="user_delete" />
          <button type="submit">Confirm Delete</button>
        </form>
      </div>`;
    output.innerHTML = structure;
}

async function save_edit() {
    event.preventDefault();
    let old_name = document.getElementById("hiden_value").value;
    let new_name = document.getElementById("new_name").value;
    let new_type = document.getElementById("select_menu_type").value;

    let payload = {
        old_name: old_name,
        new_name: new_name,
        type: new_type,
    };

    await fetch("/save_menus", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                location.reload();
            }
        })
        .catch((error) => {
            console.error("error: ", error);
        });
}
function show_delet_menu() {
    event.preventDefault();
    let menu_name = document.getElementById("menu_name_del").value;

    show_delete_menu(menu_name);
}
async function delete_the_menu() {
    event.preventDefault();
    let menu_name = document.getElementById("menu_name_del_2").value;
    let payload = {
        name: menu_name,
    };
    console.log(payload);

    await fetch("/delete_menu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                location.reload();
            }
        })
        .catch((error) => {
            console.error("error: ", error);
        });
}

async function show_items() {
    event.preventDefault();
    let menu_name = document.getElementById("menu_name_item").value;
    await fetch("/show_items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
        body: JSON.stringify(menu_name),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                window.location.href = "/show_items";
            }
        })
        .catch((error) => {
            console.error("error: ", error);
        });
}

async function add_the_menu() {
    event.preventDefault();
    let new_menu_name = document.getElementById("new_menu_name").value;
    let new_select_menu_type = document.getElementById(
        "new_select_menu_type"
    ).value;

    let payload = {
        menu_name: new_menu_name,
        menu_type: new_select_menu_type,
    };

    await fetch("/add_new_menu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"), // Include CSRF token
        },
        body: JSON.stringify(payload),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                location.reload();
            }
        })
        .catch((error) => {
            console.error("error: ", error);
        });
}
